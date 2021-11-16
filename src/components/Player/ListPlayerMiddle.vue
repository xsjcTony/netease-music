<template>
    <div class="player-middle">
        <scroll-view ref="scrollView">
            <ul>
                <li v-for="(song, index) in songs" :key="song.id" class="item">
                    <div ref="playButton" class="item-play" @click="play"></div>
                    <p class="item-title">{{ song.name }}</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete" @click="deleteSong(index)"></div>
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
      'isListPlayerShow'
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
    isListPlayerShow (newValue, oldValue) {
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
      'deleteSongs'
    ]),
    play () {
      this.setMusicPlaying(!this.isMusicPlaying)
    },
    deleteSong (index) {
      this.deleteSongs(index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.player-middle {
    width: 100%;
    height: 700px;
    overflow: hidden;

    .item {
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 0 20px;
        box-sizing: border-box;

        div {
            width: 56px;
            height: 56px;
            flex: 0 1 auto;
        }

        .item-play {
            @include bg_img('../../assets/images/small_play');
            margin-right: 20px;

            &.active {
                @include bg_img('../../assets/images/small_pause');
            }
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
}
</style>
