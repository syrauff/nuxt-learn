<script setup>
import { useCartStore } from '~/stores/cartStore';
const route = useRoute();
const idProduk = route.params.id;

const { data: produk, pending, error } = await useFetch(`/api/produk/${idProduk}`)

const cart = useCartStore()

useHead(() => ({

  title: produk.value ? `Jual ${produk.value.nama}` : 'Toko Koding Keren',

  // const deskripsi = `Beli ${produk.value.nama} seharga Rp ${produk.value.deskripsi}`
    meta: [
    {
      name: 'description',
      content: produk.value
        ? `Beli ${produk.value.nama}. ${produk.value.deskripsi}`
        : 'Cari produk terbaik untuk developer di sini.'
    },
    ]

}))

function beliProduk() {
  // Panggil sebuah action dari store
  cart.addItem(produk.value) 
  alert(`${produk.value.nama} ditambahkan ke keranjang!`)
}

const keranjang = useState('keranjang')

function tambahKeKeranjang() {
  keranjang.value ++
}

</script>

<template>
  <div>
    <div v-if="pending">
      Memuat produk...
    </div>
    <div v-else-if="error">
      <h1>Oops!</h1>
      <p>Sepertinya produk ini tidak ada.</p>
      <p><i>{{ error.statusMessage }}</i></p>
      <NuxtLink to="/">Kembali ke beranda</NuxtLink>
    </div>
    <div v-else>
      <h1>Detail Produk: {{ produk.nama }}</h1>
      <p><strong>Harga:</strong> Rp {{ produk.harga.toLocaleString('id-ID') }}</p>
      <p>{{ produk.deskripsi }}</p>

      <button @click="tambahKeKeranjang">
        + Tambah ke keranjang
      </button>

      <button @click="beliProduk">Tambah ke Keranjang</button>
      <hr>
      <NuxtLink to="/">&larr; Kembali</NuxtLink>
    </div>
  </div>
</template>
