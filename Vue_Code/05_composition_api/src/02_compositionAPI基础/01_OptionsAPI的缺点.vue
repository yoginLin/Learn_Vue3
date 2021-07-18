<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>counter * 2：doubleCounter()</h2>
    <button>+1</button>
    <button>-1</button>
  </div>
</template>

<script>
export default {
  /* optionAPI的弊端：代码太复杂，难以阅读和理解 */
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {},
    decrement() {},
  },
  computed: {
    doubleCounter() {
      return this.counter * 2
    },
  },
  watch() {},
  created() {},
  // 所有的逻辑被拆分到各个地方，这样不利于理清楚代码的逻辑
  // Composition API将同一点的相关代码收集在了一起，可以方便我们阅读代码
}
</script>