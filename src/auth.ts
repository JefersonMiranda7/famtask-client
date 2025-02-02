import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/server/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;

            // TODO: Fetch user data from the database
            // token.role = user.role

            return token;
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            // TODO: Assign role to the session
            // session.role = token.role

            return session;
        },
    },
});
