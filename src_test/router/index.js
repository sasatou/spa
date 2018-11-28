import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  mode: 'history', // ヒストリーモードをOFF
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/output',
      name: 'Output',
      component: Output
    }
  ]
})
