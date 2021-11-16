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
                    <li v-for="(lyric, index) in currentSongLyric" :key="index">{{ lyric }}</li>
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
      }
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
      for (const key in this.currentSongLyric) {
        return this.currentSongLyric[key]
      }
    }
  },
  watch: {
    isMusicPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.discWrapper.classList.add('active')
      } else {
        this.$refs.discWrapper.classList.remove('active')
      }
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
            margin: 0 auto;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            border: 30px solid #fff;
            overflow: hidden;
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
            text-align: center;
            @include font_size($font_medium);
            @include font_color();
            margin-top: 50px;
        }
    }

    .lyric {
        height: 90%;
        overflow: hidden;

        ul {
            li {
                text-align: center;
                @include font_size($font_medium);
                @include font_color();
                margin: 10px 0;
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
            border-radius: 10px;
            background: #fff;
            margin: 0 20px;
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
