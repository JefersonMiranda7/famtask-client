import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { prisma } from '@/server/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { getUserById } from './server/actions/user';

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;

            const dbUser = await getUserById(token.sub);
            if (dbUser) {
                token.role = dbUser.role;
            }

            return token;
        },
        async session({ session, token }) {
            if (token.sub) {
                session.user.id = token.sub;
            }

            if (token.role) {
                session.user.role = token.role as string;
            }

            return session;
        },
    },
    ...authConfig,
});
