import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRecommend from '../views/HomeRecommend.vue'
import HomeSinger from '../views/HomeSinger.vue'
import HomeRank from '../views/HomeRank.vue'
import HomeSearch from '../views/HomeSearch.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', component: HomeRecommend },
  { path: '/singer', component: HomeSinger },
  { path: '/rank', component: HomeRank },
  { path: '/search', component: HomeSearch }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
