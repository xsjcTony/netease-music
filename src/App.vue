<template>
    <div id="app">
        <AppHeader/>
        <AppTab/>
        <router-view/>
        <MusicPlayer/>
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
