<template>
    <div class="player">
        <normal-player :total-time="totalTime"/>
        <mini-player/>
        <list-player/>
        <audio ref="audio" :src="currentSong.url">
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
      totalTime: 0
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
  }
}
</script>

<style scoped lang="scss">

</style>
