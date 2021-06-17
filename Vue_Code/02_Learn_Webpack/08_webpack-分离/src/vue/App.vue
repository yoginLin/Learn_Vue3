<template>
  <h2>我是Vue渲染出来的</h2>
  <h2>{{ title }}</h2>
  <input type="text" :value="num">
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Hello World!!!!",
      message: "哈哈哈",
      num:0
    };
  },
  methods: {
    increment(){
      this.num++
    },
    decrement(){
      this.num--
    }
  },
  computed: {},
};
</script>

<!-- scoped表示一个作用域，写上这个就表示这些样式只在这个文件中生效 -->
<style scoped>
h2 {
  color: red;
}
</style>