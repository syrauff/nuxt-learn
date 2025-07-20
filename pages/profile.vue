<script setup>
import {ref} from 'vue'
const tampilkanGrafik = ref(false)

const {x,y} = useMousePosition()

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

    <div class="posisi">
      Posisi Mouse: X = {{ x }}, Y = {{ y }}
    </div>

  <button @click="tampilkanGrafik = true">
    tampilkan grafik
  </button>

  <LazyGrafikBerat v-if="tampilkanGrafik" />

</template>