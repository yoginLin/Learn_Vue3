<template>
  <h2>我是Vue渲染出来的</h2>
  <h2>{{ title }}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Hello World",
      message: "哈哈哈",
    };
  },
  methods: {},
  computed: {},
};
</script>

<!-- scoped表示一个作用域，写上这个就表示这些样式只在这个文件中生效 -->
<style scoped>
h2 {
  color: red;
}
</style>