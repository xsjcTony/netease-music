<template>
    <div class="player">
        <normal-player :current-time="currentTime" :total-time="totalTime"/>
        <mini-player/>
        <list-player/>
        <audio ref="audio" :src="currentSong.url" @timeupdate="timeUpdate"></audio>
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
      'currentSong',
      'songCurrentTime'
    ])
  },

  watch: {
    isMusicPlaying (newValue) {
      if (newValue) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },

    currentSong () {
      this.totalTime = 0
      this.currentTime = 0

      this.$refs.audio.oncanplay = () => {
        this.totalTime = this.$refs.audio.duration

        if (this.isMusicPlaying) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    },

    songCurrentTime (newValue) {
      if (newValue <= this.totalTime) {
        this.$refs.audio.currentTime = newValue
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

<style lang="scss" scoped>

</style>
