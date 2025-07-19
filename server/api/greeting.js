export default defineEventHandler((event) => {
    return {
        pesan: 'Hello, World!',
        waktu: new Date().toLocaleTimeString('id-ID')
    }
});