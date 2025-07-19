export default defineNuxtPlugin((nuxtApp => {
    const helpers = {
        formatSingkat: (tanggal) => {
            return new Date(tanggal).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        }
    }
    nuxtApp.provide('waktu', helpers);
}))