<template>
    <div class="tab">
        <router-link v-slot="{ navigate, isActive }"
                     to="/recommend"
                     custom
                     class="item"
        >
            <span role="link" :class="[isActive && 'router-link-active']" @click="navigate">推荐</span>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/singer"
                     custom
                     class="item"
        >
            <span role="link" :class="[isActive && 'router-link-active']" @click="navigate">歌手</span>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/rank"
                     custom
                     class="item"
        >
            <span role="link" :class="[isActive && 'router-link-active']" @click="navigate">排行</span>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/search"
                     custom
                     class="item"
        >
            <span role="link" :class="[isActive && 'router-link-active']" @click="navigate">搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeTab'
}
</script>

<style scoped lang="scss">
@import './../assets/css/mixin';

.tab {
    width: 100%;
    height: 84px;
    @include bg_sub_color();
    display: flex;
    justify-content: space-around;

    .item {
        height: 100%;
        box-sizing: border-box;
        line-height: 84px;
        @include font_size($font_medium_s);
        @include font_color();

        &.router-link-active {
            @include font_active_color();
            border-bottom: 4px solid;
            @include border_color();
        }
    }
}
</style>
