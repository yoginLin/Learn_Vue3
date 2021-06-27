<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <!-- 有时候我们想顺便传递参数，就可以这样写 -->
    <!-- 比如说我们现在想自己输入增加的数值，就需要有一个参数 number -->
    <input type="text" v-model.number="number" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
  // emits: ["add", "sub", "addN"],
  // 除了数组的写法，还可以写成对象的写法
  // 对象写法的目的是为了进行参数的验证
  emits: {
    // null的意思是不需要验证
    add: null,
    sub: null,
    // addN需要验证，可以这样写
    // 下面这样写的话，当只有一个参数时，不会有问题
    // addN: (payload) => {
    //   console.log(payload)
    // },
    // 注意，当有多个参数时，最好写成这样
    addN: (num, name, age) => {
      console.log(num, name, age)
      // 当有了num, name, age时，我们就可以对其做一些验证
      if(num > 10){ // 这里如果num 没有大于10的话，浏览器会报警告，但是依然会传过去
        return true
      }
      return false // 返回一个true表示验证通过
    },
  },
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    increment() {
      console.log("+1")
      // 子组件发送一个事件给父组件，告诉父组件要触发add这个事件
      this.$emit("add")
    },
    decrement() {
      console.log("-1")
      this.$emit("sub")
    },
    incrementN() {
      // 这样写就把参数跟着传出去了，如果想传更多，可以在后面接着写
      this.$emit("addN", this.number, "why", 18)
    },
  },
}
</script>

<style scoped></style>
