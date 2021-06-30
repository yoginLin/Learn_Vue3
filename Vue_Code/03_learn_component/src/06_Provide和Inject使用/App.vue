<template>
  <div>
    <!-- 
      ① 有时候我们会遇到一些深度嵌套的组件，子组件想要取得父组件的部分内容，用props会比较麻烦
      ② 这个时候，就可以使用provide和inject，无论层级多深，父组件都能成为子组件的依赖提供者
          父组件有一个provide（提供）选项来提供数据
          子组件用inject（注入）选项来使用这些数据
      ③ 可以把依赖注入看成是一个long range props
          父组件不需要知道是哪些子组件使用了provide
          子组件也不需要知道inject的property来自哪里
     -->
    <home />
    <button @click="addName">+name</button>
    <!--
      注意，自己和自己的兄弟组件是不能用provide里面的数据的
      会报警告：[Vue warn]: Property "name" was accessed during render but is not defined on instance. 
    -->
    <!-- {{name}} -->
  </div>
</template>

<script>
import Home from "./Home.vue"
import { computed } from "vue"
export default {
  components: { Home },
  /* provide:{
      // 写了provide就表示已经在提供数据了 31.15
      name:'why',age:18
    }, */
  provide() {
    // 如果想要在里面使用this的话，provide要写成一个函数，然后返回对象
    return {
      name: "why",
      age: 18,
      // length: this.names.length // 一次性赋值
      length: computed(() => this.names.length) // ref对象.value
    }
  },
  // 如果想提供的数据来自于data
  data() {
    return {
      names: ["abc", "cba", "nba"],
    }
  },
  methods: {
    addName() {
      this.names.push("why")
      console.log(this.names)
    },
  },
}
</script>

<style scoped></style>
