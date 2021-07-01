<template>
  <div>
    <!-- 
      props可以用来传递一些数据，但是决定不了组件中显示的内容，比如说div、span、button等
      相同组件中可能有一小部分不同，想要让这个组件更灵活，更通用，我们可以使用插槽
     -->
    <!-- 可以插按钮 -->
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>

    <!-- 可以插文本 -->
    <my-slot-cpn>
      我是普通文本
    </my-slot-cpn>

    <!-- 可以插自己的组件 -->
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>

    <!-- 啥都不传的话，就会用默认的 -->
    <my-slot-cpn></my-slot-cpn>

    <!-- 如果强行插入多个内容 -->
    <my-slot-cpn>
      <h2>hahaha</h2>
      <button>我是个按钮</button>
      <strong>我是粗体</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MyButton from './MyButton.vue';
import MySlotCpn from "./MySlotCpn.vue";
export default {
  components: { MySlotCpn, MyButton },
};
</script>

<style scoped>
</style>