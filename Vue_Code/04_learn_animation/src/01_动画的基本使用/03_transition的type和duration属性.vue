<template>
  <div id="main">
    <div>
      <n-switch v-model="isShow" @update:value="handleChange" />
    </div>
    <!-- 那么可以在这里加一个type="animation"，告诉vue是根据哪个动画的时间来决定动画时间结束 -->
    <!-- :duration="1000" 的话就是明确的指定了动画的执行的时间，一旦设置了这个时间，那么下面样式中设置的时间就无效了 -->
    <!-- <transition name="why" type="animation" :duration="1000"> -->
    <transition name="why" type="animation" :duration="{enter: 800,leave: 1000}">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import { NButton, NSwitch } from "naive-ui";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    NButton,
    NSwitch,
  },
  methods: {
    handleChange() {
      this.isShow = !this.isShow;
    },
  },
};
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
