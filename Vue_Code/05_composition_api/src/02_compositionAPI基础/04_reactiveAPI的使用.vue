<template>
  <div>
    <h2>当前计数：{{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
// 之前我们counter不能响应式，那想要让它响应式的话，就得加一个reactive
import { reactive } from 'vue'
export default {
  setup() {
    // let counter = 100
    // 1、将counter包裹在reactive里面，放在一个state变量里面
    const state = reactive({
      counter: 100,
    })

    // 局部函数
    const increment = () => {
      // 2、然后加的是state.counter，state.counter++
      state.counter++
      // 拿的时候也是state.counter
      console.log(state.counter)
    }

    return {
      // 3、再把state return出去
      state,
      increment,
    }
  },
}
</script>

<style scoped>

</style>