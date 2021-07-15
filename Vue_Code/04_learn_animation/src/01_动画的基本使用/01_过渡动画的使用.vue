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
  import { NButton, NSwitch } from 'naive-ui'
  export default {
    data() {
      return {
        isShow: true,
      }
    },
    components: {
      NButton,
      NSwitch,
    },
    methods: {
      handleChange() {
        this.isShow = !this.isShow
      },
    },
  }
</script>

<style scoped>
  #main {
    padding: 50px;
  }
  /* 如果你加了transition，Vue会检测你有没有相关class */
  /* 从什么地方进入 */
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
  /* 到什么地方离开 */
  .why-enter-to,
  .why-leave-from {
    opacity: 1;
  }
  /* 怎么走（进行） */
  .why-enter-active,
  .why-leave-active {
    /* transition: 要过度的属性 过度的时间 怎么过度（先慢后快/先快后慢）; */
    transition: opacity 1s;
  }
</style>
