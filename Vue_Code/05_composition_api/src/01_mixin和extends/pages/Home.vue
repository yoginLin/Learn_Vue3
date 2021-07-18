<template>
  <div>
    Home Page
    <!-- 这个title是BasePage的，也可以拿来用 -->
    <h2>{{ title }}</h2>
    <button @click="bar">我是Home的按钮</button>
  </div>
</template>

<script>
import BasePage from './BasePage.vue'

export default {
  extends: BasePage, // extends现在用的非常少，建议换成mixin
  data() {
    return {
      content: 'Hello Home',
    }
  },
}
</script>