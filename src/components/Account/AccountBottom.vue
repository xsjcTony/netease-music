<template>
    <div class="account-bottom">
        <div class="bottom-play">
            <i></i>
            <span>播放全部</span>
        </div>
        <div class="bottom-list-wrapper">
            <ScrollView ref="scrollView">
                <SongListItem :songs="activeTab === 'favourite' ? favouriteSongs : playHistory"/>
            </ScrollView>
        </div>
    </div>
</template>

<script>
import ScrollView from '../ScrollView.vue'
import SongListItem from '../SongListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AccountBottom',

  components: {
    ScrollView,
    SongListItem
  },

  props: {
    activeTab: {
      type: String,
      'default': 'favourite',
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'favouriteSongs',
      'playHistory'
    ])
  },

  watch: {
    activeTab () {
      this.$refs.scrollView.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

.account-bottom {
    position: fixed;
    inset: 100px 0 0;

    .bottom-play {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        height: 60px;
        margin: 20px auto;
        padding: 0 30px;
        border: 1px solid;
        border-radius: 30px;
        box-sizing: border-box;
        @include border_color();

        i {
            display: inline-block;
            width: 46px;
            height: 46px;
            @include bg_img('../../assets/images/small_play');
        }

        span {
            @include font_color();
        }
    }

    .bottom-list-wrapper {
        position: fixed;
        inset: 200px 0 150px;
        overflow: hidden;
        @include bg_sub_color();
    }
}
</style>
