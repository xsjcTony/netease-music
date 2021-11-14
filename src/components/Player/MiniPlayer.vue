<template>
    <transition :css="false" @enter="enter" @leave="leave">
        <div v-show="isMiniPlayerShow" class="mini-player">
            <div class="player-wrapper">
                <div class="player-left" @click="showNormalPlayer">
                    <img alt src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg">
                    <div class="player-title">
                        <h3>演员</h3>
                        <p>薛之谦</p>
                    </div>
                </div>
                <div class="player-right">
                    <div class="play"></div>
                    <div class="list" @click.stop="showListPlayer"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'MiniPlayer',
  computed: {
    ...mapGetters([
      'isMiniPlayerShow'
    ])
  },
  methods: {
    showListPlayer () {
      this.$emit('show-list-player')
    },
    ...mapActions([
      'setNormalPlayerShow',
      'setMiniPlayerShow'
    ]),
    showNormalPlayer () {
      this.setNormalPlayerShow(true)
      this.setMiniPlayerShow(false)
    },
    enter (el, done) {
      // eslint-disable-next-line new-cap
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, () => {
        done()
      })
    },
    leave (el, done) {
      // eslint-disable-next-line new-cap
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, () => {
        done()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1999;
    width: 100%;
    height: 150px;

    .player-wrapper {
        display: flex;
        justify-content: space-between;
        @include bg_color();
        width: 100%;
        height: 100%;

        .player-left {
            display: flex;
            align-items: center;
            padding-left: 30px;
            min-width: 0;

            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            .player-title {
                min-width: 0;
                padding: 0 20px;
                @include font_color();

                h3 {
                    @include font_size($font_medium);
                    @include no_wrap();
                }

                p {
                    @include font_size($font_medium_s);
                    @include no_wrap();
                }
            }
        }

        .player-right {
            display: flex;
            align-items: center;

            .play {
                width: 84px;
                height: 84px;
                @include bg_img('../../assets/images/play');
            }

            .list {
                width: 120px;
                height: 120px;
                @include bg_img('../../assets/images/list');
            }
        }
    }
}
</style>
