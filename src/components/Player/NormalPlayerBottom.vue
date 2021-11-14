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
            <div ref="playMode" class="mode list-loop" @click="changePlayMode"></div>
            <div class="previous"></div>
            <div ref="playButton" class="play" @click.stop="play"></div>
            <div class="next"></div>
            <div class="favourite"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modeType from '../../store/playModeType'

export default {
  name: 'NormalPlayerBottom',
  computed: {
    ...mapGetters([
      'isMusicPlaying',
      'playModeType'
    ])
  },
  watch: {
    isMusicPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.playButton.classList.add('active')
      } else {
        this.$refs.playButton.classList.remove('active')
      }
    },
    playModeType (newValue, oldValue) {
      switch (newValue) {
        case modeType.listLoop:
          this.$refs.playMode.classList.remove('random')
          this.$refs.playMode.classList.add('list-loop')
          break
        case modeType.singleLoop:
          this.$refs.playMode.classList.remove('list-loop')
          this.$refs.playMode.classList.add('single-loop')
          break
        case modeType.random:
          this.$refs.playMode.classList.remove('single-loop')
          this.$refs.playMode.classList.add('random')
          break
        default:
          break
      }
    }
  },
  methods: {
    ...mapActions([
      'setMusicPlaying',
      'setPlayModeType'
    ]),
    play () {
      this.setMusicPlaying(!this.isMusicPlaying)
    },
    changePlayMode () {
      switch (this.playModeType) {
        case modeType.listLoop:
          this.setPlayModeType(modeType.singleLoop)
          break
        case modeType.singleLoop:
          this.setPlayModeType(modeType.random)
          break
        case modeType.random:
          this.setPlayModeType(modeType.listLoop)
          break
        default:
          break
      }
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
            &.list-loop {
                @include bg_img('../../assets/images/loop');
            }

            &.single-loop {
                @include bg_img('../../assets/images/one');
            }

            &.random {
                @include bg_img('../../assets/images/shuffle')
            }
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
