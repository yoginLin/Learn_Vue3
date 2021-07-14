<template>
  <div id="main">
    <div><n-switch v-model="isShow" @update:value="handleChange" /></div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
    >
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
<script>
import { NButton, NSwitch } from 'naive-ui'
export default {
  components: { NButton, NSwitch },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    handleChange() {
      this.isShow = !this.isShow
    },
    beforeEnter() {
      console.log('beforeEnter')
    },
    enter() {
      console.log('enter')
    },
    afterEnter() {
      console.log('afterEnter')
    },
    beforeLeave() {
      console.log('beforeLeave')
    },
    leave() {
      console.log('leave')
    },
    afterLeave() {
      console.log('afterLeave')
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