<template>
  <div class="main">测试:{{ msg }}</div>
</template>

<script>
// import { ref, reactive, onMounted } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main {
  h1 {
    color: #000;
  }
  a {
    color: #42b983;
  }
}
</style>
