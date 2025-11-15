<template>
  <div id="app">
    <HelloWorld msg="Halo dari App.vue!" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
