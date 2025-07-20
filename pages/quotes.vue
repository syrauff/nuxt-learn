<script setup>
import { ref, computed } from 'vue'

// --- 1. State Management ---
// Menyimpan pilihan pengguna ('random', 'anime', atau 'character')
const searchType = ref('random/')
// Menyimpan input teks dari pengguna
const searchQuery = ref('')
// Menyimpan hasil kutipan dari API
const quote = ref(null)
// Menyimpan status loading dan error
const isLoading = ref(false)
const error = ref(null)

// --- 2. URL API Dinamis ---
// URL API dasar
const baseUrl = 'https://api.animechan.io/v1'

// 'computed' property untuk membangun URL secara otomatis berdasarkan state
const apiUrl = computed(() => {
  if (searchType.value === 'anime') {
    // Endpoint yang benar untuk mencari berdasarkan judul anime
    return `${baseUrl}/random/anime?title=${searchQuery.value}`
  }
  if (searchType.value === 'character') {
    // Endpoint yang benar untuk mencari berdasarkan nama karakter
    return `${baseUrl}/random/character?name=${searchQuery.value}`
  }
  // Default: Endpoint untuk kutipan acak
  return `${baseUrl}/random`
})

// --- 3. Fungsi untuk Mengambil Data ---
async function fetchQuote() {
  isLoading.value = true
  error.value = null
  quote.value = null

  // Validasi sederhana sebelum fetch
  if ((searchType.value === 'anime' || searchType.value === 'character') && !searchQuery.value) {
    error.value = { message: 'Nama anime atau karakter harus diisi.' }
    isLoading.value = false
    return
  }

  try {
    // Menggunakan $fetch untuk panggilan API on-demand
    const result = await $fetch(apiUrl.value)
    quote.value = result
  } catch (e) {
    error.value = e.data || { message: 'Terjadi kesalahan atau data tidak ditemukan.' }
  } finally {
    isLoading.value = false
  }
}

// Langsung ambil kutipan acak saat halaman pertama kali dimuat
fetchQuote()
</script>

<template>
  <div class="container">
    <h1>Kutipan Anime</h1>
    <p>Cari kutipan acak, berdasarkan judul anime, atau nama karakter.</p>

    <div class="search-options">
      <label>
        <input type="radio" v-model="searchType" value="random" /> Acak
      </label>
      <label>
        <input type="radio" v-model="searchType" value="anime" /> Berdasarkan Anime
      </label>
      <label>
        <input type="radio" v-model="searchType" value="character" /> Berdasarkan Karakter
      </label>
    </div>

    <input
      v-if="searchType !== 'random'"
      v-model="searchQuery"
      type="text"
      :placeholder="`Masukkan nama ${searchType}...`"
      @keyup.enter="fetchQuote"
      class="search-input"
    />

    <button @click="fetchQuote" :disabled="isLoading">
      {{ isLoading ? 'Mencari...' : 'Dapatkan Kutipan' }}
    </button>

    <div class="result-container">
      <p v-if="isLoading">Memuat...</p>
      <div v-else-if="error" class="quote-box error">
        <p><strong>Error:</strong> {{ error.error || error.message }}</p>
      </div>
      <div v-else-if="quote" class="quote-box">
        <blockquote>"{{ quote.quote }}"</blockquote>
        <cite>— {{ quote.character }} ({{ quote.anime }})</cite>
      </div>
      <p v-else>Klik tombol untuk menampilkan kutipan.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
.search-options {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.result-container {
  margin-top: 2rem;
  min-height: 150px;
}
.quote-box {
  padding: 2rem;
  margin: 1rem 0;
  border-left: 5px solid #00DC82;
  background-color: #f8f9fa;
  border-radius: 5px;
  text-align: left;
}
.quote-box.error {
  border-left-color: #dc3545;
  color: #dc3545;
}
blockquote {
  font-size: 1.5em;
  margin: 0;
}
cite {
  display: block;
  margin-top: 1rem;
  font-style: italic;
  color: #6c757d;
}
button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #00DC82;
  color: white;
}
button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>