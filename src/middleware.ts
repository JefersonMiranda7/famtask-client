import { auth } from '@/auth';

const protectedRoutes = ['/home'];
const publicRoutes = ['/', '/auth'];

export default auth((req) => {
    const pathname = req.nextUrl.pathname;
    const isLoggedIn = !!req.auth;
    const hasRole = req.auth?.user?.role;

    // Protect routes
    if (protectedRoutes.includes(pathname) && !isLoggedIn) {
        const newUrl = new URL('/', req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Prevent logged users from accessing the login page
    if (publicRoutes.includes(pathname) && isLoggedIn) {
        const newUrl = new URL('/home', req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Validate user finished the onboarding
    if (pathname === '/home' && !hasRole) {
        const newUrl = new URL('/onboarding', req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
