<template>
  <div>
    <!-- <h2>{{ message }}</h2> -->
    <!-- <input type="text" v-model="message" /> -->
    <!-- 双向绑定的本质 -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- <p>----------------------------------</p> -->

    <!-- 在组件上使用v-model -->
    <h2>{{ message }}</h2>
    <!-- <my-input v-model="message"/> -->
    <!-- 相当于 -->
    <!-- 绑定了一个modelValue的属性，还帮你绑定了一个@update的事件，@update:model-value，在事件中可以拿到message的值，值是$event -->
    <!-- 这里调用MyInput组件 -->
    <my-input :modelValue="message" @update:model-value="message = $event"/>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue"
export default {
  components: { MyInput },
  data() {
    return {
      message: "Hello World!",
    }
  },
}
</script>

<style scoped></style>
