<template>
  <div id="main">
    <div>
      <n-switch v-model="isShow" @update:value="handleChange" />
    </div>

    <transition name="why">
      <h2 class="title" v-if="isShow">Hello World</h2>
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
    /* padding: 50px; */
    width: 50vw;
    height: 100vh;
    margin: 40vh auto;
    text-align: center;
  }

  .title {
    display: inline-block;
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
