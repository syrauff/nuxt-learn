export default defineEventHandler(async (event) => {
    if (event.node.req.method !== 'POST'){
        throw createError({
            statusCode: 405,
            statusMessage: 'Metode tidak diizinkan, gunakan POST'
        });
    }
    
    const body = await readBody(event);

    if (!body.nama || !body.harga){
        throw createError({
            statusCode: 400,
            statusMessage: 'Nama dan harga wajib diisi'
        });
    }

    console.log('Produk baru diterima:', body);

    return {
        status: 'OK',
        message: 'Produk berhasil ditambahkan!',
        data: body
    };
})