<template>
  <div>
    <button v-for="(item, index) in tabs" 
            :key="item" @click="itemClick(item)"
            :class="{active: currentTab === item}">
      {{ item }}
    </button>
    <!-- 1、用v-if来切换组件 -->
    <!-- <template v-if="currentTab === 'home'">
      <home />
    </template>

    <template v-else-if="currentTab === 'about'">
      <about />
    </template>

    <template v-if="currentTab === 'category'">
      <category />
    </template> -->

    <!-- 2、动态组件 -->
    <!-- <component :is="currentTab"></component> -->

    <!-- 动态组件也想传值，要怎么做？ -->
    <!-- <component :is="currentTab"
               name="coderwhy"
               :age="18"
               @pageClick="pageClick"></component> -->

    <!-- 某些情况下我们希望继续保持组件状态，而不是销毁掉，这时候就可以使用<keep-alive> -->
    <!-- keep-alive有一些属性(写之前组件里面要定义name属性，注意区分大小写)
          include - string | RegExp | Array。只有名称匹配的组件会被缓存；
          exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存；
          max - number | string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁；

        不写的话默认全部都缓存
     -->
    <keep-alive include="home,about"> 
      <component :is="currentTab"
              name="coderwhy"
              :age="18"
              @pageClick="pageClick"></component>
    </keep-alive>

  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'

export default {
  components: { Home, About, Category },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab:"home"
    }
  },
  methods: {
    itemClick(item){
      this.currentTab = item
    },
    pageClick(){
      console.log("page 内部发生了点击");
    }
  },
}
</script>

<style scoped>
.active {
  color:red
}
</style>
