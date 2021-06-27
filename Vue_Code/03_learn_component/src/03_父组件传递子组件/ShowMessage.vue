<template>
  <div>
    <!-- <h2 :class="$attrs.class">{{ title }}</h2> -->
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // 这种只能告诉别人传什么值，不能对传进来的东西做一些限制，开发中不常见
  // props:['title','content'],
  inheritAttrs: false, // 如果不想要继承的话，可以这样写
  props: {
    // 这样写可以对传进来的值做类型限制，如果不是规定好的类型的话，会报警告
    title: String,
    // content:String
    content: {
      type: String,
      required: true, // 必传，不传值报警告
      // default:"123" // 不传的时候的默认值，开发时必传和默认值二选一即可
      default() {
        // 当type为Object这种引用类型时，default最好是个函数，要不然会指向同一个对象
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
