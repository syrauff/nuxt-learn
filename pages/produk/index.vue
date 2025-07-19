<script setup>
const { data: produk, pending, refresh, error } = await useFetch('/api/produk', {
  // Opsi untuk caching
  // initialCache: false, // Gunakan ini jika Anda tidak mau cache sama sekali
  // lazy: true // Data akan diambil setelah halaman ditampilkan (baik untuk UX)
})

function muatUlang() {
  // Fungsi refresh akan memaksa pengambilan data baru dari API
  refresh()
}
</script>
<template>
  <div>
    <h1>Daftar Produk</h1>
    <button @click="muatUlang" :disabled="pending">
      {{ pending ? 'Memuat...' : 'Muat Ulang Data' }}
    </button>
    <div v-if="pending && !produk">
      Loading...
    </div>
    <ul v-else-if="produk">
      <li v-for="p in produk" :key="p.id">
        <NuxtLink :to="`/produk/${p.id}`">
          {{ p.nama }}
        </NuxtLink>
      </li>
    </ul>
    <div v-else-if="error">
      Gagal memuat produk: {{ error.message }}
    </div>
  </div>
</template>