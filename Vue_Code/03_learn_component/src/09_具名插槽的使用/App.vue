<template>
  <div>
    <nav-bar :name="name">
      <!-- 具名插槽的好处就是可以指定元素的分布 -->
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>

      <template v-slot:center>
        <h2>我是中间的标题</h2>
      </template>

      <template v-slot:right>
        <i>右边的i元素</i>
      </template>

      <!-- 注意得这样用 v-slot:[name] -->
      <template v-slot:[name]>
        <i>why元素</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      name: "why",
    };
  },
};
</script>

<style scoped>
</style>