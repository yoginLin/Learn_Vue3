<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = 100

    // 局部函数
    const increment = () => {
      // console.log('increment')
      counter++
      console.log(counter)
      // 这里我们发现，counter虽然有增加，但在浏览器中并没有改变
    }
    return {
      title: 'Hello Home',
      counter,
      increment, // 将函数也返回出去了
    }
  },
}
</script>

<style scoped>

</style>