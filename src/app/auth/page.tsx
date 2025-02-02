import { signIn } from '@/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LogIn() {
    return (
        <main className="flex flex-grow flex-col items-center justify-center pt-24 pb-40 px-8">
            <Card className="max-w-full w-96">
                <CardHeader className="mb-2">
                    <CardTitle className="text-2xl font-semibold text-center mb-2">
                        FamTask
                    </CardTitle>
                    <CardDescription className="text-center">
                        Ser padre/madre de familia no es tarea sencilla.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        className="flex flex-col gap-4"
                        action={async () => {
                            'use server';
                            await signIn('github', { callbackUrl: '/home' });
                        }}
                    >
                        <Button type="submit" variant="outline">
                            Inicia sesión con GitHub
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
