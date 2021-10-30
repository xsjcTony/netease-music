<template>
    <div class="recommend">
        <home-banner :banners="banners"/>
        <home-personalized :personalized="personalized" :title="'推荐歌单'"/>
        <home-personalized :personalized="albums" :title="'最新专辑'"/>
    </div>
</template>

<script>
import { HomeAPI } from '../api/index'
import HomeBanner from '../components/HomeBanner.vue'
import HomePersonalized from '../components/HomePersonalized.vue'

export default {
  name: 'HomeRecommend',
  components: {
    HomeBanner,
    HomePersonalized
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: []
    }
  },
  created () {
    HomeAPI.getBanner()
      .then((data) => { this.banners = data.banners })
      .catch((err) => { console.error(err) })
    HomeAPI.getPersonalized(6)
      .then((data) => { this.personalized = data.result })
      .catch((err) => { console.error(err) })
    HomeAPI.getNewAlbum()
      .then((data) => {
        this.albums = data.albums.slice(0, 6)
      })
      .catch((err) => { console.error(err) })
  }
}
</script>

<style scoped>

</style>
