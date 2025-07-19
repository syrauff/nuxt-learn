<template>
    <button class="tombol-validasi">
        <slot />
    </button>
</template>

<style scoped>
.tombol-validasi {
  background-color: #41B883; /* Warna hijau Vue */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.tombol-keren:hover {
  background-color: #34495E; /* Warna abu-abu Vue */
}
</style>