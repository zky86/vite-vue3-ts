<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <div>{{ book.title }}</div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
  props: ['msg'],
  setup(props) {
    // console.log(props)
    const book = reactive({ title: 'Vue 3 Guide' })
    const count = ref(0)
    // console.log(count)
    // 暴露给 template

    onMounted(() => {
      console.log('onMounted')
    })

    return {
      book,
      count
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  h1 {
    color: #000;
  }
  a {
    color: #42b983;
  }
}
</style>
