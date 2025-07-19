<script setup>
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()

async function hapusProduk(id) {
  try {
    // Tambahkan 'await' untuk menunggu proses removeItem selesai
    await cart.removeItem(id)
    
    // Alert ini hanya akan berjalan jika removeItem TIDAK error
    alert('Produk berhasil dihapus dari server!')

  } catch (error) {
    // Tangani error jika perlu (meskipun store sudah menanganinya)
    console.log('Komponen mendeteksi error dari store, tidak menampilkan pesan sukses')
  }
}
</script>

<template>
  <div>
    <h1>Keranjang Belanja</h1>

    <div v-if="cart.items.length === 0">
      <p>Keranjang Anda masih kosong.</p>
    </div>

    <div v-else>
      <p>Total Items: {{ cart.itemCount }}</p>
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.nama }} - Rp {{ item.harga.toLocaleString('id-ID') }}
          <button @click="hapusProduk(item.id)" style="margin-left: 10px; color: red;">
            X
          </button>
        </li>
      </ul>
      <hr>
      <p>
        <strong>Total Harga: Rp {{ cart.totalPrice.toLocaleString('id-ID') }}</strong>
      </p>
    </div>
  </div>
</template>