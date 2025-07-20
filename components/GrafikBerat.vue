<template>
  <div class="grafik-container">
    <h3>Ini adalah Komponen Grafik yang Berat</h3>
    <p>Proses rendering komponen ini membutuhkan waktu dan sumber daya...</p>
    </div>
</template>

<script setup>
console.log('KOMPONEN GRAFIK BERAT TELAH DI-RENDER');
</script>

<style scoped>
.grafik-container {
  border: 2px dashed crimson;
  padding: 2rem;
  margin-top: 2rem;
  background-color: #fff5f5;
}
</style>