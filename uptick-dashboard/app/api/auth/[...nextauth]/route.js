import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
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
        async jwt(token, user) {
            if (user) {
                console.log(user);
                token.id = user.id;
                token.username = user.username;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session(session, token) {
            if (token) {
                console.log(token);
                session.user.id = token.id;
                session.user.username = token.username;
                session.accessToken = token.accessToken;
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };