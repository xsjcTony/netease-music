<template>
    <div class="player-top">
        <div class="top-mode-icon"></div>
        <p class="top-mode">顺序播放</p>
        <div class="top-delete"></div>
    </div>
</template>

<script>
export default {
  name: 'ListPlayerTop'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.player-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding-left: 20px;
    box-sizing: border-box;

    .top-mode-icon {
        width: 56px;
        height: 56px;
        @include bg_img('../../assets/images/small_loop');
        margin-right: 20px;
    }

    .top-mode {
        @include font_color();
        @include font_size($font_medium_s);
        flex: 1 1 auto;
    }

    .top-delete {
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/small_del');
    }
}
</style>
