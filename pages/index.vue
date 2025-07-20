<script setup>
const { data, pending, error } = await useFetch('/api/greeting');

const { $waktu } = useNuxtApp();
const tanggalServer = new Date();

function kosongkanKeranjang() {
  const keranjang = useState('keranjang');
  keranjang.value = 0
}
</script>

<template>
  <h1>Quotes Anime test</h1>
  <p>Hello world!</p>
    <!-- <img src="/images/zee.png" alt="Azizi Asadel" width="200"> -->
  <div v-if="pending">
    Memuat data ...
  </div>

  <div v-else-if="error">
    Terjadi kesalahan: {{ error.message }}
  </div>

  <div v-else>
    <p>{{ data.pesan }}</p>
    <p>Waktu: {{ data.waktu }}</p>
    
  </div>

  <strong>{{ $waktu.formatSingkat(tanggalServer) }}</strong>
  <br>
  <button @click="kosongkanKeranjang">
    Kosongkan Keranjang
  </button>

</template>