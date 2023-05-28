<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink class="home" to="/">Promptly</RouterLink>
    <div class="links">
      <!-- <RouterLink to="/appfinder" v-slot="{ navigate }">
        <button @click="navigate">App Finder</button>
      </RouterLink> -->
      <a href="https://idc8nflfnud.typeform.com/to/HmgFptlu" target="_blank" class="button">App Finder</a>
      <RouterLink to="/database" v-slot="{ navigate }">
        <button @click="navigate">Database</button>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 64px;
  background: #4d2986;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0px 2px 2px gray;
}

button {
  height: 64px;
  width: 120px;
  background: #4d2986;
  color: white;
  border: 0px;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

.button {
  padding: 21px 21px;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

button:hover, .button:hover {
  background: #59309c;
}

.home {
  font-size: 30px;
  color: white;
  padding-left: 30px;
  font-weight: bold;
}

.links {
  padding-right: 15px;
}
</style>
