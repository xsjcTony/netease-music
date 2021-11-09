<template>
    <div class="player">
        <player-header/>
        <player-middle/>
    </div>
</template>

<script>
import PlayerHeader from '../components/Player/PlayerHeader.vue'
import PlayerMiddle from '../components/Player/PlayerMiddle.vue'

export default {
  name: 'MusicPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle
  }
}
</script>

<style scoped lang="scss">
.player {
    position: fixed;
    inset: 0;
    background: pink;
    z-index: 1999;
}
</style>
