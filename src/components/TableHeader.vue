<template>
  <div class="row">
    <div id="name">Name</div>
    <div id="details">Details</div>
    <div id="link">
      Link to app store
    </div>
    <div id="rating">Rating</div>
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
  font-weight: bold;
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
