<template>
  <div id="app">
    <default-layout></default-layout>
  </div>
</template>

<script>
const DefaultLayout = () => import('./layout/default')
export default {
  components: {
    DefaultLayout
  }
}
</script>

<style lang="less">

</style>
