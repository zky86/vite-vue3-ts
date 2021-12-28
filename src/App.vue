<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <header-menu />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<script>
import headerMenu from "./layout/headerMenu.vue";
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    // HelloWorld: HelloWorld,
    headerMenu: headerMenu,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
