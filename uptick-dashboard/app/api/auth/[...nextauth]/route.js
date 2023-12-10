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
                const baseUrl = process.env.BASE_URL;

                try {
                    const response = await fetch(`${baseUrl}/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                        }),
                    });

                    const user = await response.json();

                    if (response.ok && user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
                }
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
                token.accessToken = user.accessToken;
                
                // Decode token and get the payload
                // const decodedToken = JSON.parse(Buffer.from(user.accessToken.split('.')[1], 'base64').toString('utf-8'));
            }
            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
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