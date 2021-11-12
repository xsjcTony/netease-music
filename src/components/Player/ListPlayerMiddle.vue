<template>
    <div class="player-middle">
        <scroll-view>
            <ul>
                <li class="item">
                    <div class="item-play"></div>
                    <p class="item-title">演员</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete"></div>
                </li>
                <li class="item">
                    <div class="item-play"></div>
                    <p class="item-title">演员</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete"></div>
                </li>
                <li class="item">
                    <div class="item-play"></div>
                    <p class="item-title">演员</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete"></div>
                </li>
                <li class="item">
                    <div class="item-play"></div>
                    <p class="item-title">演员</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete"></div>
                </li>
                <li class="item">
                    <div class="item-play"></div>
                    <p class="item-title">演员</p>
                    <div class="item-favourite"></div>
                    <div class="item-delete"></div>
                </li>
            </ul>
        </scroll-view>
    </div>
</template>

<script>
import ScrollView from '../ScrollView.vue'

export default {
  name: 'ListPlayerMiddle',
  components: {
    ScrollView
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.player-middle {
    width: 100%;

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
