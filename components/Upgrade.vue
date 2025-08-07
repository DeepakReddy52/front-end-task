<template>
    <section class="upgrade top,bottom padding-160px below 768 top,bottom pading 80px">
        <div class="margin 680 sides for 4k, margin 120 sides for 1440 >1440 no margin padding 16px on sides for all">
            <div class="grid-container">
                <div class="box-1">
                    <p class="heading with margin-bottom 12px and add color">Upgrade</p>
                    <h2 class="caption with margin-bottom 12px ">Upgrade Your Storage Layer</h2>
                    <p class="suggestion with margin-bottom 28px">Get faster, safer, more affordable cloud object storage with no centeral point of failure.</p>
                    <div class="inner-grid">
                        <div class=" flex-gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></path></svg>
                            <div>
                                <h4>100% Secure</h4>
                            </div>
                        </div>
                        <div class=" flex-gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></path></svg>
                            <div>
                                <h4>A Fraction of the Cost</h4>
                            </div>
                        </div>
                        <div class=" flex-gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></path></svg>
                            <div>
                                <h4>More Durable</h4>
                            </div>
                        </div>
                        <div class=" flex-gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></path></svg>
                            <div>
                                <h4>Easier to Use</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-2">
                    <div class="image-container">
                        <img src="/images/img-upgrade.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Main Section Padding */
.upgrade {
  padding-top: 160px;
  padding-bottom: 160px;
}

@media (max-width: 768px) {
  .upgrade {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

/* Margin Container (Dynamic Side Margins) */
.margin {
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 1441px) and (max-width: 2560px) {
  .margin {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media (min-width: 2561px) {
  .margin {
    margin-left: 680px;
    margin-right: 680px;
  }
}

/* Grid Layout */
.grid-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

@media (max-width: 1023px) {
  .grid-container {
    flex-direction: column;
    gap: 0px;
  }
}

/* Left Content Box */
.box-1 {
  flex: 1;
  min-width: 320px;
}

/* Right Image Box */
.box-2 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Heading */
.heading {
  font-size: 18px;
  margin-bottom: 12px;
  color: rgb(153, 227, 158);
  font-weight: 600;
}

/* Caption */
.caption {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #ffffff;
}

@media (max-width: 768px) {
  .caption {
    font-size: 24px;
  }
}

/* Subtext */
.suggestion {
  font-size: 16px;
  margin-bottom: 28px;
  color: #ccc;
  line-height: 1.6;
}

/* Inner Grid for Features */
.inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
}

@media (max-width: 768px) {
  .inner-grid {
    grid-template-columns:2, 2fr;
  }
}

@media (max-width: 768px) {
  .inner-grid {
    grid-template-columns: 1fr;
  }
}

/* Icon Row */
.flex-gap-5 {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Icon Placeholder */
.icon {
  width: 32px;
  height: 32px;
  background-color: rgba(153, 227, 158, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(153, 227, 158);
  font-weight: bold;
  font-size: 14px;
}

/* Image */
.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
</style>
