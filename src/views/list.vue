<template>
  <div class="list-page">列表内容</div>
  <br />
  <div>页面参数：{{ para }}</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "listPage",
  setup() {
    const $route = useRoute();
    const $router = useRouter();
    // console.log($route);
    // console.log($router);
    console.log($route.params);
    const para = ref(0);
    // console.log(para);
    para.value = $route.params.id;
    return {
      para,
    };
    // const curRout = '/' + window.location.href.split('/').pop();
    // return {
    //   activeIndex: curRout === '/' ? '/home' : curRout,
    // }
  },
});
</script>

<style lang="scss" scoped>
.list-page {
  font-size: 20px;
  li {
    display: inline-block;
    font-size: 20px;
    margin: 0 20px;
  }
}
</style>
