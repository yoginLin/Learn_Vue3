<template>
  <div id="main">

    <div><n-switch v-model="isShow" @update:value="handleChange" /></div>

    <transition name="why" mode="out-in" appear>
      <h2>Hello World</h2>
      <!-- 010142 -->
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
  components: { NButton,NSwitch,Home,About }
};
</script>

<style scoped>

</style>
