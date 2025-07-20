export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        console.log('HOOK: Aplikasi berhasil dimount di browser');
    });

    nuxtApp.hook('page:finish', () => {
        console.log('HOOK: Halaman selesai dimuat dan ditampilkan');
    });

    
})