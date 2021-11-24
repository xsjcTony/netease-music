import * as mutationType from './mutations-type'
import { SongAPI } from '../api/index'

export default {
  setNormalPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_NORMAL_PLAYER_SHOW, flag)
  },

  setMiniPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_MINI_PLAYER_SHOW, flag)
  },

  setListPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_LIST_PLAYER_SHOW, flag)
  },

  setMusicPlaying ({ commit }, flag) {
    commit(mutationType.SET_MUSIC_PLAYING, flag)
  },

  setPlayModeType ({ commit }, mode) {
    commit(mutationType.SET_PLAY_MODE_TYPE, mode)
  },

  async setSongs ({ commit }, songIds) {
    const res = await SongAPI.getSongDetail(songIds.join(','))
    const urls = await SongAPI.getSongUrl(songIds.join(','))
    const songs = []

    res.songs.forEach((song) => {
      const obj = {}

      for (let i = 0; i < urls.data.length; i++) {
        if (song.id === urls.data[i].id) {
          obj.url = urls.data[i].url
          break
        }
      }

      obj.id = song.id
      obj.name = song.name
      obj.singer = song.ar.reduce((artists, currentArtist, index) => {
        if (index !== 0) {
          artists += ` / ${ currentArtist.name }`
        }
        return artists
      }, song.ar[0].name)
      obj.picUrl = song.al.picUrl
      songs.push(obj)
    })

    commit(mutationType.SET_SONGS, songs)
    commit(mutationType.SET_SONG_INDEX, 0)
  },

  async getSongLyric ({ commit }, id) {
    const res = await SongAPI.getLyric(id)
    commit(mutationType.GET_SONG_LYRIC, parseLyric(res.lrc.lyric))
  },

  deleteSongs ({ commit }, index) {
    commit(mutationType.DELETE_SONGS, index)
  },

  setSongIndex ({ commit }, index) {
    commit(mutationType.SET_SONG_INDEX, index)
  },

  setSongCurrentTime ({ commit }, time) {
    commit(mutationType.SET_SONG_CURRENT_TIME, time)
  },

  setFavouriteSong ({ commit }, song) {
    commit(mutationType.SET_FAVOURITE_SONG, song)
  },

  deleteFavouriteSongs ({ commit }, song) {
    commit(mutationType.DELETE_FAVOURITE_SONGS, song)
  }
}

function parseLyric (str) {
  // split lyric string into Array
  const lyrics = str.split('\n')
  // get rid of the last empty string
  lyrics.pop()

  // regular expression for timestamp
  const timestampRegex = /\[\d*:\d*\.\d*]/g
  const minuteRegex = /\[\d*/i
  const secondRegex = /:\d*/i
  const milliSecondRegex = /\d*]/i

  // lyric object to be returned
  const lyricObj = {}

  for (const lyric of lyrics) {
    /* time stamp */
    // get timestamp string
    const timestampTemp = lyric.match(timestampRegex)
    // * Skip current timestamp if the format is wrong, e.g. "[00:00:000]"(wrong) instead of "[00:00.000]"(correct)
    if (!timestampTemp) {
      continue
    }
    const timestamp = timestampTemp[0]
    // get minute
    const minute = timestamp.match(minuteRegex)[0].substring(1)
    // get second
    const second = timestamp.match(secondRegex)[0].substring(1)
    // get millisecond
    const milliSecond = timestamp.match(milliSecondRegex)[0].slice(0, -1)
    // convert timestamp  milliseconds
    const time = parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(milliSecond)

    /* fill lyric into object */
    lyricObj[time] = lyric.replace(timestampRegex, '').trim()
  }

  return lyricObj
}
