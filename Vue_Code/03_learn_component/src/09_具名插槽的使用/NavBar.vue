<template>
  <div class="nav-bar">
    <!-- <slot></slot> 等同于 <slot name="default"></slot> -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>

  <!-- 具名插槽的好处就是可以指定元素的分布 -->
</template>

<script>
export default {
  props: {
    name: String
  },
  // data() {
  //   return {
  //     name: "why"
  //   };
  // },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left,
.right,
.addition {
  width: 80px;
  background-color: pink;
}

.center {
  flex: 1;
  background-color: blue;
}

.left,
.center,
.right {
  height: 44px;
}
</style>