<template>
    <div class="normal-player">
        <div class="player-wrapper">
            <normal-player-header/>
            <normal-player-middle/>
            <normal-player-bottom/>
        </div>
        <div class="player-background">
            <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg" alt>
        </div>
    </div>
</template>

<script>
import NormalPlayerHeader from './NormalPlayerHeader.vue'
import NormalPlayerMiddle from './NormalPlayerMiddle.vue'
import NormalPlayerBottom from './NormalPlayerBottom.vue'

export default {
  name: 'NormalPlayer',
  components: {
    NormalPlayerHeader,
    NormalPlayerMiddle,
    NormalPlayerBottom
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/mixin';

.normal-player {
    position: fixed;
    inset: 0;
    @include bg_sub_color();
    z-index: 1999;

    .player-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 9;
    }

    .player-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: blur(150px);
        }
    }
}
</style>
