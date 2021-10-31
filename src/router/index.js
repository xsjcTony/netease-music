import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步导入
const HomeRecommend = () => import('../views/HomeRecommend.vue')
const HomeSinger = () => import('../views/HomeSinger.vue')
const HomeRank = () => import('../views/HomeRank.vue')
const HomeSearch = () => import('../views/HomeSearch.vue')
const PlaylistDetail = () => import('../views/PlaylistDetail.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', component: HomeRecommend },
  { path: '/singer', component: HomeSinger },
  { path: '/rank', component: HomeRank },
  { path: '/search', component: HomeSearch },
  { path: '/playlistDetail/:id', component: PlaylistDetail }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
