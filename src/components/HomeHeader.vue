<template>
    <div class="header"
         @click="changeTheme"
    >
        <div class="header-left"></div>
        <p class="header-title">Aelita's Music App</p>
        <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      themes: ['netease', 'qq', 'it666'],
      themeIndex: 0
    }
  },
  methods: {
    changeTheme () {
      this.themeIndex = ++this.themeIndex > 2 ? 0 : this.themeIndex
      document.documentElement.dataset.theme = this.themes[this.themeIndex]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/mixin';

.header {
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left,
    .header-right {
        width: 84px;
        height: 84px;
    }

    .header-left {
        @include bg_img('./../assets/images/logo')
    }

    .header-right {
        @include bg_img('./../assets/images/account')
    }

    .header-title {
        text-align: center;
        color: #fff;
        font-weight: 700;
        @include font_size($font_medium);
    }
}
</style>
