<template>
    <div id="app">
        <app-header/>
        <app-tab/>
        <router-view/>
        <music-player/>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppTab from './components/AppTab.vue'
import MusicPlayer from './views/MusicPlayer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTab,
    MusicPlayer
  }
}
</script>
