import { ref, onMounted, onUnmounted } from 'vue'

// Nama fungsi juga diawali dengan 'use'
export function useMousePosition() {
  // State reaktif untuk menyimpan koordinat
  const x = ref(0)
  const y = ref(0)

  // Fungsi untuk memperbarui state
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // Daftarkan event listener setelah komponen di-mount di browser
  onMounted(() => window.addEventListener('mousemove', update))

  // Bersihkan event listener saat komponen di-unmount untuk mencegah memory leak
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // Kembalikan state agar bisa digunakan oleh komponen
  return { x, y }
}