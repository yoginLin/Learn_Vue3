<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <!-- 子组件发射一个事件出来后到这里被父组件监听到，父组件执行相对应的方法 -->
    <counter-operation @add="increment" @sub="decrement" @addN="addNum"/>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue"
export default {
  components: { CounterOperation },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    // 到时候就会传过来一个参数num
    addNum(num) {
      this.counter += num
    }
  },
}
</script>

<style scoped></style>
