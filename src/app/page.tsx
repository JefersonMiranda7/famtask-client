import { auth } from '@/auth';
import { validateRoute } from '@/lib/utils/validRoutes';

export default async function Home() {
    const session = await auth();
    const user = session?.user;
    validateRoute(user, '/');

    return (
        <main className="p-8 pb-20 gap-16 sm:p-20">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-4xl font-bold text-center">FamTask</h1>
            </div>
        </main>
    );
}
