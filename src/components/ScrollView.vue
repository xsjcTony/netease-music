<template>
    <div id="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BetterScroll from '@better-scroll/core'

export default {
  name: 'ScrollView',
  mounted () {
    this.betterScroll = new BetterScroll(this.$refs.wrapper, {
      probeType: 3,
      disableMouse: false,
      disableTouch: false,
      scrollX: true,
      scrollY: false
    })
    // MutationObserver for refresh BetterScroll
    const observer = new MutationObserver((mutationList, observer) => {
      this.betterScroll.refresh()
    })
    const config = {
      childList: true,
      subtree: true,
      attributeFilter: ['height', 'offsetHeight']
    }
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style scoped>

</style>
