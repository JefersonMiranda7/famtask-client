'use server';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { Role } from '@/lib/types/user';

export async function setRole(role: Role) {
    const currentUser = await auth();
    // TODO: Update user role in the database
    //redirect('/home');
}
