<template>
    <div class="player">
        <normal-player/>
        <mini-player/>
        <list-player/>
        <audio :src="currentSong.url"></audio>
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
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
