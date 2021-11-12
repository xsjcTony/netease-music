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
      disableMouse: true,
      disableTouch: false,
      scrollX: false,
      scrollY: true,
      click: true
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
  },
  methods: {
    scrolling (fn) {
      this.betterScroll.on('scroll', ({ y }) => {
        fn(y)
      })
    }
  }
}
</script>

<style scoped>
#wrapper {
    width: 100%;
    height: 100%;
}
</style>
