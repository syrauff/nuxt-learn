<script setup>
definePageMeta({
  middleware: 'auth' // Nama layout sesuai nama file (tanpa .vue)
})
// const { data, pending, error } = await useFetch('/api/produk');
</script>

<template>
  <h1>Ini Halaman Tentang</h1>
  <p>Halaman ini muncul karena ini adalah `tentang.vue`.</p>
  <TombolValidasi>
    Klik Saya
  </TombolValidasi>

  <div v-if="pendig">
    Memuat data ...
  </div>

  <div v-else-if="error">
    Terjadi kesalahan: {{ error.message }}
  </div>

  <div v-else>
    <p>{{ data.id }}</p>
    <p>Waktu: {{ data.nama }}</p>
    <p>Waktu: {{ data.harga }}</p>
  </div>
</template>