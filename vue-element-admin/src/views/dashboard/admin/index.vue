<template>
  <div class="dashboard-editor-container">
    <!-- 事件的触发 -->
     <button @click="boost">事件测试</button>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {},
  data() {
    return {}
  },

  created() {
    // 事件的定义
    this.$on('my_events', this.handleEvents)
  },

  methods: {
    // 事件的消费
    boost() {
      this.$emit('my_events', 'my params')
    },

    // 事件的执行
    handleEvents(e){
      console.log('this.message', e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>