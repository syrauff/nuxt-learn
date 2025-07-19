<script setup>
definePageMeta({
  middleware: 'auth' // Nama layout sesuai nama file (tanpa .vue)
})
</script>
<template>
  <h1>Ini Halaman Profile</h1>
  <p>Halaman ini muncul karena ini adalah `profile.vue`.</p>
  <TombolValidasi>
    Klik Saya
  </TombolValidasi>



</template>