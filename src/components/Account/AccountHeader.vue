<template>
    <div class="account-header" @click="switchTheme">
        <div class="header-left" @click.stop="$router.back()"></div>
        <ul class="header-tab">
            <li :class="{ active: activeTab === 'favourite' }"
                @click.stop="switchTab('favourite')"
            >
                我喜欢的
            </li>
            <li :class="{ active: activeTab === 'history' }"
                @click.stop="switchTab('history')"
            >
                最近听的
            </li>
        </ul>
        <div class="header-right"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { setLocalStorage, getLocalStorage } from '../../utils'

export default {
  name: 'AccountHeader',

  data () {
    return {
      activeTab: 'favourite'
    }
  },

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

    switchTab (tab) {
      this.activeTab = tab
      this.$emit('switch-tab', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.account-header {
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
        @include bg_img('./../../assets/images/back')
    }

    .header-right {
        @include bg_img('./../../assets/images/more')
    }

    .header-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 1px solid #fff;
        border-radius: 10px;
        box-sizing: border-box;
        color: #fff;
        @include font_size($font_medium);

        li {
            padding: 10px 20px;

            &:first-of-type {
                border-right: 1px solid #fff;
                box-sizing: border-box;
            }

            &.active {
                background: rgba(255, 255, 255, .3);
            }
        }
    }
}
</style>
