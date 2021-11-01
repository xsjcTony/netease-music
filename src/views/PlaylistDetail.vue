<template>
    <div class="playlist-detail">
        <playlist-header :title="playlist.name"/>
        <playlist-image :img-url="playlist.coverImgUrl"/>
        <playlist-tracks :tracks="playlist.tracks"/>
    </div>
</template>

<script>
import PlaylistDetailHeader from '../components/PlaylistDetailHeader.vue'
import PlaylistDetailImage from '../components/PlaylistDetailImage.vue'
import PlaylistDetailTracks from '../components/PlaylistDetailTracks.vue'
import { HomeAPI } from '../api/index'

export default {
  name: 'PlaylistDetail',
  components: {
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
  }
}
</script>

<style scoped lang="scss">
.playlist-detail {
    position: fixed;
    inset: 0;
    z-index: 1999;
    background: #fff;
}
</style>
