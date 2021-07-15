<template>
  <div id="main">
    <div>
      <n-switch v-model="isShow" @update:value="handleChange" />
    </div>

    <transition name="why" mode="out-in">
      <!-- 如果这里不设置mode的话，切换时会有问题 -->
      <!-- mode设置了in-out，那么在执行动画时，会先执行进入动画，再执行退出动画，除此之外，还有out-in -->
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 class="title" v-else>你好啊，World</h2>
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
    width: 50vw;
    height: 100vh;
    margin: 40vh auto;
    text-align: center;
  }

  .title {
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  /* 这样就既有bounce效果，又有透明度变化的效果了 */
  /* 但是如果opacity的执行时间和bounce的执行时间不同，那么动画在执行时可能会有问题 */
  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }

  .why-enter-active {
    animation: bounce 1s ease;
  }

  .why-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
