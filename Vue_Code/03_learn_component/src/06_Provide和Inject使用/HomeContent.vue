<template>
  <div>
    <h2>HomeContent</h2>
    <p>{{ name }} -- {{ age }} -- {{ length.value }}</p>
  </div>
</template>

<script>
export default {
  // 用inject获取父组件提供的数据
  inject: ["name", "age", "length"],
}
</script>

<style scoped></style>
