import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // STATE: data utama
  state: () => ({
    items: [], // Menyimpan daftar produk lengkap
    itemCount: 0, // Menyimpan jumlah total item
  }),

  // GETTERS: data turunan
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.harga, 0);
    },
  },

  // ACTIONS: fungsi untuk mengubah state
  actions: {
    addItem(produk) {
      this.items.push(produk);
      this.itemCount++;
    },
    async removeItem(idProduk) {
      const itemAsli = this.items.find(item => item.id === idProduk);
      if (!itemAsli) return;

      const index = this.items.findIndex(item => item.id === idProduk);
      this.items.splice(index, 1);
      this.itemCount--;

      try {
        await $fetch('/api/keranjang/hapus', {
          method: 'POST',
          body: { id: idProduk },
        });

        console.log('Sukses hapus dari server.');
      } catch (error) {
        console.error('Gagal hapus dari item:', error.data.statusMessage);
        this.items.splice(index, 0, itemAsli); 
        this.itemCount++;
        alert('Gagal menghapus produk dari keranjang. Silakan coba lagi.');

        throw error;
      }
    }
  },
})