import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getSession } from 'next-auth/react';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const { username, password } = credentials;

                try {
                    const response = await fetch('https://upthick-talent-teama.onrender.com/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                        }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                        const accessToken = data.accessToken;

                        return {
                            id: 1,
                            username: 'Admin',
                            accessToken
                        };
                    } else {
                        const errorData = await response.json();
                        const errorMessage = errorData.message || 'Authentication failed';

                        return { message: errorMessage };
                    }
                } catch (error) {

                }
                return user;
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/',
        signOut: '/',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // Decode and log the token payload
                const decodedToken = JSON.parse(Buffer.from(user.accessToken.split('.')[1], 'base64').toString('utf-8'));

                return {
                    userId: decodedToken.userId,
                    role: decodedToken.role,
                    username: user.username,
                    issuedAt: decodedToken.iat,
                    expires: decodedToken.exp,
                    accessToken: user.accessToken,
                }
            }
            return token;
        },
        async session({ session, token }) {
            console.log('Input token \n', token);
            console.log('Input session \n', session);

            const expires = new Date(token.expires * 1000);
            
            if (token) {
                session.user.userId = token.userId;
                session.user.username = token.username;
                session.user.role = token.role;
                session.iat = token.issuedAt;
                session.exp = new Date(token.expires).valueOf();
                session.expires = expires;
                session.accessToken = token.accessToken;
            }
            console.log('Output session \n', session);
            return session;
        }
    }
};

export const customFetch = async (url, options) => {
    const session = await getSession();

    return fetch(url, {
        ...options,
        headers: {
            ...options?.headers,
            ...(session && { Authorization: `Bearer ${session.accessToken}` }),
        },
    });
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };