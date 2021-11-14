<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="middle">
        <swiper-slide class="disc">
            <div class="disc-wrapper">
                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg" alt>
            </div>
            <p>书得福卡很骄傲的缴费可拉倒尽快发货</p>
        </swiper-slide>
        <swiper-slide class="lyric">
            <scroll-view>
                <ul>
                    <li>我是第1个li</li>
                    <li>我是第2个li</li>
                    <li>我是第3个li</li>
                    <li>我是第4个li</li>
                    <li>我是第5个li</li>
                    <li>我是第6个li</li>
                    <li>我是第7个li</li>
                    <li>我是第8个li</li>
                    <li>我是第9个li</li>
                    <li>我是第10个li</li>
                    <li>我是第11个li</li>
                    <li>我是第12个li</li>
                    <li>我是第13个li</li>
                    <li>我是第14个li</li>
                    <li>我是第15个li</li>
                    <li>我是第16个li</li>
                    <li>我是第17个li</li>
                    <li>我是第18个li</li>
                    <li>我是第19个li</li>
                    <li>我是第20个li</li>
                    <li>我是第21个li</li>
                    <li>我是第22个li</li>
                    <li>我是第23个li</li>
                    <li>我是第24个li</li>
                    <li>我是第25个li</li>
                    <li>我是第26个li</li>
                    <li>我是第27个li</li>
                    <li>我是第28个li</li>
                    <li>我是第29个li</li>
                    <li>我是第30个li</li>
                    <li>我是第31个li</li>
                    <li>我是第32个li</li>
                    <li>我是第33个li</li>
                    <li>我是第34个li</li>
                    <li>我是第35个li</li>
                    <li>我是第36个li</li>
                    <li>我是第37个li</li>
                    <li>我是第38个li</li>
                    <li>我是第39个li</li>
                    <li>我是第40个li</li>
                    <li>我是第41个li</li>
                    <li>我是第42个li</li>
                    <li>我是第43个li</li>
                    <li>我是第44个li</li>
                    <li>我是第45个li</li>
                    <li>我是第46个li</li>
                    <li>我是第47个li</li>
                    <li>我是第48个li</li>
                    <li>我是第49个li</li>
                    <li>我是第50个li</li>
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
    swiper () {
      return this.$refs.mySwiper.$swiper
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
