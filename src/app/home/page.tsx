import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { validateRoute } from '@/lib/utils/validRoutes';

export default async function Home() {
    const session = await auth();
    const user = session?.user;
    validateRoute(user, '/home');

    return (
        <main className="p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-4xl font-bold text-center">FamTask</h1>
                <h3>This is a protected route</h3>
                {JSON.stringify(user, null, 2)}
                {user ? (
                    <div>
                        <img
                            src={user.image ?? ''}
                            alt={user.name ?? ''}
                            className="w-20 h-20 rounded-full"
                            width="80"
                        />
                    </div>
                ) : null}

                <form
                    action={async () => {
                        'use server';
                        await signOut({ redirectTo: '/' });
                    }}
                >
                    <Button type="submit" variant="outline">
                        Cerrar sesión
                    </Button>
                </form>
            </div>
        </main>
    );
}
