<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <Navbar />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      &copy; ajisbigbrother
    </footer>
  </div>
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
  text-align: center;
  font-family: 'Rubik', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
