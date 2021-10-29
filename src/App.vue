<template>
    <div id="app">
        <home-header/>
        <home-tab/>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeTab from './components/HomeTab.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeTab
  }
}
</script>
