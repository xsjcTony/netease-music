<template>
    <div class="player">
        <normal-player :total-time="totalTime" :current-time="currentTime"/>
        <mini-player/>
        <list-player/>
        <audio ref="audio" :src="currentSong.url" @timeupdate="timeUpdate">
        </audio>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer.vue'
import MiniPlayer from '../components/Player/MiniPlayer.vue'
import ListPlayer from '../components/Player/ListPlayer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MusicPlayer',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  data () {
    return {
      totalTime: 0,
      currentTime: 0
    }
  },
  computed: {
    ...mapGetters([
      'isMusicPlaying',
      'currentSong'
    ])
  },
  watch: {
    isMusicPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    currentSong (newValue, oldValue) {
      this.totalTime = 0

      this.$refs.audio.oncanplay = () => {
        this.totalTime = this.$refs.audio.duration

        if (this.isMusicPlaying) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    }
  },
  methods: {
    timeUpdate (event) {
      this.currentTime = event.target.currentTime
    }
  }
}
</script>

<style scoped lang="scss">

</style>
