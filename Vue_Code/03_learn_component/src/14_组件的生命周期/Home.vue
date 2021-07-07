<template>
  <div>
    <h2>Home</h2>
    <p ref="title">{{message}}</p>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message:"helloWorld"
      }
    },
    methods: {
      changeMessage(){
        this.message = "lalala"
      }
    },
    beforeCreate() {
      console.log('Home beforeCreate');
    },
    created() {
      console.log('Home created');
    },
    beforeMount() {
      console.log('Home beforeMount');
    },
    mounted() {
      console.log('Home mounted');
    },
    beforeUnmount() {
      console.log('Home beforeUnmount');
    },
    unmounted() {
      console.log('Home unmounted');
    },
    beforeUpdate() {
      console.log(this.$refs.title.innerHTML);
      console.log('Home beforeUpdate');
    },
    updated() {
      console.log(this.$refs.title.innerHTML);
      console.log('Home updated');
    },
  }
</script>

<style scoped>

</style>