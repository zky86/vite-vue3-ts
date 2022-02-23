<template>
  <div class="header">
    <ul>
      <!-- <li>首页</li>
      <li>列表</li>
      <li>其他</li> -->
      <li>
        <router-link :to="{ name: 'home', params: { id: 1 } }"
          >首页</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'list', params: { id: 2 } }"
          >列表</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'detail', params: { id: 3 } }"
          >其他</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  setup() {
    // const curRout = '/' + window.location.href.split('/').pop();
    // return {
    //   activeIndex: curRout === '/' ? '/home' : curRout,
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 20px;
  margin-bottom: 30px;
  li {
    display: inline-block;
    font-size: 20px;
    margin: 0 20px 0 0px;
  }
}
</style>
