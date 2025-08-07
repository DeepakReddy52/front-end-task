<template>
  <header :class="['header', { 'is-sticky': isSticky }]">
    <div class="nav-wrapper">
      <!-- Logo -->
      <div class="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <!-- Navigation + Auth Buttons (visible on desktop) -->
      <nav class="nav-desktop">
        <div class="menu-links">
          <a href="#">Buy & Sell</a>
          <a href="#development" >Development</a>
          <a href="#">Work</a>
          <a href="#">Portfolio</a>
          <a href="#">Upgrade</a>
          <a href="#">Docs</a>
        </div>

        <div class="auth-buttons">
          <button class="sign-in">Sign In</button>
          <button class="sign-up">Sign Up</button>
        </div>
      </nav>

      <!-- Hamburger Icon (mobile only) -->
      <button class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Mobile Slide Menu -->
      <nav :class="['nav-actions', { open: isMenuOpen }]">
        <div class="mobile-logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div class="menu-links">
          <a href="#">Buy & Sell</a>
          <a href="#">Development</a>
          <a href="#">Work</a>
          <a href="#">Portfolio</a>
          <a href="#">Upgrade</a>
          <a href="#">Docs</a>
        </div>

        <div class="auth-buttons">
          <button class="sign-in">Sign In</button>
          <button class="sign-up">Sign Up</button>
        </div>
      </nav>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="header-spacer"></div>

  <!-- Page Sections -->
  <section class="background-reverse">
    <Banner />
  <CoinDetails />
    <WorkPannel />
    <section id="development"> <Development /></section>
   
    <Getstarted />
    <Portfolio />
    <Upgrade />
  <Footer />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Banner from '../components/Banner.vue'
import CoinDetails from '../components/CoinDetails.vue'
import WorkPannel from '../components/WorkPannel.vue'
import Development from '../components/Development.vue'
import Getstarted from '../components/Getstarted.vue'
import Portfolio from '../components/Portfolio.vue'
import Upgrade from '../components/Upgrade.vue'
import Footer from '../components/Footer.vue'

const isSticky = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (e: MouseEvent) => {
  const nav = document.querySelector('.nav-actions')
  const burger = document.querySelector('.hamburger')
  if (
    nav &&
    burger &&
    !nav.contains(e.target as Node) &&
    !burger.contains(e.target as Node)
  ) {
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 40 // Changed from 76 to 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.header {
  /* background: transparent; */
  position: relative;
  width: 100%;
  z-index: 40;
  padding: 56px 0 20px;
  display: flex;
  justify-content: center;
  transition:
    padding 0.4s ease,
    background-color 0.3s ease,
    transform 0.8s ease,
    opacity 0.4s ease;
}

.header.is-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background: black;
  opacity: 1;
  transform: translateY(0);
}

/* Spacer to prevent overlap */
.header-spacer {
  height: 20px;
}

.nav-wrapper {
  max-width: 1520px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo img {
  height: 45px;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.menu-links {
  display: flex;
  gap: 2rem;
}

.menu-links a {
  color:#D8DBDB;
  font-family:sans-serif;
  font-weight: 700;
  transition: color 0.3s;
}

.menu-links a:hover {
  color: rgb(153, 227, 158);
}

.auth-buttons {
  display: flex;
  gap: 1.25rem;
}

.sign-in {
  color: rgb(153, 227, 158);
  background: transparent;
  border: 1px solid rgb(153, 227, 158);
  padding: 0.65rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: 0.3s;
}

.sign-in:hover {
  background: rgb(153, 227, 158);
  color: black;
}

.sign-up {
  color: black;
  background: rgb(153, 227, 158);
  border: none;
  padding: 0.65rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: 0.3s;
}

.sign-up:hover {
  background: transparent;
  color: rgb(153, 227, 158);
  border: 1px solid rgb(153, 227, 158);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: white;
}

/* Mobile Styles */
@media (max-width: 1023px) {
  .hamburger {
    display: flex;
  }

  .nav-desktop {
    display: none;
  }

  .nav-actions {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: #0f2027;
    flex-direction: column;
    padding: 2rem 1.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .nav-actions.open {
    transform: translateX(0);
  }

  .mobile-logo {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .mobile-logo img {
    height: 45px;
  }

  .menu-links {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .auth-buttons {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  .sign-in,
  .sign-up {
    width: 100%;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .mobile-logo {
    display: none;
  }

  .nav-actions {
    display: none;
  }
}

.background-reverse{
   background: linear-gradient(60deg, #1a2c33 5%, #050d1f 90%);
}
</style>