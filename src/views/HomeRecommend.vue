<template>
    <div class="recommend">
        <home-banner :banners="banners"/>
        <home-personalized :personalized="playlists" :title="'推荐歌单'"/>
        <home-personalized :personalized="albums" :title="'最新专辑'"/>
        <home-song-list :songs="newSongs"/>
    </div>
</template>

<script>
import { HomeAPI } from '../api/index'
import HomeBanner from '../components/HomeBanner.vue'
import HomePersonalized from '../components/HomePersonalized.vue'
import HomeSongList from '../components/HomeSongList.vue'

export default {
  name: 'HomeRecommend',
  components: {
    HomeBanner,
    HomePersonalized,
    HomeSongList
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
  }
}
</script>

<style scoped>

</style>
