<template>
  <div class="home-page">父组件：{{ name }} todos长度:{{ todos.length }}</div>
  <p>todo-list-footer: <todo-list-footer /></p>
  <el-button icon="el-icon-eleme" type="primary" size="mini" @click="change"
    >通信数据更改</el-button
  >
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import todoListFooter from './todoListFooter.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    todoListFooter
  },
  provide() {
    return {
      user: 'John Doe',
      todoLength: computed(() => this.todos.length)
    }
  },
  setup() {
    // const change = () => {
    //   this.todos = ['Feed a cat', 'Buy tickets', 'test']
    // }
    // return {
    //   change
    // }
  },
  data() {
    return {
      name: '父组件1',
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  methods: {
    change() {
      this.todos = ['Feed a cat', 'Buy tickets', 'test']
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
