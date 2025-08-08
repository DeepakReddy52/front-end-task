<template>
  <section class="perk-section">
    <div class="perk-container">
      <div class="perk-text-center">
        <p class="perk-subtitle">
          Always By <span class="highlight">your side</span>
        </p>
        <h2 class="perk-heading">
          Be the first to use our Cryo<span class="highlight">go</span>!
        </h2>

        <div class="perk-grid">
          <div class="perk-card">
            <div class="perk-icon-wrapper">
              <img src="/images/services.png" alt="24/7 Support" width="44" height="44" />
            </div>
            <h4 class="perk-title">24/7 Support</h4>
            <div class="perk-description">
              Need help? Get your requests solved quickly via support team.
            </div>
          </div>

          <div class="perk-card">
            <div class="perk-icon-wrapper">
              <img src="/images/icon-community.svg" alt="Community" width="44" height="44" />
            </div>
            <h4 class="perk-title">Community</h4>
            <div class="perk-description">
              Join the conversations on our worldwide OKEx communities
            </div>
          </div>

          <div class="perk-card">
            <div class="perk-icon-wrapper">
              <img src="/images/icon-academy.svg" alt="Academy" width="44" height="44" />
            </div>
            <h4 class="perk-title">Academy</h4>
            <div class="perk-description">
              Learn blockchain and<br />
              crypto for free.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="perk-blur-bg"></div>
  </section>
</template>


<style scoped>
.perk-container {
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 0px;
  margin-right: 0px;
}

/* For 1440px and up: 120px side margins */

@media (min-width: 1440px) and (max-width: 2560px) {
  .perk-section {
    margin-left: 120px;
    margin-right: 120px;
  }
}

/* For 2560px and up (4K): 680px side margins */
@media (min-width: 2560px) {
  .perk-container {
    margin-left: 680px;
    margin-right: 680px;
  }
}
.perk-section {
  position: relative;
  padding-bottom: 7rem;
}

.perk-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.perk-text-center {
  text-align: center;
}

.perk-subtitle {
  color: #d8dbdb; /* text-muted */
  font-size: 18px;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  position: relative;
}

.perk-subtitle::after {
  content: '';
  width: 2rem;
  height: 2px;
  background-color: rgb(153, 227, 158);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.highlight {
  color: rgb(153, 227, 158);
  font-family: 'DM Sans', sans-serif;
}

.perk-heading {
  color: white;
  font-size: 30px;
  font-weight: 500;
}

@media (min-width: 640px) {
  .perk-subtitle {
    font-size: 28px;
  }

  .perk-heading {
    font-size: 40px;
  }
}

/* Grid cards */
.perk-grid {
  display: grid;
  gap: 2.5rem;
  padding: 4rem 5rem;
  border: 1px solid #dbd8d899;
  border-radius: 1.5rem;
  background-color:  linear-gradient(90deg, #050d1f 0%, #1a2c33 100%);
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  .perk-grid {
    grid-template-columns: repeat(3, 1fr);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .perk-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.perk-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.perk-icon-wrapper {
  background-color:rgb(153, 227, 158,0.2);
  backdrop-filter: blur(4px);
  padding: 1rem;
  border-radius: 999px;
  width: fit-content;
}

.perk-title {
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 100;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.perk-description {
  color: #999;
  opacity: 0.6;
  font-size: 1rem;
}

/* Background blur circle */
.perk-blur-bg {
  position: absolute;
  z-index: 0;
  background:rgb(153, 227, 158,0.3);
  border-radius: 999px;
  opacity: 0.6;
  width: 24rem;
  height: 24rem;
  bottom: 0;
  left: -12rem;
  filter: blur(400px);
}

@media (min-width: 640px) {
  .perk-blur-bg {
    width: 12.5rem;
    height: 12.5rem;
    bottom: -20rem;
    left: -12rem;
  }
}
</style>
