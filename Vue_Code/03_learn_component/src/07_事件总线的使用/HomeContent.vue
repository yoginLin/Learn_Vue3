<template>
  <div></div>
</template>

<script>
/* 
  在About发生一个事件，我们希望在HomeContent里能被监听
*/
import emitter from "./utils/eventbus";
export default {
  created() {
    emitter.on("why", (info) => {
      console.log("why:", info);
    });
    emitter.on("kobe", (info) => {
      console.log("Kobe:", info);
    });
    // 类型,数据
    emitter.on("*", (type, info) => {
      console.log("*listener", type, info);
    });

    /*
      取消所有监听
      emitter.all.clear()

      定义一个函数
      function onFoo() {}
      emitter.on('foo',onFoo)    监听
      emitter.off('foo',onFoo)   取消监听
    */
  },
};
</script>

<style scoped></style>
