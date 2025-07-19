import { dapatkanProdukById } from "~/server/utils/database";

export default defineEventHandler((event) => {
    const idProduk = event.context.params.id;

    const produk = dapatkanProdukById(idProduk);

    if (!produk) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Produk tidak ditemukan'
        })
    }

    return produk;
})