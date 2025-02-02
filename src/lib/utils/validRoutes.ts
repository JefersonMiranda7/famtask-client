import { redirect } from 'next/navigation';
import { ExtendedUser } from '../../../next-auth';

const protectedRoutes = ['/home'];
const publicRoutes = ['/', '/auth'];

export function validateRoute(user: ExtendedUser | undefined, pathname: string) {
    const isLoggedIn = !!user;
    const hasRole = user?.role;

    // Protect routes
    if (protectedRoutes.includes(pathname) && !isLoggedIn) {
        return redirect('/');
    }

    // Prevent logged users from accessing the login page
    if (publicRoutes.includes(pathname) && isLoggedIn) {
        return redirect('/home');
    }

    // Validate user finished the onboarding
    if (pathname === '/home' && !hasRole) {
        return redirect('/onboarding');
    }
}
