<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
// import Header from "./Header" 不写.vue的话，脚手架会自动帮我们配置extension
import Header from "./Header.vue"
import Main from "./Main.vue"
import Footer from "./Footer.vue"
export default {
  components: {
    Header,
    Main,
    Footer,
  },
}
</script>

<style scoped></style>
