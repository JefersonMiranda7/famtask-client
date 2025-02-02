import { prisma } from '@/server/prisma';

export function getUserById(id: string) {
    try {
        return prisma.user.findUnique({ where: { id } });
    } catch (error) {
        console.error(error);
        return null;
    }
}
