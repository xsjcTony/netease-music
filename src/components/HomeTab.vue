<template>
    <div class="tab">
        <router-link v-slot="{ navigate, isActive }"
                     to="/recommend"
                     custom
                     class="item"
        >
            <p role="link" :class="[isActive && 'router-link-active']" @click="navigate">
                <span>推荐</span>
            </p>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/singer"
                     custom
                     class="item"
        >
            <p role="link" :class="[isActive && 'router-link-active']" @click="navigate">
                <span>歌手</span>
            </p>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/rank"
                     custom
                     class="item"
        >
            <p role="link" :class="[isActive && 'router-link-active']" @click="navigate">
                <span>排行</span>
            </p>
        </router-link>
        <router-link v-slot="{ navigate, isActive }"
                     to="/search"
                     custom
                     class="item"
        >
            <p role="link" :class="[isActive && 'router-link-active']" @click="navigate">
                <span>搜索</span>
            </p>
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
        text-align: center;
        width: 100%;

        span {
            display: inline-block;
            height: 100%;
            box-sizing: border-box;
            line-height: 84px;
            @include font_size($font_medium_s);
            @include font_color();
        }

        &.router-link-active {
            span {
                @include font_active_color();
                border-bottom: 4px solid;
                @include border_color();
            }
        }
    }
}
</style>
