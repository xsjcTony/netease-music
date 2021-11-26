<template>
    <div class="artists">
        <div class="list-wrapper">
            <dl v-for="(group, index) in artists"
                :key="index"
                class="list-group"
            >
                <dt class="group-title">{{ keys[index] }}</dt>
                <dd v-for="artist in artists[index]"
                    :key="artist.id"
                    class="group-item"
                >
                    <img v-lazy="artist.img1v1Url" :alt="artist.name">
                    <p>{{ artist.name }}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import { ArtistsAPI } from '../api'

export default {
  name: 'HomeArtists',

  data () {
    return {
      keys: [],
      artists: []
    }
  },

  created () {
    ArtistsAPI.getAllArtists()
      .then((res) => {
        this.keys = res.keys
        this.artists = res.artists
      })
      .catch((err) => { console.error(err) })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.artists {
    width: 100%;
    margin-top: 184px;
    @include bg_sub_color();

    .list-wrapper {
        width: 100%;

        .list-group {
            width: 100%;

            .group-title {
                position: sticky;
                @include bg_color();
                @include font_size($font_medium);
                top: 183px;
                left: 0;
                width: 100%;
                padding: 10px 20px;
                box-sizing: border-box;
                color: #fff;
            }

            .group-item {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 10px 20px;
                border-bottom: 1px solid #ccc;
                box-sizing: border-box;

                &:last-of-type {
                    border-bottom: none;
                }

                img {
                    overflow: hidden;
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                    border-radius: 50%;
                }

                p {
                    @include font_size($font_medium);
                    @include font_color();
                    @include no_wrap();
                }
            }
        }
    }
}
</style>
