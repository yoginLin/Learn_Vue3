<template>
  <div>
    <!-- 1、模拟绑定和事件触发 -->
    <!-- <button @click="btnClick">MyInput按钮</button> -->
    <!-- <h2>MyInput的message:{{modelValue}}</h2> -->

    <!-- 2、通过input直接实现绑定和触发 -->
    <!-- <input :value="modelValue" @input="btnClick"> -->

    <!-- 这时候如果我们想只用一个v-model来绑定 -->
    <!-- 3、绑定到props中是不对的 -->
    <!-- <input v-model="modelValue"> -->

    <!-- 4、使用计算属性 -->
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>