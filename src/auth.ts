import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/server/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    callbacks: {
        //async session({ session, user }) {
        //    console.log('[DIEGO]')
        //    return session;
        //},
    },
});
