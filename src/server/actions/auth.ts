'use server';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { prisma } from '@/server/prisma';
import { Role } from '@/lib/types/user';

export async function setRole(role: Role) {
    const currentUser = await auth();
    if (!currentUser) {
        console.error('User not found');
        return redirect('/');
    }

    await prisma.user.update({
        where: { id: currentUser.user.id },
        data: { role },
    });

    redirect('/home');
}
