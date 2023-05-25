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
    Copyright &copy; 2023, Daniel Liu
  </footer>
</template>

<style>
main {
  padding-bottom: 100px;
  /* border: 1px solid black; */
}

footer {
  background-color: #f2f2f2;
  color: #737373;
  height: 100px;
  width: 100%;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  flex-shrink: 0;
}
</style>
