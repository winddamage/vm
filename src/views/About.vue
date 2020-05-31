<template>
  <div id="video">
    <video-player  class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <!-- <div class="control-box">
      <button>play</button>
    </div> -->
  </div>
</template>

<script>
import { videojs } from 'vue-video-player'
// import videoJsResolutionSwitcher from 'videojs-resolution-switcher'
export default {
  data () {
    return {
      playerOptions: {
        controls: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: 'http://vjs.zencdn.net/v/oceans.mp4' // url地址
        }],
        // poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true // 全屏按钮
        // },
        plugins: {
          // videoJsResolutionSwitcher: {
          //   default: 'low', // Default resolution [{Number}, 'low', 'high'],
          //   dynamicLabel: true
          // }
        }
      }
    }
  },
  mounted () {
    // this.handleCreateComponent()
  },
  methods: {
    handleCreateComponent () {
      // const self = this
      let Button = videojs.getComponent('Button')
      let myButton = videojs.extend(Button, {
        constructor: function (player, options) {
          Button.apply(this, arguments)
          this.addClass('my-button')
        },
        handleClick: () => {
          // 绑定点击事件
          console.log(1111)
        },
        buildCSSClass: function () {
          return 'vjs-icon-custombutton vjs-control vjs-button'
        }
      })
      // 注册
      videojs.registerComponent('myButton', myButton)
      this.$nextTick(() => {
      // 添加到controlBar中
        this.player.getChild('controlBar').addChild('myButton')
      })
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<style lang='less' scoped>
.video {
  position: relative;
  .control-box {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 44px;
    background: red;
    visibility: hidden;
    opacity: 0;
  }
  &:hover {
    .control-box {
      opacity: 1;
      visibility: visible;
    }
  }
}
/deep/.my-button {
  order: 5;
  background: red;
}
</style>
