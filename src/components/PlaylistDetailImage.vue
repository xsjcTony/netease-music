<template>
    <div class="image">
        <img ref="image" :src="imgUrl" alt>
    </div>
</template>

<script>
export default {
  name: 'PlaylistDetailImage',
  props: {
    imgUrl: {
      type: String,
      'default': '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.image {
    width: 100%;

    img {
        width: 100%;
    }
}
</style>
