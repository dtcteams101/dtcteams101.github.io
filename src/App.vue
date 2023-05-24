<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    &copy; ajisbigbrother
  </footer>
</template>

<style>
footer {
  background-color: #f2f2f2;
  color: #737373;
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-family: 'Rubik', sans-serif;
}

main {
  padding-bottom: 120px;
}
</style>
