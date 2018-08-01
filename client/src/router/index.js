import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import about from '@/components/about'
import profile from '@/components/profile'
import JobList from '@/components/guidance/jobs/JobList'
import Login from '@/components/Login'
import 'vue2-animate/dist/vue2-animate.min.css'

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
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/joblist',
      name: 'JobList',
      component: JobList
    }
  ]
})
