<template>
    <div class="recommend">
        <home-banner :banners="banners"/>
    </div>
</template>

<script>
import { getBanner } from '../api/index'
import HomeBanner from '../components/HomeBanner.vue'

export default {
  name: 'HomeRecommend',
  components: {
    HomeBanner
  },
  data () {
    return {
      banners: []
    }
  },
  created () {
    getBanner()
      .then((data) => { this.banners = data.banners })
      .catch((err) => { console.error(err) })
  }
}
</script>

<style scoped>

</style>
