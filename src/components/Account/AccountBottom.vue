<template>
    <div class="account-bottom">
        <div class="bottom-play" @click="playAllMusic">
            <i></i>
            <span>播放全部</span>
        </div>
        <div class="bottom-list-wrapper">
            <ScrollView ref="scrollView">
                <SongListItem :songs="songs"/>
            </ScrollView>
        </div>
    </div>
</template>

<script>
import ScrollView from '../ScrollView.vue'
import SongListItem from '../SongListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AccountBottom',

  components: {
    ScrollView,
    SongListItem
  },

  props: {
    activeTab: {
      type: String,
      'default': '',
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'favouriteSongs',
      'playHistory'
    ]),

    songs () {
      if (this.activeTab === 'favourite') {
        return this.favouriteSongs
      } else if (this.activeTab === 'history') {
        return this.playHistory
      } else {
        return []
      }
    }
  },

  watch: {
    activeTab () {
      this.$refs.scrollView.scrollTo(0, 0, 0)
    }
  },

  methods: {
    ...mapActions([
      'setNormalPlayerShow',
      'setSongs'
    ]),

    playAllMusic () {
      this.setNormalPlayerShow(true)

      // store songs into Vuex
      this.setSongs(this.songs.map(song => song.id))
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
