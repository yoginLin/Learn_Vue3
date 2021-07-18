<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <!-- ref的解包是一个浅层解包，如果将counter放到另一个对象的使用，就不能进行自动解包了 -->
    <h2>当前计数：{{ info.counter.value }}</h2>
    <!-- 如果最外层包裹的是一个reactive可相应对象，那么内部的ref可以解包(不常用) -->
    <h2>当前计数：{{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
// 如果觉得reactiveAPI麻烦的话，还有一个ref API
// 而且reactive API对传入的类型有限制，必须是一个对象或者数组类型，如果不是就会警告
import { ref, readonly } from 'vue'
export default {
  setup() {
    let counter = ref(100)

    const info = {
      counter,
    }

    // 但是如果在包裹的时候是一个reactive对象,就又可以解包了
    const reactiveInfo = reactive({
      counter,
    })

    const increment = () => {
      counter.value++
      console.log(counter.value)
    }

    return {
      counter,
      info,
      increment,
      reactiveInfo,
    }
  },
}
</script>

<style scoped>

</style>