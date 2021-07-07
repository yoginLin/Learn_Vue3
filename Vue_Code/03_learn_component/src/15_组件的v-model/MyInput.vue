<template>
  <div>
    <input v-model="value" />
    <input v-model="myTitle" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String, // 内部里面传过来这个属性
  },
  emits: ["update:modelValue","update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    myTitle: {
      set(myTitle) {
        this.$emit("update:title", myTitle);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>