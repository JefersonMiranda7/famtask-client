import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OnboardingForm } from '@/components/onboarding/onboarding-form';
import { setRole } from '@/server/actions/auth';

export default async function Onboarding() {
    return (
        <main className="flex flex-grow flex-col items-center justify-center pt-24 pb-40 px-8">
            <Card className="max-w-full w-[500px]">
                <CardHeader className="mb-2">
                    <CardTitle className="text-2xl font-semibold text-center mb-2">
                        Bienvenido
                    </CardTitle>
                    <CardDescription className="text-center">
                        Terminemos de configurar tu cuenta.
                        <br />
                        ¿Eres el padre/madre de familia o el hijo/hija?
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <OnboardingForm setRoleAction={setRole} />
                </CardContent>
            </Card>
        </main>
    );
}
