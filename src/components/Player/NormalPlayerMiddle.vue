<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="middle">
        <swiper-slide class="disc">
            <div ref="discWrapper" class="disc-wrapper">
                <img :src="currentSong.picUrl" alt>
            </div>
            <p>{{ getFirstLyric }}</p>
        </swiper-slide>
        <swiper-slide class="lyric">
            <scroll-view>
                <ul>
                    <li v-for="(lyric, key) in currentSongLyric" :key="key">{{ key }} - {{ lyric }}</li>
                </ul>
            </scroll-view>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ScrollView from './../ScrollView.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'NormalPlayerMiddle',
  components: {
    Swiper,
    SwiperSlide,
    ScrollView
  },

  props: {
    currentTime: {
      type: Number,
      'default': 0,
      required: true
    }
  },

  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'player-bullet',
          bulletActiveClass: 'player-bullet-active'
        },

        observer: true,
        observeParents: true,
        observeSlideChildren: true
      },

      formattedCurrentTime: 0
    }
  },

  computed: {
    ...mapGetters([
      'isMusicPlaying',
      'currentSong',
      'currentSongLyric'
    ]),

    swiper () {
      return this.$refs.mySwiper.$swiper
    },

    // eslint-disable-next-line vue/return-in-computed-property
    getFirstLyric () {
      const firstKey = Object.keys(this.currentSongLyric)[0]
      return firstKey ? this.currentSongLyric[firstKey] : ''
    }
  },

  watch: {
    isMusicPlaying (newValue) {
      if (newValue) {
        this.$refs.discWrapper.classList.add('active')
      } else {
        this.$refs.discWrapper.classList.remove('active')
      }
    },

    currentTime (newValue) {
      console.log(newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.middle {
    position: fixed;
    inset: 150px 0 250px;

    .disc {
        .disc-wrapper {
            overflow: hidden;
            width: 500px;
            height: 500px;
            margin: 0 auto;
            border: 30px solid #fff;
            border-radius: 50%;
            animation: spin 5s linear infinite;
            animation-play-state: paused;

            &.active {
                animation-play-state: running;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        p {
            width: 80%;
            @include font_size($font_medium);
            @include font_color();
            margin: 50px auto 0;
            text-align: center;
        }
    }

    .lyric {
        overflow: hidden;
        height: 90%;

        ul {
            width: 80%;
            margin: 0 auto;

            li {
                margin: 10px 0;
                @include font_size($font_medium);
                @include font_color();
                text-align: center;

                &.current {
                    color: #fff !important;
                }
            }
        }

        &>#wrapper {
            position: relative;
            bottom: 10px;
        }
    }
}

@keyframes spin {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

<style lang="scss">
@import '../../assets/css/mixin';

.middle {
    .swiper-pagination {
        .player-bullet {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 20px;
            border-radius: 10px;
            background: #fff;
            opacity: 1;
            transition: all 0.1s linear;

            &.player-bullet-active {
                width: 60px;
                @include bg_color();
            }
        }
    }
}
</style>
