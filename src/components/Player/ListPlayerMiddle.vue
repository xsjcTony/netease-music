<template>
    <div class="player-middle">
        <scroll-view ref="scrollView">
            <ul ref="play">
                <li v-for="(song, index) in songs" :key="song.id" class="item">
                    <div v-show="index === currentSongIndex" class="item-play" @click.stop="play"></div>
                    <p class="item-title" @click.stop="selectMusic(index)">{{ song.name }}</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete" @click.stop="deleteSong(index)"></div>
                </li>
            </ul>
        </scroll-view>
    </div>
</template>

<script>
import ScrollView from '../ScrollView.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListPlayerMiddle',
  components: {
    ScrollView
  },

  computed: {
    ...mapGetters([
      'isMusicPlaying',
      'songs',
      'isListPlayerShow',
      'currentSongIndex'
    ])
  },

  watch: {
    isMusicPlaying (newValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },

    isListPlayerShow (newValue) {
      if (newValue) {
        this.$refs.scrollView.refresh()
      }
    }
  },

  methods: {
    ...mapActions([
      'setNormalPlayerShow',
      'setMiniPlayerShow',
      'setMusicPlaying',
      'deleteSongs',
      'setSongIndex'
    ]),

    play () {
      this.setMusicPlaying(!this.isMusicPlaying)
    },

    deleteSong (index) {
      this.deleteSongs(index)
    },

    selectMusic (index) {
      this.setSongIndex(index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.player-middle {
    overflow: hidden;
    width: 100%;
    height: 700px;

    ul {
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            padding: 0 20px;
            border-top: 1px solid #ccc;
            box-sizing: border-box;

            div {
                flex: 0 1 auto;
                width: 56px;
                height: 56px;
            }

            .item-play {
                @include bg_img('../../assets/images/small_play');
                margin-right: 20px;
            }

            .item-title {
                @include font_size($font_medium_s);
                @include font_color();
                flex: 1 1 0;
                margin-right: 20px;
                @include no_wrap();
            }

            .item-favourite {
                @include bg_img('../../assets/images/small_un_favorite');
                margin-right: 20px;
            }

            .item-delete {
                width: 52px;
                height: 52px;
                @include bg_img('../../assets/images/small_close');
            }
        }

        &.active {
            .item {
                .item-play {
                    @include bg_img('../../assets/images/small_pause');
                }
            }
        }
    }
}
</style>
