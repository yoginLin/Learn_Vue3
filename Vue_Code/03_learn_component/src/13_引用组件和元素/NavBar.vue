<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根元素</button>

    <!-- <div v-for="item in $parent.names"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:"我是NavBar中的Message"
    }
  },
  methods: {
    sayHello() {
      console.log("Hello NavBar")
    },
    getParentAndRoot(){
      // $parent可以拿到父组件，拿到的也是个proxy
      console.log(this.$parent);
      // $root可以拿到根组件，拿到的也是个proxy
      console.log(this.$root);
      // 在Vue3中移除了$children的属性
    }
  },
}
</script>

<style scoped></style>
