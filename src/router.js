import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import Company from './components/Company.vue'
import Companies from './components/Companies.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/companies/:id',
      name: 'Company',
      props: true,
      component: Company
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ],
  mode: "history"
})
