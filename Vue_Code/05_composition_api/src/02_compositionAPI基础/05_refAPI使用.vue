<template>
  <div>
    <!-- 当我们在template模板中使用ref对象，它会自动进行解包，所以不用写成counter.value -->
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
// 如果觉得reactiveAPI麻烦的话，还有一个ref API
// 而且reactive API对传入的类型有限制，必须是一个对象或者数组类型，如果不是就会警告
import { ref } from 'vue'
export default {
  setup() {
    // let counter = 100
    // 1、将counter包裹在reactive里面，放在一个state变量里面
    // const state = reactive(100) 这样写是错误的

    // let counter = 100 // 这样写的话counter是基本数据类型，没有响应式
    let counter = ref(100) // 这样写就成为一个可响应式的引用了，counter是对象

    const increment = () => {
      // 虽然在template模板中有自动解包，但是在函数中可没有自动解包
      // 所以不能直接counter++
      counter.value++
      console.log(counter.value)
    }

    return {
      counter,
      increment,
    }
  },
}
</script>

<style scoped>

</style>