<script setup>
import { ref, computed } from "vue";

// --- 1. State Management ---
// Menyimpan pilihan pengguna ('random', 'anime', atau 'character')
const searchType = ref("");
// Menyimpan input teks dari pengguna
const searchQuery = ref("");
// // Menyimpan hasil kutipan dari API
// const quote = ref(null)
// // Menyimpan status loading dan error
// const isLoading = ref(false)
// const error = ref(null)

// --- 2. URL API Dinamis ---
// URL API dasar
const baseUrl = "https://api.animechan.io/v1";

// 'computed' property untuk membangun URL secara otomatis berdasarkan state
// --- Fungsi untuk membangun URL (bukan computed) ---
function buildApiUrl() {
  const baseUrl = "https://api.animechan.io/v1";
  if (searchType.value === "anime" && searchQuery.value) {
    return `${baseUrl}/quotes/random?anime=${searchQuery.value}`;
  }
  if (searchType.value === "character" && searchQuery.value) {
    return `${baseUrl}/quotes/random?character=${searchQuery.value}`;
  }
  return `${baseUrl}/quotes/random`;
}

// --- Menggunakan useAsyncData untuk data fetching ---
// 'quote-fetch' adalah kunci unik untuk data ini
const {
  data: quote,
  pending: isLoading,
  error,
  refresh,
} = useAsyncData("quote-fetch", () => $fetch(buildApiUrl()), {
  // Jangan langsung dijalankan saat pertama kali, kita panggil manual
  immediate: false,
});

// Fungsi yang dipanggil oleh tombol, sekarang hanya memanggil 'refresh'
async function getQuote() {
  await refresh();
}

// Panggil sekali saat komponen pertama kali siap di sisi klien
onMounted(() => {
  getQuote();
});

// Ketika tipe pencarian diubah, reset input query
watch(searchType, () => {
  searchQuery.value = "";
});
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
        <input type="radio" v-model="searchType" value="anime" /> Berdasarkan
        Anime
      </label>
      <label>
        <input type="radio" v-model="searchType" value="character" />
        Berdasarkan Karakter
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

    <button @click="getQuote" :disabled="isLoading">
      {{ isLoading ? "Mencari..." : "Dapatkan Kutipan" }}
    </button>

    <div class="result-container">
      <p v-if="isLoading">Memuat...</p>
      <div v-else-if="error" class="quote-box error">
        <p><strong>Error:</strong> {{ error.error || error.message }}</p>
      </div>
      <div v-else-if="quote" class="quote-box">
        <blockquote>"{{ quote.data.content }}"</blockquote>
        <cite
          >— {{ quote.data.character.name }} ({{ quote.data.anime.name }})</cite
        >
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
  border-left: 5px solid #00dc82;
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
  background-color: #00dc82;
  color: white;
}
button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>