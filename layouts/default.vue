<script setup>
import { useCartStore } from "~/stores/cartStore";

// const keranjang = useState('keranjang', () => 0)

const cart = useCartStore();
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <nav>
        <NuxtLink to="/">Beranda</NuxtLink>
        <NuxtLink to="/produk">Produk</NuxtLink>
        <NuxtLink to="/tentang">Tentang</NuxtLink>
        <NuxtLink to="/profile">Profile</NuxtLink>

        <!-- <span class="keranjang-info"> 🛒 Keranjang: {{ keranjang }} item </span> -->
        <NuxtLink to="/keranjang" >
          🛒 Keranjang: {{ cart.itemCount }} item (Total: Rp
          {{ cart.totalPrice.toLocaleString("id-ID") }})
        </NuxtLink>
      </nav>
    </header>

    <main class="app-content">
      <slot />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 Toko Koding Keren. Dibuat dengan Nuxt 3.</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
}
.app-header {
  background-color: #34495e;
  color: white;
  padding: 1rem;
}
.app-header nav a {
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
}
.app-header nav a.router-link-exact-active {
  color: #41b883; /* Warna hijau untuk link aktif */
}
.app-content {
  flex: 1;
  padding: 1.5rem;
}
.app-footer {
  background-color: #f7f7f7;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.keranjang-info {
  margin-left: auto; /* Mendorong info keranjang ke kanan */
  font-weight: bold;
}
</style>