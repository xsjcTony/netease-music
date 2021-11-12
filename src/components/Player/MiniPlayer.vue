<template>
    <div class="mini-player">
        <div class="player-wrapper">
            <div class="player-left">
                <img alt src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg">
                <div class="player-title">
                    <h3>演员</h3>
                    <p>薛之谦</p>
                </div>
            </div>
            <div class="player-right">
                <div class="play"></div>
                <div class="list"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MiniPlayer'
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
