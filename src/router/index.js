import Vue from 'vue'
import Router from 'vue-router'
import msgModel from '@/components/msg-model'
import mainList from '@/components/main-list';


Vue.use(Router)

const router = new Router({
  mode: 'history',   //当使用 history 模式时，URL 就像正常的 url
  routes: [
    {
      path: '/',
      component: mainList,
      name: 'mainList'
    },
    {
      path: '/send',
      component: msgModel,
      name:'msgModel'
    }
  ]
})
export default router
