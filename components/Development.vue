<template>
  <section id="development" class="devlop-cointainer ">
    <div class="spaces-indicator">
      <div class="text-area">
        <!-- Text Block -->
        <div class="textspace fade-down-on-scroll">
          <p class="bottom-margin">Development <span class="add-color">timeline</span></p>
          <h2 class="detailed-line">
            We can enter at any point or help you all the way through the development cycle.
          </h2>
        </div>

        <!-- Timeline Grid Layout -->
        <div class="img-container scale-up-on-scroll">
          <!-- Timeline Image -->
          <img class="timeline-center" src="/images/img-timeline.png" alt="timeline" />

          <!-- Positioned Elements -->
          <div class="extra-box reverse-box pos-planning">
            <div class="extra-content">
              <div class="extra-img blur-bg">
                <img src="/images/extra-img-1.svg" alt="extra-1" />
              </div>
              <div class="extra-text" id="right">
                <h5>Planning</h5>
                <p>Map the project's scope and architecture</p>
              </div>
            </div>
          </div>

          <div class="extra-box pos-refinement">
            <div class="extra-content">
              <div class="extra-img blur-bg">
                <img src="/images/extra-img-2.svg" alt="extra-2" />
              </div>
              <div class="extra-text">
                <h5>Refinement</h5>
                <p>Refine and improve your solution</p>
              </div>
            </div>
          </div>

          <div class="extra-box reverse-box pos-prototype">
            <div class="extra-content">
              <div class="extra-img blur-bg">
                <img src="/images/extra-img-3.svg" alt="extra-3" />
              </div>
              <div class="extra-text" id="right">
                <h5>Prototype</h5>
                <p>Build a working prototype to test your product</p>
              </div>
            </div>
          </div>

          <div class="extra-box pos-support">
            <div class="extra-content">
              <div class="extra-img blur-bg">
                <img src="/images/extra-img-4.svg" alt="extra-4" />
              </div>
              <div class="extra-text">
                <h5>Support</h5>
                <p>Deploy the product and ensure full support by us</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const animateOnScroll = (className) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            entry.target.classList.remove("visible")
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll(`.${className}`).forEach((el) => {
      observer.observe(el)
    })
  }

  animateOnScroll("fade-down-on-scroll")
  animateOnScroll("scale-up-on-scroll")
})
</script>

<style scoped>
/* === Animations === */
@keyframes fadeDown {
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-down-on-scroll {
  opacity: 0;
  transform: translateY(-40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-down-on-scroll.visible {
  animation: fadeDown 0.6s ease forwards;
}

.scale-up-on-scroll {
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.scale-up-on-scroll.visible {
  animation: scaleUp 0.6s ease forwards;
}

/* === Existing Styles (unchanged from your code) === */

.devlop-cointainer {
  padding-top: 160px;
}
@media (max-width: 1024px) {
  .devlop-cointainer {
    padding-top: 60px;
  }
}
@media (max-width: 768px) {
  .devlop-cointainer {
    padding-top: 36px;
  }
}
.spaces-indicator {
  margin: 0 auto;
  padding: 0 64px;
}
@media (max-width: 1440px) {
  .spaces-indicator {
    margin: 0 120px;
    height: 1155px;
  }
}
@media (max-width: 1024px) {
  .spaces-indicator {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .spaces-indicator {
    padding: 0 16px;
  }
}
.text-area {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.textspace {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}
.bottom-margin {
  margin-bottom: 36px;
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 400;
}
.add-color {
  color: rgb(153, 227, 158);
}
.detailed-line {
  margin-bottom: 80px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 38px;
}

@media(min-width:1440px){
  .detailed-line{
    height:96px;
    width: 860px;
    margin-right:107px ;
    margin-left:107px ;
    justify-self: center;
  }
}



@media(min-width:769px) and(max-width:1239px){
  .detailed-line{
    height:144px;
    width: 716px;
    margin-right:89px ;
    margin-left:89px ;
    height: fit-content;
    width:auto ;
  }
}

@media(min-width:375px) and (max-width:768px){
  .detailed-line{
    /* height:144px;
    width: 736px; */
    height: auto;
    width:auto;
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media (max-width: 1024px) {
  .detailed-line {
    margin: 0 89px 80px;
  }
}
@media (min-width: 1025px) {
  .detailed-line {
    margin: 0 107px 80px;
  }
}

@media(max-width:320px){
  .detailed-line{
    margin-left: 0px;
    margin-right: 0px;
  }
}


.img-container {
  width: 100%;
  position: relative;
}
.timeline-center {
  max-width: 100%;
  height:850px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
}
.extra-box {
  max-width: 400px;
  position: absolute;
}
.extra-content {
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
}
.extra-img img {
  width: 32px;
  height: 32px;
}
.extra-text h5 {
  font-size: 18px;
  margin-bottom: 8px;
}

#right{
  justify-items: right;
}

@media (max-width:768px) {#right{
  justify-items: left;
}
}
.extra-text p {
  font-size: 14px;
  color: #bbb;
}
.blur-bg {
  background: rgba(255, 255, 225, 0.2);
  border-radius: 50%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reverse-box .extra-content {
  flex-direction: row-reverse;
}

/* Mobile Styles - Linear Layout */
@media (max-width: 767px) {
  .timeline-center {
    display: none;
  }
  .extra-box {
    position: static;
    margin-bottom: 32px;
  }
  .extra-content,
  .reverse-box .extra-content {
    flex-direction: row;
  }
}

/* Custom Positioning */
/* 4K: >= 2560px */
@media (min-width: 2560px) {
  .pos-planning {
    top: 150px;
    left: 600px;
  }
  .pos-prototype {
    bottom: 150px;
    left: 600px;
  }
  .pos-refinement {
    bottom: 150px;
    right: 600px;
  }
  .pos-support {
    top: 150px;
    right: 500px;
  }
}
/* QHD: 1440–2559px */
@media (max-width: 2559px) and (min-width: 1440px) {
  .pos-planning {
    top: 150px;
    right: 950px;
  }
  .pos-prototype {
    bottom: 200px;
    right: 950px;
  }
  .pos-refinement {
    top: 150px;
    left: 990px;
  }
  .pos-support {
    bottom: 200px;
    left: 990px;
  }
}
/* Desktop: 1024–1439px */
@media (max-width: 1439px) and (min-width: 1024px) {
  .pos-planning {
    top: 100px;
    right: 650px;
  }
  .pos-prototype {
    bottom: 100px;
    right: 650px;
  }
  .pos-refinement {
    top: 100px;
    left: 700px;
  }
  .pos-support {
    bottom: 100px;
    left: 700px;
  }
}
/* Tablet: 768–1023px */
@media (max-width: 1023px) and (min-width: 767px) {
  .pos-planning {
    top: 60px;
    right: 530px;
  }
  .pos-prototype {
    top: 580px;
    right: 530px;
  }
  .pos-refinement {
    top: 60px;
    left: 560px;
  }
  .pos-support {
    bottom: 60px;
    left: 570px;
  }
}
@media (min-width: 768px) {
  /* Target only extra-1 and extra-3 using their specific container classes */
  .pos-planning .extra-content {
    flex-direction: row-reverse; /* Image on left, text on right */
  }

  .pos-prototype .extra-content {
    flex-direction: row-reverse; /* Image on left, text on right */
  }

  /* Optional: align text right if needed */
  .pos-planning .extra-text,
  .pos-prototype .extra-text {
    text-align: left;
    align-items: flex-start;
  }
}

</style>
