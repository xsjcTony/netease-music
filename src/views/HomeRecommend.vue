<template>
    <div class="recommend">
        <home-recommend-banner :banners="banners"/>
        <home-recommend-personalized :personalized="playlists"
                                     title="推荐歌单"
                                     type="playlist"
                                     @select-item="selectItem"
        />
        <home-recommend-personalized :personalized="albums"
                                     title="最新专辑"
                                     type="album"
                                     @select-item="selectItem"
        />
        <home-recommend-song-list :songs="newSongs"/>
    </div>
</template>

<script>
import { HomeAPI } from '../api/index'
import HomeRecommendBanner from '../components/Recommend/HomeRecommendBanner.vue'
import HomeRecommendPersonalized from '../components/Recommend/HomeRecommendPersonalized.vue'
import HomeRecommendSongList from '../components/Recommend/HomeRecommendSongList.vue'

export default {
  name: 'HomeRecommend',
  components: {
    HomeRecommendBanner,
    HomeRecommendPersonalized,
    HomeRecommendSongList
  },
  data () {
    return {
      banners: [],
      playlists: [],
      albums: [],
      newSongs: []
    }
  },
  created () {
    HomeAPI.getBanner()
      .then((data) => { this.banners = data.banners })
      .catch((err) => { console.error(err) })
    HomeAPI.getPlaylist(6)
      .then((data) => { this.playlists = data.result })
      .catch((err) => { console.error(err) })
    HomeAPI.getNewAlbum()
      .then((data) => {
        this.albums = data.albums.slice(0, 6)
      })
      .catch((err) => { console.error(err) })
    HomeAPI.getNewSong()
      .then((data) => { this.newSongs = data.result })
      .catch((err) => { console.error(err) })
  },
  methods: {
    selectItem (id, type) {
      this.$router.push(`/listDetail/${ type }/${ id }`)
    }
  }
}
</script>

<style scoped>
.recommend {
    margin-top: 184px;
}
</style>
