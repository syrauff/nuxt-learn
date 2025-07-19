const daftarProduk = [
  { id: '1', nama: 'Baju Koding Keren', harga: 150000, deskripsi: 'Baju nyaman untuk sesi koding semalam suntuk.' },
  { id: '2', nama: 'Mug Programmer', harga: 75000, deskripsi: 'Mug yang bisa mengubah kopi menjadi kode.' },
  { id: '3', nama: 'Stiker Laptop Dev', harga: 30000, deskripsi: 'Tunjukkan identitasmu sebagai developer sejati.' }
];

export const dapatkanSemuaProduk = () => {
    return daftarProduk
}

export const dapatkanProdukById = (id) => {
    return daftarProduk.find(p => p.id ===id);
}