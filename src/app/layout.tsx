import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'FamTask',
    description:
        'Organiza las tareas del hogar de forma divertida. Asigna tareas a tus hijos, motívalos con recompensas y fomenta la responsabilidad en familia.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`w-full min-h-screen overflow-x-hidden ${geistSans.variable} font-geist antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
