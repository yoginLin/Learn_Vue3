<template>
  <!-- 当有多个根时，会不知道在哪个根上继承，所有报警告 -->
  <!-- 
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2> -->

  <!-- 如果要解除这个警告的话，就需要明确在哪个根上继承 -->
  <h2 :id="$attrs.id">MultiRootElement</h2>
  <!-- 这样就不会报警告了 -->
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
</template>

<script>
export default {}
</script>

<style scoped></style>
