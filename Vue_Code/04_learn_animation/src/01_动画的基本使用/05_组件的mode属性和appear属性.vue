<template>
  <div id="main">
    <div>
      <n-switch v-model="isShow" @update:value="handleChange" />
    </div>
    <!-- 组件之间的切换也可以使用mode -->
    <!-- 如果我们想第一次进入页面时就有动画效果，可以加一个appear，默认为false，所以需要自己设置为true -->
    <!-- <transition name="why" mode="out-in" appear="true"> -->
    <!-- 也可以这样写 -->
    <transition name="why" mode="out-in" appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
import { NButton, NSwitch } from "naive-ui";
import Home from './pages/Home.vue'
import About from './pages/About.vue'
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    NButton,
    NSwitch,
    Home,
    About
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
