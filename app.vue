<template>
  <div class="app-wrapper">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, #050d1f 0%, #1a2c33 100%);
  font-family: 'Inter', sans-serif;
  color: #fff;
}

.app-wrapper {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
