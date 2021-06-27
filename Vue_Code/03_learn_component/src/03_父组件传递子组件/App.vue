<template>
  <div>
    <!-- 非Prop的Attribute，会被组件的根div继承 -->
    <show-message class="why" id="haha" title="哈哈" content="随便写点什么" />
    <show-message title="呵呵" content="随便写点什么" />
    <show-message title=123  />
    <show-message :title="title" :content="content" />
    <!-- 两种方式 -->
    <show-message :title="message.title" :content="message.content" />
    <show-message v-bind="message" />
    
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue"
export default {
  components: { ShowMessage },
  data() {
    return {
      title: "嘻嘻嘻",
      content: "我是data里面的content",
      message: {
        title: 123
      },
    }
  },
}
</script>

<style scoped></style>
