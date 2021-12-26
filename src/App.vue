<template>
  <div id="app">
    <div style="display:flex;justify-content: space-around;">
      <input v-youji-inputcalculator>
      <input v-youji-inputcalculator>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vyic',
  components: {},
}
</script>

<style>
#app {
  width: 500px;
  margin: 30vh auto;
}
</style>
