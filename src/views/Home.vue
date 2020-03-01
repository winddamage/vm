<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Test />
  </div>
</template>

<script>
import Test from '@/components/test.vue'
export default {
  name: 'home',
  components: {
    Test
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 3000px;
  background: #fff;
}
</style>
