<template>
  <h1 class="text-4xl font-bold">Awesome in-browser designer</h1>
  <br><br><br>
  <div class="container mx-auto">
    <FabricCanvas />
  </div>
  <br><br>
</template>

<script>
import FabricCanvas from './components/FabricCanvas.vue'

export default {
  name: 'App',
  components: {
    FabricCanvas,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.border {
  border: 2px solid black;
}
</style>
