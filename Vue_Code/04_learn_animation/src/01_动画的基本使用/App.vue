<template>
  <div id="main">
    <!-- <n-button >显示/隐藏</n-button> -->
    <n-switch v-model="isShow" @update:value="handleChange" />
    <!-- <h2 v-if="isShow">Hello World</h2> -->
    <!-- 现在我们点击按钮，h2就能显示和消失，但是太突兀了，没有美感，我们可以加点动画 -->
    <!-- 有一个内置组件Transition -->
    <transition name="why">
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import { NButton,NSwitch } from "naive-ui";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    NButton,
    NSwitch
  },
  methods:{
    handleChange(){
      this.isShow = !this.isShow
    }
  }
};
</script>

<style>
#main {
  padding: 50px;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-to,
.why-leave-from {
  opacity: 1;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s;
}
</style>
