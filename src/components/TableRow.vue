<script setup>
defineProps({
  name: String,
  details: String,
  link: String,
  rating: String
})
</script>

<template>
  <div class="row">
    <div id="name">{{ name }}</div>
    <div id="details">{{ details }}</div>
    <div id="link">
      <a href="{{ link }}">{{ link }}</a>
    </div>
    <div id="rating">{{ rating }}</div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  border-bottom: 1.5px solid #e6e6e6;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  font-family: 'Rubik', sans-serif;
}

#name {
  padding-right: 10px;
  width: 200px;
}

#details {
  padding-right: 10px;
  width: 550px;
}

#link {
  padding-right: 10px;
  width: 300px;
}

#rating {
  width: 150px;
}
</style>
