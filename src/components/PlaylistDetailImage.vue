<template>
    <div class="image">
        <div class="img-container">
            <img :src="imgUrl" alt>
        </div>
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

    .img-container {
        img {
            width: 100%;
        }
    }
}
</style>
