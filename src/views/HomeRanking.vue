<template>
    <div class="ranking">
        排行
    </div>
</template>

<script>
import { RankingAPI } from '../api'

export default {
  name: 'HomeRanking',

  created () {
    RankingAPI.getTopLists()
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.ranking {
    width: 100%;
    padding-top: 184px;
    @include bg_sub_color();
}
</style>
