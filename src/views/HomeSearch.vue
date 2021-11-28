<template>
    <div class="search">
        <div class="search-box">
            <img alt src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==">
            <input v-model="keywords"
                   v-debounce="search"
                   placeholder="搜索单曲"
                   type="text"
            >
        </div>
        <ul v-show="keywords.trim() !== ''" class="search-result-list">
            <li v-for="song in songs"
                :key="song.id"
                @click="selectMusic(song.id)"
            >
                <i></i>
                <p>{{ song.name }} - {{ song.singer }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { SearchAPI } from '../api'
import { mapActions } from 'vuex'

export default {
  name: 'HomeSearch',

  directives: {
    // 自定义指令 - 防抖
    debounce: {
      inserted (el, binding) {
        let timerId = null
        el.addEventListener('input', () => {
          timerId && clearTimeout(timerId)
          timerId = setTimeout(() => {
            binding.value()
          }, 500)
        })
      }
    }
  },

  data () {
    return {
      keywords: '',
      songs: []
    }
  },

  watch: {
    keywords (newValue) {
      if (newValue.trim() === '') {
        this.songs = []
      }
    }
  },

  methods: {
    ...mapActions([
      'setNormalPlayerShow',
      'setSongs'
    ]),

    search () {
      this.keywords.trim() && SearchAPI.getSearchResult(this.keywords.trim(), 1)
        .then((res) => {
          res.result.songs.forEach((song) => {
            song.singer = song.artists.reduce((artists, currentArtist, index) => {
              if (index !== 0) {
                artists += ` / ${ currentArtist.name }`
              }
              return artists
            }, song.artists[0].name)
          })
          this.songs = res.result.songs
        })
        .catch((err) => { console.error(err) })
    },

    selectMusic (id) {
      this.setNormalPlayerShow(true)
      this.setSongs([id])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.search {
    width: 100%;
    padding-top: 184px;
    @include bg_sub_color();

    .search-box {
        display: flex;
        align-items: center;
        margin: 40px 20px;
        border-radius: 40px;
        background: #ebecec;

        img {
            width: 40px;
            height: 40px;
            margin: 0 20px 0 40px;
        }

        input {
            flex: 1;
            height: 80px;
            margin-right: 40px;
            @include font_size($font_medium);
            border: none;
            outline: none;
            background: transparent;

            &::placeholder {
                color: #c9c9ca;
            }
        }
    }

    .search-result-list {
        overflow: scroll;
        width: 100%;
        height: calc(100vh - 344px - 150px);

        li {
            display: flex;
            align-items: center;
            margin: 0 30px;
            padding: 30px 0;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;

            &:last-of-type {
                border-bottom: none;
            }

            i {
                display: inline-block;
                width: 40px;
                height: 40px;
                margin-right: 20px;
                @include bg_img('./../assets/images/small_play')
            }

            p {
                @include font_color();
                @include font_size($font_medium);
                @include no_wrap();
            }
        }
    }
}
</style>
