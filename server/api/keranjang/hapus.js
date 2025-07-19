export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    console.log("Hapus Keranjang", body.id);

    // throw createError({
    //     statusCode: 500,
    //     statusMessage: 'Gagal menghapus dari database!',
    // });

    return { status: 'OK', message: 'Produk berhasil dihapus '};
})

