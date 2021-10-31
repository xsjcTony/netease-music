<template>
    <div id="app">
        <app-header/>
        <app-tab/>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppTab from './components/AppTab.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTab
  }
}
</script>
