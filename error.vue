<script setup>
// Nuxt akan secara otomatis memberikan prop 'error' ke halaman ini
const props = defineProps({
  error: Object
})

const handleError = () => {
  // Membersihkan error dan mengarahkan kembali ke halaman utama
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="container-error">
    <h1>{{ error.statusCode }}</h1>
    <p class="pesan-error">{{ error.statusMessage || 'Terjadi kesalahan' }}</p>
    <button @click="handleError">
      Kembali ke Halaman Utama
    </button>
  </div>
</template>

<style scoped>
.container-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: sans-serif;
}

h1 {
  font-size: 8rem;
  margin: 0;
  color: #dc3545;
}

.pesan-error {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: white;
}
</style>