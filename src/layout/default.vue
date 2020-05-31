<template>
  <div class="layout">
    <div class="my-header">
      <router-link to="/home">Home | </router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="my-main">
      <router-view></router-view>
    </div>
    <div class="my-footer">footer~</div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;
  .my-header {
    height: 100px;
    background: saddlebrown;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .my-main {
    width: 100%;
    height: 100%;
    padding: 100px 0;
    overflow-x: hidden;
    overflow-y: auto;
    background: seagreen;
  }
  .my-footer {
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: sienna;
  }
}
</style>
