<template>
    <div class="player">
        <normal-player/>
        <mini-player @show-list-player="showListPlayer"/>
        <list-player ref="listPlayer"/>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer.vue'
import MiniPlayer from '../components/Player/MiniPlayer.vue'
import ListPlayer from '../components/Player/ListPlayer.vue'

export default {
  name: 'MusicPlayer',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    showListPlayer () {
      this.$refs.listPlayer.showListPlayer()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
