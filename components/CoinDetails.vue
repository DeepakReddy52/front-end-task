<template>
  <div class="motion-carousel">
    <div class="fade-overlay left"></div>
    <div class="fade-overlay right"></div>

    <div class="carousel-window">
      <div class="carousel-track" ref="track">
        <div
          v-for="(coin, index) in visibleCoins"
          :key="index"
          class="coin-slide"
        >
          <div class="coin-info">
            <div class="coin-top">
              <div class="img-container">
                <img :src="coin.img" :alt="coin.name" />
              </div>
              <h3>{{ coin.name }}</h3>
            </div>
            <div class="coin-bottom">
              <p>{{ coin.price }}</p>
              <p class="coin-share">{{ coin.share }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const baseCoins = [
  { name: 'Bitcoin Cash', img: '/images/icon-bitcoin.svg', price: '$450', share: '-2.1%' },
  { name: 'Litecoin', img: '/images/icon-litecoin.svg', price: '$200', share: '-1.4%' },
  { name: 'Solana', img: '/images/icon-solana.svg', price: '$150', share: '+3.0%' },
  { name: 'Dogecoin', img: '/images/icon-dogecoin.svg', price: '$0.07', share: '-0.9%' },
  { name: 'Bitcoin', img: '/images/icon-bitcoin-circle.svg', price: '$61,200', share: '+1.2%' },
  { name: 'Ethereum', img: '/images/icon-ethereum.svg', price: '$3,200', share: '+0.8%' }
]

const visibleCoins = ref([...baseCoins.slice(0, 4)])
const track = ref(null)
let currentIndex = 0

onMounted(() => {
  setInterval(() => {
    const nextIndex = (currentIndex + 4) % baseCoins.length
    const nextCoin = baseCoins[nextIndex]
    const trackEl = track.value

    // Append next card for smooth entry
    visibleCoins.value.push(nextCoin)

    // Animate left
    trackEl.style.transition = 'transform 0.5s ease-in-out'
    trackEl.style.transform = 'translateX(-276px)'

    // After animation, remove first and reset position
    setTimeout(() => {
      visibleCoins.value.shift() // remove the first card
      trackEl.style.transition = 'none'
      trackEl.style.transform = 'translateX(0)'
      currentIndex = (currentIndex + 1) % baseCoins.length
    }, 500)
  }, 2000)
})
</script>

<style scoped>

.motion-carousel {
  position: relative;
  overflow: hidden;
  padding: 0 16px 112px 16px;
  margin-bottom: 60px;
  margin-left: 20px;
}

@media (min-width: 1440px) {
  .motion-carousel {
    padding: 0 120px;
    margin-top: -140px;
  }
}
@media (min-width: 2560px) {
  .motion-carousel {
    padding: 0 680px;
  }
}

.carousel-window {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 24px;
  will-change: transform;
  transition: transform 0.5s ease-in-out;
}


.coin-slide {
  flex: 0 0 252px;
}

.coin-info {
  width: 228px;
  height: 94px;
  padding: 24px 20px;
  background: rgba(30, 30, 30, 0.8);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.coin-top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.img-container {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container img {
  width: auto;
  height: 23px;
}

.coin-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 8px;
}

.coin-share {
  color: red;
}

/* ✨ Gradient overlays for edge fade */
.fade-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 64px;
  pointer-events: none;
  z-index: 2;
}



/* .fade-overlay.left {
  left: 0;
  background: linear-gradient(to right, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0));
}
.fade-overlay.right {
  right: 0;
  background: linear-gradient(to left, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0));
} */
</style>
