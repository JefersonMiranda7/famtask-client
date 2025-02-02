'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Role } from '@/lib/types/user';

interface OnboardingFormProps {
    setRoleAction: (role: Role) => void;
}

export function OnboardingForm({ setRoleAction }: OnboardingFormProps) {
    const [role, setRole] = useState<Role | null>(null);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (!role) return;

        setRoleAction(role);
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="flex w-full gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setRole(Role.Parent)}
                    className={`w-1/2 flex flex-col h-auto py-4 ${role === Role.Parent ? 'bg-sky-900 hover:bg-sky-700 text-white hover:text-white' : ''}`}
                >
                    <h4>Soy el padre/madre</h4>
                    <p className="text-xs font-normal break-words whitespace-normal">
                        Quiero ayudar a mi familia a organizarse mejor y a cumplir con sus tareas
                    </p>
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setRole(Role.Child)}
                    className={`w-1/2 flex flex-col h-auto py-4 ${role === Role.Child ? 'bg-green-700 hover:bg-green-600 text-white hover:text-white' : ''}`}
                >
                    <h4>Soy el hijo/hija</h4>
                    <p className="text-xs font-normal break-words whitespace-normal">
                        Quiero que mi familia me ayude a organizarme mejor y a cumplir con mis
                        tareas
                    </p>
                </Button>
            </div>

            <Button type="submit" disabled={!role}>
                Continuar
            </Button>
        </form>
    );
}
