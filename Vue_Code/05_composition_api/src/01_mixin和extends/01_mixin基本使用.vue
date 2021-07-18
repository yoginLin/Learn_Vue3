<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">我是按钮</button>
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixin'
export default {
  // mixin本质上就是一个对象
  mixins: [demoMixin],
  data() {
    return {
      title: 'App Hello',
    }
  },
  methods: {},
}
</script>
