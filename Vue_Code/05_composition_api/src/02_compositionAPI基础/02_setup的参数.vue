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
  /* 
    // setup 函数有哪些参数？
    // setup 函数有什么样的返回值？
    参数一：props，父组件传递过来的属性
    参数二：
    注意：setup里面是不能用this的，所以就需要传入一个props和context
  */
  // setup(props, context) {
  // setup(props, { attrs, slots, emit }) {
  setup(props, { emit }) {
    // console.log(props)
    // console.log(props.message)
    // console.log(context.attrs.id, context.attrs.class)
    // console.log(attrs.id, attrs.class)
    // console.log(context.slots)
    // console.log(slots)
    // console.log(context.emit)
    // console.log(emit)

    // 这样相当于data(){return {}},而且会优先使用setup里面的data
    return {
      title: 'Hello Home',
      counter: 100,
    }
  },
  methods: {
    btnClick() {
      this.$emit
    },
  },
}
</script>

<style scoped>

</style>