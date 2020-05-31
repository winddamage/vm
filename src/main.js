import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/base.css'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// import videoJsResolutionSwitcher from 'videojs-resolution-switcher'
Vue.use(VideoPlayer)
// Vue.use(videoJsResolutionSwitcher)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
