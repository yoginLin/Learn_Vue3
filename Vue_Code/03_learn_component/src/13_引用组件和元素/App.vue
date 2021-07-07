<template>
  <div>
    <!-- <h2 id="title">哈哈哈</h2> -->
    <!-- 绑定到一个元素上 -->
    <h2 ref="title">哈哈哈</h2>

    <!-- 绑定到一个组件上 -->
    <nav-bar ref="navbar" />
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
export default {
  components: { NavBar },
  data() {
    return {
      name:['abc','cba','ppt']
    }
  },
  methods: {
    /* 
        在Vue开发中，我们不建议进行DOM操作
        我们可以使用ref
        组件中有一个$refs属性，它是一个Object，持有注册过 ref attribute 的所有DOM元素和组件实例
      */
    btnClick() {
      // document.getElementById
      console.log(this.$refs.title)
      console.log(this.$refs.navbar)
      console.log(this.$refs.navbar.message)
      this.$refs.navbar.sayHello()

      // $el 拿到组件里面的根元素
      console.log(this.$refs.navbar.$el);

      // 学会查文档是非常重要的能力
    },
  },
}
</script>

<style scoped></style>
