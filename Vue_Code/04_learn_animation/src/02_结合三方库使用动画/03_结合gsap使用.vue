<template>
  <div id="main">
    <div><n-switch v-model="isShow" @update:value="handleChange" /></div>
    <!-- :css="false" 会让vue跳过css的检测，能提高一点性能 -->
    <transition @enter="enter" @leave="leave" :css="false">
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
<script>
import { NButton, NSwitch } from 'naive-ui'
import gsap from 'gsap'

export default {
  components: { NButton, NSwitch },
  data() {
    return {
      isShow: false,
      distance: 200,
    }
  },
  methods: {
    handleChange() {
      this.isShow = !this.isShow
    },
    enter(el, done) {
      // gsap.to({要给的对象，{执行的动画}})
      // gsap.from({要给的对象，{执行的动画}})
      gsap.from(el, {
        scale: 0,
        x: this.distance, //可以用变量，更加灵活
        // duration: 1  // 执行时间，默认0.5s
        onComplete: done, // 动画完成时执行的回调函数
      })
    },
    leave(el, done) {
      gsap.to(el, {
        scale: 0,
        x: this.distance,
        onComplete: done,
      })
    },
  },
}
</script>
<style scoped>
  #main {
    padding: 400px;
    display: inline-block;
  }
</style>