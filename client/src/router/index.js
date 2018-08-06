import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import about from '@/components/about'
import profile from '@/components/profile'
import JobList from '@/components/guidance/jobs/JobList'
import CompanyList from '@/components/guidance/company/company'
import Login from '@/components/Login'
import Job from '@/components/guidance/jobs/jobs'
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
    },
    {
      path: '/company',
      name: 'CompanyList',
      component: CompanyList
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    }
  ]
})
