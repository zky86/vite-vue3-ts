<template>
  <div class="detail-page">详情内容</div>
  <div>
    <p>状态管理</p>
    <p>
      状态数据：{{ this.$store.state.user }}
    </p>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  setup() {
    // const curRout = '/' + window.location.href.split('/').pop();
    // return {
    //   activeIndex: curRout === '/' ? '/home' : curRout,
    // }
  },
};
</script>

<style lang="scss" scoped>
.detail-page {
  font-size: 20px;
  li {
    display: inline-block;
    font-size: 20px;
    margin: 0 20px;
  }
}
</style>
