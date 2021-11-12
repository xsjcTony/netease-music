<template>
    <div class="player">
        <normal-player/>
        <mini-player/>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer.vue'
import MiniPlayer from '../components/Player/MiniPlayer.vue'

export default {
  name: 'MusicPlayer',
  components: {
    NormalPlayer,
    MiniPlayer
  }
}
</script>

<style scoped lang="scss">

</style>
