<template>
  <div class="home-page">子组件2：{{ name }}</div>
  <p>todo-list-statistics: <todo-list-statistics /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoListStatistics from './TodoListStatistics.vue'

export default defineComponent({
  components: {
    TodoListStatistics
  },
  setup() {
    return {}
  },
  data() {
    return {
      name: '子组件1'
    }
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
