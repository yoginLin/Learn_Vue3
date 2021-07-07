<template>
  <div>
    <!-- 1、模拟绑定和事件处理 -->
    <!-- <button @click="btnClick">MyInput的Button</button> -->
    <!-- <h2>MyInput的message：{{modelValue}}</h2> -->

    <!-- 2、通过input -->
    <!-- <span>我是MyInput组件的input：</span> -->
    <!-- <input :value="modelValue" @input="btnClick" /> -->

    <!-- 3、绑定到props是不对的 -->
    <!-- <input v-model="modelValue"> -->

    <!-- 4、通过计算属性实现 -->
    <input v-model="myName" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  conputed: {
    // 名字随便起，无所谓
    myName: {
      set(value) {
        this.$emit("update:modelValue", value)
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped></style>
