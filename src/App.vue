<template>
    <div id="app">
        <HomeHeader/>
        <AppTab/>
        <router-view/>
        <MusicPlayer/>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import AppTab from './components/AppTab.vue'
import MusicPlayer from './views/MusicPlayer.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
    AppTab,
    MusicPlayer
  }
}
</script>
