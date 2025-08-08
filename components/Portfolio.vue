<template>
  <section id="portfolio" class="portfolio-section">
    <div class="portfolio-wrapper">
      <div class="portfolio-inner">
        <div class="portfolio-grid">
          <!-- First Box -->
          <div class="first-box scroll-down">
            <img src="/public/images/img-portfolio.png" alt="portfolio" />
          </div>

          <!-- Second Box -->
          <div class="second-box scroll-up">
            <p class="title">
              Cryptocurrency <span class="highlight">Portfolio</span>
            </p>
            <h2 class="heading">
              Create your crypto portfolio today with Cryp<span class="highlight">GO</span>!
            </h2>
            <p class="text">
              Coinbase has a variety of features that make it the best
              <br class="responsive-br" />
              place to start trading.
            </p>

            <table>
    <tbody>
        <tr class="row-1">
            <td>
                <div class="img-1-container">
                   <img src="/images/icon-wallet.svg" alt=""> 
                </div>
            </td>
            <td class="text-1"><h4>Manage your Portfolio</h4></td>
        </tr>
        <tr>
            <td>
                <div class="img-2-container">
                   <img src="/images/icon-vault.svg" alt=""> 
                </div>
            </td>
            <td class="text-2"><h4>Vault Protection</h4></td>
        </tr>
        <tr>
            <td>
                <div class="img-3-container">
                   <img src="/images/icon-mobileapp.svg" alt=""> 
                </div>
            </td>
            <td class="text-3"><h4>Mobile apps</h4></td>
        </tr>
    </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const scrollElements = document.querySelectorAll('.scroll-down, .scroll-up');
  scrollElements.forEach(el => observer.observe(el));
});
</script>


<style scoped>
/* Section padding */
.portfolio-section {
  padding-top: 48px;
}

/* Default: below 1440px */
.portfolio-wrapper {
  margin-left: 0;
  margin-right: 0;
}

.portfolio-inner {
  padding-left: 16px;
  padding-right: 16px;
}

/* 1440px to 2559px */
@media (min-width: 1440px) and (max-width: 2559px) {
  .portfolio-wrapper {
    margin-left: 120px;
    margin-right: 120px;
  }
}

/* 4K and above */
@media (min-width: 2560px) {
  .portfolio-wrapper {
    margin-left: 680px;
    margin-right: 680px;
  }
}

/* Grid Layout */
.portfolio-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
}

@media (min-width: 769px) {
  .portfolio-grid {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

/* First Box */
.first-box img {
  width: 288px;
  height: 288px;
  object-fit: contain;
}

@media (min-width: 375px) {
  .first-box img {
    width: 343px;
    height: 343px;
  }
}

@media (min-width: 425px) {
  .first-box img {
    width: 393px;
    height: 393px;
  }
}

@media (min-width: 768px) {
  .first-box img {
    width: 720px;
    height: 720px;
  }
}

@media (min-width: 1240px) {
  .first-box img {
    width: 576px;
    height: 576px;
  }
}

@media (min-width: 1440px) {
  .first-box img {
    width: 664px;
    height: 664px;
  }
}

@media (min-width: 2560px) {
  .first-box img {
    width: 664px;
    height: 664px;
  }
}

/* Second Box */
.second-box {
  max-width: 600px;
  width: 100%;
}

/* Typography */
.title {
  font-size: 28px;
  font-weight: 500;
  color: white;
  margin-bottom: 8px;
   font-family: 'DM Sans', sans-serif;
}

.heading {
  font-size: 40px;
  font-weight: 500;
  color: white;
  margin-bottom: 16px;
  font-family: 'DM Sans', sans-serif;
  width:auto;
}

.text {
  font-size: 20px;
  color: #ccc;
  margin-bottom: 24px;
}

.highlight {
  color: rgb(153, 227, 158);
}

/* Responsive <br> */
.responsive-br {
  display: none;
}


@media (max-width: 767px) {
  .responsive-br {
    display: inline;
  }
}

/* TABLE LAYOUT */

table {
  width: 100%;
  border-collapse: collapse;
  padding: 24px;
  background-color: transparent;
}

tr {
  vertical-align: middle;
}

td {
  padding: 14px 12px;
}

/* Gap between image and text */
td:first-child {
  width: 70px;
  text-align: center;
  padding-right: 12px;
}

td h4 {
  color: #d8dbdb;
  font-size: 28px;
  font-weight: 100;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
}

/* Icon containers with blur background */
.img-1-container,
.img-2-container,
.img-3-container {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.img-1-container img,
.img-2-container img,
.img-3-container img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.scroll-down, .scroll-up {
  opacity: 0;
  transform: translateY(150px);
  transition: all 0.8s ease-out;
}

.scroll-up {
  transform: translateY(-50px);
}

/* When visible */
.scroll-down.animate,
.scroll-up.animate {
  opacity: 1;
  transform: translateY(0);
}

</style>
