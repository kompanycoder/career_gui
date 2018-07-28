import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import about from '@/components/about'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
