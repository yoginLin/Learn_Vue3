<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{ active: currentIndex == index }" v-for="(title, index) in titles" :key="title" @click="changeItem(index)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["titleClick"],
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index
      this.$emit("titleClick", this.currentIndex)
    },
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
  font-size: 18px;
}

.tab-control-item.active {
  color: red;
}

.tab-control-item.active span {
  border-bottom: 5px solid red;
  padding: 3px 8px;
}
</style>
