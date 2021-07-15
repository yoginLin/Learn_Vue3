<template>
  <div id="main">
    <!--开关： 用于控制显示与隐藏-->
    <div><n-switch v-model="isShow" @update:value="handleChange" /></div>
    <!--被显示和隐藏的东西-->
    <!-- <transition name="why">
      <h2 v-if="isShow">Hello World</h2>
    </transition> -->
    <!-- 自定义过渡class -->
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
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
    },
  }
</script>
<style scoped>
  #main {
    padding: 400px;
    display: inline-block;
  }

  /* .why-enter-active {
    animation: bounceInLeft 2s ease-in;
  }

  .why-leave-active {
    animation: bounceInLeft 2s ease-in reverse;
  } */
</style>
