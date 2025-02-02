import { auth } from '@/auth';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default async function Home() {
    const session = await auth();
    const user = session?.user;

    return (
        <main className="p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-4xl font-bold text-center">FamTask</h1>
                {user ? (
                    <div>
                        <img
                            src={user.image ?? ''}
                            alt={user.name ?? ''}
                            className="w-20 h-20 rounded-full"
                            width="80"
                        />
                    </div>
                ) : (
                    <Link href="/auth" className={buttonVariants({ variant: 'outline' })}>
                        Inicia sesión
                    </Link>
                )}
            </div>
        </main>
    );
}
