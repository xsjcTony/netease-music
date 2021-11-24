/**
 * @description Generate a random integer, including min and max.
 * @param {number} min - Minimum integer, inclusive.
 * @param {number} max - Maximum integer, inclusive.
 * @returns {number} - The generated random integer.
 */
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const formatTime = (time) => {
  let day = Math.floor(time / (60 * 60 * 24))
  day = day >= 10 ? day : `0${ day }`

  let hour = Math.floor(time / (60 * 60) % 24)
  hour = hour >= 10 ? hour : `0${ hour }`

  let minute = Math.floor(time / 60 % 60)
  minute = minute >= 10 ? minute : `0${ minute }`

  let second = Math.floor(time % 60)
  second = second >= 10 ? second : `0${ second }`

  return {
    day,
    hour,
    minute,
    second
  }
}

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description Get value from Local Storage and convert by JSON.parse().
 * @param {string} key
 * @return {any}
 */
export const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key))
