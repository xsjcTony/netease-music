<template>
    <div class="header" @click="switchTheme">
        <div class="header-left"></div>
        <p class="header-title">Music App</p>
        <div class="header-right" @click.stop="account"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { setLocalStorage, getLocalStorage } from '../utils'

export default {
  name: 'HomeHeader',

  computed: {
    ...mapGetters([
      'theme'
    ])
  },

  watch: {
    theme (newValue) {
      document.documentElement.dataset.theme = newValue
      setLocalStorage('theme', newValue)
    }
  },

  created () {
    const theme = getLocalStorage('theme') ?? 'netease'
    document.documentElement.dataset.theme = theme
    this.changeTheme(theme)
  },

  methods: {
    ...mapActions([
      'changeTheme'
    ]),

    switchTheme () {
      this.changeTheme()
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
