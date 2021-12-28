<template>
  <div class="home-page">首页内容</div>
  <br />
  <div>
    <p>{{ name }}</p>
    <p>
      {{ age }}
      <el-button @click="plusOne()" type="primary" class="ml20" size="mini"
        >增加</el-button
      >
    </p>
  </div>
  <br />
  <div>
    <p>状态管理</p>
    <p>
      状态数据：{{ this.$store.state.user }}
      <el-button type="primary" class="ml20" size="mini" @click="change()">
        更改</el-button
      >
    </p>
  </div>
  <div>
    {{reactiveNum1.test}}
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, reactive } from "vue";
export default {
  name: "homePage",
  data() {
    return {
      name: "张三",
    };
  },
  setup() {
    //reactive定义复杂的数据类型的数据
    const reactiveNum1 = reactive({
      test: 1,
    }); 
    //ref推荐定义基本数据类型
    const refNum2 = ref(100); 
    console.log("reactive", reactiveNum1);
    console.log("ref", refNum2);

    const name = ref("李四");
    const age = ref(18);
    // console.log(age)
    const plusOne = () => {
      age.value++; //想改变值或获取值 必须.value
    };

    const store = useStore();
    console.log(store);
    console.log(store.state);
    const change = () => {
      console.log(123);
      store.state.user = "状态2";
    };
    // console.log(store.state);

    // const curRout = '/' + window.location.href.split('/').pop();
    // return {
    //   activeIndex: curRout === '/' ? '/home' : curRout,
    // }
    return {
      //必须返回 模板中才能使用
      name,
      age,
      plusOne,
      change,
      reactiveNum1,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  font-size: 20px;
  li {
    display: inline-block;
    font-size: 20px;
    margin: 0 20px;
  }
}
</style>
