import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './../components/HelloWorld'
import Profile from './../components/Profile'
import Skill from './../components/Skill'
import Output from './../components/Output'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // ヒストリーモードをOFF
  base: '/spa/', // サブディレクトリがある場合、ない場合は削除
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
