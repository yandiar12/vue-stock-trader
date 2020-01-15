import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/components/Home')
const Portofolio = () => import('@/components/portofolio/Portofolio')
const Stocks = () => import('@/components/stocks/Stocks')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/portofolio',
    component: Portofolio
  },
  {
    path: '/stocks',
    component: Stocks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
