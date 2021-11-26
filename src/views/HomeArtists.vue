<template>
    <div class="artists">
        <div ref="listWrapper" class="list-wrapper">
            <dl v-for="(group, index) in artists"
                :key="index"
                ref="listGroup"
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
        <ul class="list-keys">
            <li v-for="(key, index) in keys"
                :key="key"
                :class="{ active: index === keyIndex }"
                @click.stop="selectKey(index)"
                @touchmove="test"
            >
                {{ key }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ArtistsAPI } from '../api'

export default {
  name: 'HomeArtists',

  data () {
    return {
      keys: [],
      artists: [],
      groupsOffsetTop: [],
      keyIndex: 0
    }
  },

  watch: {
    artists () {
      this.$nextTick(() => {
        this.$refs.listGroup.forEach((group) => { this.groupsOffsetTop.push(group.offsetTop) })
      })
    }
  },

  created () {
    ArtistsAPI.getAllArtists()
      .then((res) => {
        this.keys = res.keys
        this.artists = res.artists
      })
      .catch((err) => { console.error(err) })
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    selectKey (index) {
      this.$refs.listWrapper.scrollTo(0, this.groupsOffsetTop[index])
      this.keyIndex = index
    },

    test (event) {
      console.log(event.target)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.artists {
    width: 100%;
    padding-top: 184px;
    @include bg_sub_color();

    .list-wrapper {
        position: relative;
        overflow: auto;
        width: 100%;
        height: calc(100vh - 184px - 150px);

        .list-group {
            width: 100%;

            .group-title {
                position: sticky;
                @include bg_color();
                @include font_size($font_medium);
                top: -1px;
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

    .list-keys {
        position: fixed;
        top: 55%;
        right: 15px;
        transform: translateY(-50%);

        li {
            padding: 3px 0;
            @include font_color();
            @include font_size($font_medium_s);
            text-align: center;

            &.active {
                @include font_active_color();
                font-weight: 700;
            }
        }
    }
}
</style>
