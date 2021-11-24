<template>
    <div class="player">
        <NormalPlayer :current-time="currentTime" :total-time="totalTime"/>
        <MiniPlayer/>
        <ListPlayer/>
        <audio ref="audio"
               :src="currentSong.url"
               @timeupdate="timeUpdate"
               @ended="musicEnded"
        ></audio>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer.vue'
import MiniPlayer from '../components/Player/MiniPlayer.vue'
import ListPlayer from '../components/Player/ListPlayer.vue'
import { mapActions, mapGetters } from 'vuex'
import playModeType from '../store/playModeType'

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
      'songCurrentTime',
      'playModeType',
      'currentSongIndex',
      'songs'
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
    ...mapActions([
      'setSongIndex'
    ]),

    timeUpdate (event) {
      this.currentTime = event.target.currentTime
    },

    /**
     * @desc Change to next music based on play mode when current music has ended.
     */
    musicEnded () {
      switch (this.playModeType) {
        case playModeType.listLoop:
          this.setSongIndex(this.currentSongIndex + 1)
          break
        case playModeType.singleLoop:
          this.$refs.audio.play()
          break
        case playModeType.random:
          let index

          do {
            index = this.getRandomIntInclusive(0, this.songs.length - 1)
          } while (index === this.currentSongIndex)

          this.setSongIndex(index)
          break
        default:
          break
      }
    },

    /**
     * @desc Generate a random integer, including min and max.
     * @param {number} min - Minimum integer, inclusive.
     * @param {number} max - Maximum integer, inclusive.
     * @returns {number} - The generated random integer.
     */
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
