<template>
    <div class="header" @click="changeTheme">
        <div class="header-left"></div>
        <p class="header-title">Aelita's Music App</p>
        <div class="header-right" @click.stop="account"></div>
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
    },

    account () {
      this.$router.push('/account')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    @include bg_color();
    z-index: 999;
    width: 100%;
    height: 100px;

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
        color: #fff;
        font-weight: 700;
        text-align: center;
        @include font_size($font_medium);
    }
}
</style>
