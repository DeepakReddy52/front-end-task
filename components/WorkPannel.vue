<template>
  <section class="work-section">
    <div class="main-container">
      <div class="work-container">
        <!-- Left Aside -->
        <aside class="para-one" data-animate="slide-up">
          <p class="work-with-us">Work with <span class="add-colour">us</span></p>
          <h2 class="work-blockchain-project">Successfully launch your blockchain project.</h2>

          <div class="works-grid">
            <div class="w-cont-img-cont">
              <div class="blur-round-bg">
                <img src="/images/icon-consulting.svg" alt="" />
              </div>
              <p class="words">Blockchain Consulting</p>
            </div>

            <div class="w-cont-img-cont">
              <div class="blur-round-bg">
                <img src="/images/icon-blockchain.svg" alt="" />
              </div>
              <p class="words">Blockchain Solutions</p>
            </div>

            <div class="w-cont-img-cont">
              <div class="blur-round-bg">
                <img src="/images/icon-Services.svg" alt="" />
              </div>
              <p class="words">Custom Development</p>
            </div>
          </div>
        </aside>

        <!-- Right Aside -->
        <aside class="image-one" data-animate="slide-down">
          <img src="/images/img-work-with-us.png" alt="" class="work-img" />
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const animateElements = document.querySelectorAll('[data-animate]')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('animate')
        } else {
          el.classList.remove('animate') // re-trigger animation when re-entered
        }
      })
    },
    { threshold: 0.2 }
  )

  animateElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* Section Padding */
.work-section {
  padding-top: 112px;
}

/* Margin + Padding Based on Screen Size */
.main-container {
  padding: 0 16px;
  margin-left: 0;
  margin-right: 0;
}

@media (min-width: 1440px) {
  .main-container {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media (min-width: 2560px) {
  .main-container {
    margin-left: 680px;
    margin-right: 680px;
  }
}

.add-colour {
  color: rgb(153, 227, 158);
}

/* Layout for Aside Blocks */
.work-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

/* By default: full width stacking */
.para-one,
.image-one {
  flex: 1 1 100%;
}

/* From 769px to above 1440px: side by side layout */
@media (min-width: 769px) {
  .para-one,
  .image-one {
    flex: 1;
  }
}

/* Responsive image in .image-one */
.image-one .work-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

/* Typography for p inside para-one */
.para-one > p {
  font-size: 28px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .para-one > p {
    font-size: 18px;
  }
}

/* Typography for h2 */
.work-blockchain-project {
  font-size: 40px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .work-blockchain-project {
    font-size: 30px;
  }
}

/* Works Grid */
.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 32px;
}

/* Icon + Text Block */
.w-cont-img-cont {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Blur Round Background */
.blur-round-bg {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blur-round-bg img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  padding: 20px;
}

/* Word Text */
.words {
  font-size: 24px;
  color: #e5e5e5;
  font-weight: 500;
}

/* BELOW 768px - stack .w-cont-img-cont items */
@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
  }

  .w-cont-img-cont {
    flex-direction: row;
    align-items: center;
  }

  .w-cont-img-cont .words {
    text-align: left;
  }
}

/* Common transition */
[data-animate] {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

/* Slide-up animation for para-one */
.para-one[data-animate] {
  transform: translateY(40px);
}
.para-one.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Slide-down animation for image-one */
.image-one[data-animate] {
  transform: translateY(-40px);
}
.image-one.animate {
  opacity: 1;
  transform: translateY(0);
}
.para-one.animate {
  transition-delay: 0.1s;
}
.image-one.animate {
  transition-delay: 0.3s;
}

</style>

