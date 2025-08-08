<template>
  <section class="get-started-section">
    <div class="get-started-wrapper">
      <div class="get-started-container">
        <!-- New Flex Wrapper -->
        <div class="get-started-flex">
          <div class="get-started-text">
            <h2 class="heading-text">
              Powered by the Cryp<span class="highlight">go</span> Platform
            </h2>
            <p class="sub-text">
              Our products empower people to have safer and more <br />
              trustworthy experiences.
            </p>
          </div>

          <!-- Wrapped Button in New Container -->
          <div class="get-started-button-container">
            <div class="get-started-button">
              <button class="start-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section spacing */
.get-started-section {
  padding-top: 176px;
}

@media (max-width: 768px) {
  .get-started-section {
    padding-top: 64px;
  }
}

/* Wrapper margins */
.get-started-wrapper {
  padding: 0 16px;
  margin: 0 auto;
  max-width: 100%;
}

@media (min-width: 1440px) {
  .get-started-wrapper {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media (min-width: 2560px) {
  .get-started-wrapper {
    margin-left: 680px;
    margin-right: 680px;
  }
}

/* Main container box */
.get-started-container {
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 40px 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  max-width: 100%;
  height:fit-content;
}

/* Flex wrapper: row ≥1024px, column <1024px */
.get-started-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

@media (max-width: 1023px) {
  .get-started-flex {
    flex-direction: column;
    text-align: center;
  }
}

/* Heading styles */
.heading-text {
  margin-top: 0%;
  font-size: 40px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 24px;
   font-family: 'DM Sans', sans-serif;
}

.highlight {
  color: rgb(153, 227, 158);
}

/* Paragraph */
.sub-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 1.6;
}

/* Text block */
.get-started-text {
  flex: 1;
  min-width: 280px;
  text-align: left;
}

.get-started-button-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  min-width: 280px;
}

.get-started-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.start-btn {
  background-color: rgb(153, 227, 158);
  color: #000;
  /* padding: 12px 24px; */
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 20px;
  width:150px;
  height:60px;
  cursor: pointer;
}

.start-btn:hover {
  color: rgb(153, 227, 158);
  border: 1px solid rgb(153, 227, 158);
  background-color: transparent;
}

/* Tablet and below */
@media (max-width: 768px) {
  .get-started-container {
    padding: 48px 24px;
  }

  .get-started-text {
    text-align: center;
  }

  .get-started-button-container,
  .get-started-button {
    justify-content: center;
  }

  .heading-text {
    font-size: 22px;
  }

  .sub-text {
    font-size: 15px;
  }
}

/* Small devices (mobile) */
@media (max-width: 375px) {
  .heading-text {
    font-size: 20px;
  }

  .sub-text {
    font-size: 14px;
  }

  .start-btn {
    width: 100%;
    padding: 12px 0;
  }

  .get-started-button-container,
  .get-started-button {
    width: 100%;
    justify-content: center;
  }
}

/* Extra small (320px specific adjustment) */
@media (max-width: 320px) {
  .get-started-container {
    padding: 40px 1px;
  }

  .start-btn {
    font-size: 15px;
    width:auto
  }

  .sub-text {
    font-size: 20px;
  }
}
</style>
