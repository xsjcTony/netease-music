<template>
    <div class="player-bottom">
        <div class="bottom-progress">
            <span>00:00</span>
            <div class="progress-bar">
                <div class="progress-line">
                    <div class="progress-dot"></div>
                </div>
            </div>
            <span>00:00</span>
        </div>
        <div class="bottom-control">
            <div class="mode"></div>
            <div class="previous"></div>
            <div ref="playButton" class="play" @click.stop="play"></div>
            <div class="next"></div>
            <div class="favourite"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NormalPlayerBottom',
  computed: {
    ...mapGetters([
      'isMusicPlaying'
    ])
  },
  watch: {
    isMusicPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.playButton.classList.add('active')
      } else {
        this.$refs.playButton.classList.remove('active')
      }
    }
  },
  methods: {
    ...mapActions([
      'setMusicPlaying'
    ]),
    play () {
      this.setMusicPlaying(!this.isMusicPlaying)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.player-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .bottom-progress {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;

        span {
            @include font_size($font_small);
            @include font_color();
        }

        .progress-bar {
            width: 100%;
            height: 10px;
            margin: 0 20px;
            background: #fff;

            .progress-line {
                position: relative;
                width: 50%;
                height: 100%;
                background: #ccc;

                .progress-dot {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    transform: translate(50%, -50%);
                }
            }
        }
    }

    .bottom-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding: 50px 0;

        div {
            width: 84px;
            height: 84px;
        }

        .mode {
            @include bg_img('../../assets/images/loop');
        }

        .previous {
            @include bg_img('../../assets/images/prev');
        }

        .play {
            @include bg_img('../../assets/images/play');

            &.active {
                @include bg_img('../../assets/images/pause');
            }
        }

        .next {
            @include bg_img('../../assets/images/next');
        }

        .favourite {
            @include bg_img('../../assets/images/un_favorite');
        }
    }
}
</style>
