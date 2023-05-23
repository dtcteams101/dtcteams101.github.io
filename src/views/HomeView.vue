<script setup>
import Button from '../components/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1>Find the perfect prompting app for your needs</h1>
    <div id="startbutton">
      <RouterLink to="/appfinder" v-slot="{ navigate }">
        <Button text="Let's go!" :onClick="navigate" />
      </RouterLink>
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

#startbutton {
  width: 200px;
  height: 60px;
  margin: auto;
  padding-top: 30px;
}
</style>