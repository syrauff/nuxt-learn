<script setup>
// Impor 'queryContent' secara manual untuk memastikan ia tersedia
// import { queryContent } from '@nuxt/content'

const route = useRoute()
const { data, error } = await useAsyncData(`content-${route.path}`, () => 
  queryContent().where({ _path: route.path }).findOne()
)
</script>

<template>
  <div>
    <h1>Halaman Diagnostik</h1>
    <p>Mencoba mengambil data untuk path: <strong>{{ route.path }}</strong></p>
    <hr>

    <h2>Hasil Data Mentah:</h2>
    <pre>{{ data }}</pre>

    <hr>
    <h2>Error (jika ada):</h2>
    <pre>{{ error }}</pre>
  </div>
</template>

<style>
pre {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  white-space: pre-wrap;
}
</style>