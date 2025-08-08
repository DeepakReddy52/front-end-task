<template>
  <div
    v-show="showButton"
    class="scroll-button-wrapper"
    @click="scrollToTop"
    aria-label="scroll to top"
  >
    <div class="back-to-top">
      <span class="arrow-up"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.scroll-button-wrapper {
  position: fixed;
  bottom: 32px; /* 8 * 4px = 32px */
  right: 32px;
  z-index: 999;
  cursor: pointer;
}

.back-to-top {
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  background-color: #102C46;
  color: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
}

.back-to-top:hover {
  background-color: #0d2237; /* darker variant */
}

.arrow-up {
  margin-top: 6px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-left: 2px solid white;
  border-top: 2px solid white;
}
</style>
