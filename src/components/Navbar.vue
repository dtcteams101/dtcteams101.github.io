<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink class="home" to="/">Website Title</RouterLink>
    <div>
      <RouterLink class="page" to="/appfinder">App Finder</RouterLink>
      <RouterLink class="page" to="/database">Database</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav {
  height: 64px;
  background: #4d2986;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: 'Rubik', sans-serif;
  /* box-shadow: 0px 2px 2px gray; */
}

.home {
  font-size: 30px;
  color: white;
  padding-left: 30px;
  font-weight: bold;
}

.page {
  font-size: 18px;
  color: white;
  padding-right: 30px;
}
</style>
