<template>
    <div class="playlist-detail">
        <playlist-header :title="playlist.name"/>
        <playlist-image ref="playlistImage" :img-url="playlist.coverImgUrl"/>
        <div class="playlist-detail-list">
            <scroll-view ref="scrollView">
                <playlist-tracks :tracks="playlist.tracks"/>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import PlaylistDetailHeader from '../components/PlaylistDetailHeader.vue'
import PlaylistDetailImage from '../components/PlaylistDetailImage.vue'
import PlaylistDetailTracks from '../components/PlaylistDetailTracks.vue'
import ScrollView from '../components/ScrollView.vue'
import { HomeAPI } from '../api/index'

export default {
  name: 'PlaylistDetail',
  components: {
    ScrollView,
    playlistHeader: PlaylistDetailHeader,
    playlistImage: PlaylistDetailImage,
    playlistTracks: PlaylistDetailTracks
  },
  data () {
    return {
      playlist: {}
    }
  },
  created () {
    HomeAPI.getPlaylistDetail(this.$route.params.id)
      .then((data) => { this.playlist = data.playlist })
      .catch((err) => { console.error(err) })
  },
  mounted () {
    const imageContainer = this.$refs.playlistImage.$el
    let imageHeight = 0
    this.$refs.playlistImage.$refs.image.onload = function () {
      imageHeight = this.offsetHeight
    }

    this.$refs.scrollView.scrolling((y) => {
      if (y < 0) {
        const filter = Math.abs(y) / imageHeight * 10
        imageContainer.style.filter = `blur(${ filter }px)`
      } else {
        const scale = y / imageHeight + 1
        imageContainer.style.transform = `scale(${ scale })`
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/css/mixin';

.playlist-detail {
    position: fixed;
    z-index: 1999;
    inset: 0;
    @include bg_sub_color();

    .playlist-detail-list {
        position: fixed;
        inset: 500px 0 0 0;
    }
}
</style>
