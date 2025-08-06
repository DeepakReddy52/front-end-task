<template>
  <section class="banner-wrapper">
  <div class="banner-container">
    <section class="main-banner">
      <aside class="banner-text-block slide-in-left">
        <div class="icon-and-go">
          <img src="/images/icon-bag.svg" alt="Bag Icon" />
          <p class="crypto-line">Crypto On The <span class="go-green">Go</span></p>
        </div>

        <div class="banner-heading">
          <span class="white-text">Buy and Sell</span>
          <span class="highlight-green"> Crypto</span>
          <span class="white-text"> of</span>
        </div>

        <div class="banner-heading">
          <span class="white-text"> your</span>
          <span class="highlight-green"> choice</span>
        </div>

        <div class="banner-buttons">
          <button class="styled-button btn-default">Buy Crypto</button>
          <button class="styled-button btn-reverse">Sell Crypto</button>
        </div>

        <div class="store-images">
          <img src="/images/playstore.png" alt="Play Store" />
          <img src="/images/applestore.png" alt="Apple Store" />
        </div>
      </aside>

      <aside class="banner-img-wrapper slide-in-right">
        <img src="/images/banner-image.png" alt="crypto banner" class="banner-img" />
      </aside>
    </section>
  </div>
</section>

</template>

<style scoped>
.banner-wrapper {
  width: 100%;
}

.banner-container {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0;
  padding-bottom: 0;
}

/* 1440px screen margin */
@media (min-width: 1440px) {
  .banner-container {
    margin-left: 120px;
    margin-right: 120px;
  }
}

/* 4K screen margin and banner-text dimensions */
@media (min-width: 2560px) {
  .banner-container {
    margin-left: 680px;
    margin-right: 680px;
  }

  .banner-text-block {
    width: 486px;
    height: 592px;
  }
}

.main-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 0;
}

/* Centered text block */
.banner-text-block {
  /* flex: 1; */
  max-width: 600px;
  padding-bottom: 380px;
  color: white;
  /* display: flex; */
  flex-direction: column;
  align-items:center;  /* Align content to left */
  text-align:start;         /* Left-align text */
}


.banner-img-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-img {
  max-width: 100%;
  height: auto;
}

.crypto-line{
  font-size: 28px;
}

/* Hide image below 1024px */
@media (max-width: 1023px) {
  .banner-img-wrapper {
    display: none;
  }
  .main-banner {
    justify-content: center;
  }
}

/* Text */
.icon-and-go {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: white;
}

.go-green {
  color: rgb(153, 227, 158);
}

.banner-heading {
  font-size: 76px;
  font-weight: bold;
  margin: 0.5rem 0;
}

.white-text {
  color: white;
}

.highlight-green {
  color: rgb(153, 227, 158);
}

/* Buttons */
.banner-buttons {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

.styled-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid rgb(153, 227, 158);
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: transparent;
}

/* Buy Button - like Sign Up */
.btn-default {
  background-color: rgb(153, 227, 158);
  color: black;
}

.btn-default:hover {
  background-color: transparent;
  color: rgb(153, 227, 158);
}

/* Sell Button - like Sign In */
.btn-reverse {
  color: rgb(153, 227, 158);
}

.btn-reverse:hover {
  background-color: rgb(153, 227, 158);
  color: black;
}

/* Store Icons */
.store-images {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

.store-images img {
  padding-top: 40px;
  width: 240px;
  height: 70px;
  object-fit: contain;
}

/* Animation keyframes */
@keyframes slideLeftToRight {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRightToLeft {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Desktop animation */
.slide-in-left {
  animation: slideLeftToRight 0.5s ease-out both;
}

.slide-in-right {
  animation: slideRightToLeft 0.5s ease-out both;
}

/* Responsive override for <1024px */
@media (max-width: 1023px) {
  .slide-in-right {
    animation: none !important;
  }
}


</style>
