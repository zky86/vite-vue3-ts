<template>
  <div class="home-page">子组件2：{{ name }} 父组件长度： {{ todoLength }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ['user', 'todoLength'],
  setup() {
    return {}
  },
  data() {
    return {
      name: '子组件2'
    }
  },
  created() {
    console.log(`Injected property: ${this.user}`) // > 注入的 property: John Doe
    console.log(`Injected property: ${this.todoLength}`) // > 注入的 property: John Doe
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  font-size: 20px;
  li {
    display: inline-block;
    font-size: 20px;
    margin: 0 20px;
    // color: $primary;
  }
}
</style>
