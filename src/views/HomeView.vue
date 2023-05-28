<script setup>
import Button from '../components/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1>Find the perfect prompting app for your needs</h1>
    <div id="startbutton">
      <!-- <RouterLink to="/appfinder" v-slot="{ navigate }">
        <Button text="Let's go!" :onClick="navigate" />
      </RouterLink> -->
      <a href="https://idc8nflfnud.typeform.com/to/HmgFptlu" target="_blank" class="button">Let's go!</a>
    </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 48px;
  font-family: 'Rubik', sans-serif;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14%;
}

.button {
  padding: 10px 40px;
  border-radius: 30px;
  font-size: 30px;
  font-family: 'Rubik', sans-serif;
  border-style: hidden;
  background-color: #4d2986;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #432475;
}

#startbutton {
  display: flex;
  width: 200px;
  height: 60px;
  margin: auto;
  padding-top: 30px;
  justify-content: center;
}
</style>