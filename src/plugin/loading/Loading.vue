<template>
    <div v-show="isShow" class="container">
        <div class="wrapper">
            <div class="loading"></div>
            <p class="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Loading',
  data () {
    return {
      title: '正在加载...',
      isShow: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/mixin';

.container {
    width: 350px;
    height: 350px;
    border-radius: 40px;
    background: rgba(0,0,0,.5);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper {
        .loading {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 10px solid #fff;
            margin-bottom: 30px;
            border-right-color: #409eff;
            animation: loading 1s linear infinite;
        }

        .title {
            @include font_size($font_large);
            text-align: center;
            color: #fff;
        }
    }
}

@keyframes loading {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
