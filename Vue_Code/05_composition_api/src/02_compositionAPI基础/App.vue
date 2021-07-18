<template>
  <div>
    <!-- <h2>{{ readonlyInfo1.name }}</h2> -->
    <!-- <h2>{{ readonlyInfo2.name }}</h2> -->
    <h2>{{ readonlyInfo3 }}</h2>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { ref, reactive, readonly } from 'vue'
export default {
  // 如果我们传一个值给组件，只希望被使用，不希望被修改，就可以用readonly方法
  setup() {
    // 1、普通对象
    let info1 = { name: 'why' }
    const readonlyInfo1 = readonly(info1)

    // 2、响应式的对象
    const info2 = reactive({
      name: 'why',
    })
    const readonlyInfo2 = readonly(info2)

    // 3、响应式的对象ref
    const info3 = ref('why')
    const readonlyInfo3 = readonly(info3)

    // 一般情况下，info可以被修改
    const updateState = () => {
      // readonlyInfo1.name = 'codewhy'
      // readonlyInfo2.name = 'codewhy'
      readonlyInfo3.value = 'codewhy' // 这里是ref对象，所以这里是.value
      // info1.name = 'codewhy'
      // info2.name = 'codewhy'
      // info3.value = 'codewhy'
    }

    return {
      updateState,
      readonlyInfo1,
      readonlyInfo2,
    }
  },
}
</script>