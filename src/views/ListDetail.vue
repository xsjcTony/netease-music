<template>
    <div class="list-detail">
        <playlist-header :title="list.name"/>
        <playlist-image ref="listImage" :img-url="list.coverImgUrl"/>
        <div class="list-detail-list">
            <scroll-view ref="scrollView">
                <playlist-tracks :tracks="list.tracks"/>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import ListDetailHeader from '../components/ListDetailHeader.vue'
import ListDetailImage from '../components/ListDetailImage.vue'
import ListDetailTracks from '../components/ListDetailTracks.vue'
import ScrollView from '../components/ScrollView.vue'
import { HomeAPI } from '../api/index'

export default {
  name: 'ListDetail',
  components: {
    ScrollView,
    playlistHeader: ListDetailHeader,
    playlistImage: ListDetailImage,
    playlistTracks: ListDetailTracks
  },
  data () {
    return {
      list: {}
    }
  },
  created () {
    if (this.$route.params.type === 'playlist') {
      HomeAPI.getPlaylistDetail(this.$route.params.id)
        .then((data) => { this.list = data.playlist })
        .catch((err) => { console.error(err) })
    } else if (this.$route.params.type === 'album') {
      HomeAPI.getAlbumDetail(this.$route.params.id)
        .then((data) => {
          this.list = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        })
        .catch((err) => { console.error(err) })
    }
  },
  mounted () {
    const listImageComponent = this.$refs.listImage
    let imageHeight = 0
    listImageComponent.$refs.image.onload = function () {
      imageHeight = this.offsetHeight
    }

    this.$refs.scrollView.scrolling((y) => {
      if (y < 0) {
        const opacity = Math.abs(y) / imageHeight
        listImageComponent.changeMaskOpacity(opacity)
        listImageComponent.changeImageTransform(1)
      } else {
        const scale = y / imageHeight + 1
        listImageComponent.changeImageTransform(scale)
        listImageComponent.changeMaskOpacity(0)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/css/mixin';

.list-detail {
    position: fixed;
    z-index: 1999;
    inset: 0;
    @include bg_sub_color();

    .list-detail-list {
        position: fixed;
        inset: 650px 0 0 0;
    }
}
</style>
