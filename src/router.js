import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import formComponent from './components/formComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/formComponent',
      name: 'formComponent',
      component:formComponent
    }
  ]
})
