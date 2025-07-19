export default defineNuxtRouteMiddleware((to, from) => {
    const loggedIn = false;

    const protectedPages = ['/tentang', '/profile'];

    if (!loggedIn && protectedPages.includes(to.path)) {
        console.log(`Akses ke ${to.path} ditolak, mengarahkan ke beranda.`);
        return navigateTo('/'); // Redirect to home if not
    }
})