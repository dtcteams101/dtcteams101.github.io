<script setup>
defineProps({
  text: String,
  onClick: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <button @click="onClick" class="button">{{ text }}</button>
</template>

<style scoped>
.button {
  height: 60px;
  width: 200px;
  border-radius: 30px;
  font-size: 30px;
  font-family: 'Rubik', sans-serif;
  border-style: hidden;
  background-color: #FF7628;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #ff6e1a;
}
</style>
