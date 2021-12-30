<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <header-menu />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import headerMenu from './layout/headerMenu.vue'
// import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld: HelloWorld,
    headerMenu
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
