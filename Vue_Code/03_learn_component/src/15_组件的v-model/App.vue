<template>
  <div>
    <h2>App：{{ message }}</h2>
    <h2>App：{{ title }}</h2>

    <!-- <input v-model="message"> -->
    <!-- 等价于 -->
    <!-- <input :value="message" @input="message = $event.target.value"> -->
    <!-- 我们之前使用v-model，是在html自带的input元素上用的，那么如果想要在组件上使用v-model，又要怎么做呢？ -->

    <!-- <my-input v-model="message"></my-input> -->
    <!-- 相当于 -->
    <!-- <my-input :modelValue="message" @update:model-value="message = $event"></my-input> -->

    <!-- 如果我们想用v-model绑定多个值，要怎么做呢？ 不能这样做-->
    <!-- <my-input v-model="message" v-model="title"></my-input> -->

    <!-- 绑定两个v-model -->
    <!-- 当你这样做时，MyInput组件里面立马绑定第二个属性 -->
    <my-input v-model="message" v-model:title="title"></my-input>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      message: "HelloWorld",
      title: "哈哈哈",
    };
  },
};
</script>

<style scoped>
</style>