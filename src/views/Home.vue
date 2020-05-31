<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Test /> -->
    <div id="video"></div>
  </div>
</template>

<script>
// import Test from '@/components/test.vue'
import 'dplayer/dist/DPlayer.min.css'
import DPlayer from 'dplayer'
export default {
  name: 'home',
  components: {
    // Test
  },
  mounted () {
    this.createVideo()
  },
  methods: {
    createVideo () {
      const dp = new DPlayer({
        container: document.getElementById('video'),
        video: {
          quality: [
            {
              name: 'HD',
              url: 'http://vjs.zencdn.net/v/oceans.mp4',
              type: 'normal'
            },
            {
              name: 'SD',
              url: 'http://vjs.zencdn.net/v/oceans.mp4',
              type: 'normal'
            }
          ],
          defaultQuality: 0
        }
      })
      console.log(dp)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 3000px;
  background: #fff;
}
</style>
