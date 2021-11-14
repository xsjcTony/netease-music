<template>
    <div class="player">
        <normal-player/>
        <mini-player/>
        <list-player/>
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
  }
}
</script>

<style scoped lang="scss">

</style>
