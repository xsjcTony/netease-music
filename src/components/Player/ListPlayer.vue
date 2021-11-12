<template>
    <div v-show="isShow" class="list-player">
        <div class="player-wrapper">
            <list-player-top/>
            <list-player-middle/>
            <div class="player-bottom">
                <p @click.stop="hideListPlayer">关闭</p>
            </div>
        </div>
    </div>
</template>

<script>
import ListPlayerTop from './ListPlayerTop.vue'
import ListPlayerMiddle from './ListPlayerMiddle.vue'

export default {
  name: 'ListPlayer',
  components: {
    ListPlayerTop,
    ListPlayerMiddle
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showListPlayer () {
      this.isShow = true
    },
    hideListPlayer () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.list-player {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1999;
    width: 100%;
    @include bg_sub_color();

    .player-wrapper {
        width: 100%;

        .player-bottom {
            width: 100%;
            height: 100px;
            @include bg_color();

            p {
                text-align: center;
                line-height: 100px;
                @include font_size($font_medium);
                color: #fff;
            }
        }
    }
}
</style>
