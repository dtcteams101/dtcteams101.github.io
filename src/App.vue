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
    Copyright &copy; 2023 Daniel Liu, AJ Liss, Angela Guan, George Moseley
  </footer>
</template>

<style>
main {
  padding-bottom: 100px;
}

footer {
  background-color: #f2f2f2;
  color: #737373;
  height: 100px;
  width: 100%;
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
