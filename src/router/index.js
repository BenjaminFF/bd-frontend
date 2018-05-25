import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import bdemo1 from '@/components/bdemo1'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/', // 默认路径
      name: 'bdemo1',
      component: bdemo1
    },
    {
      path: '/bdemo1',
      name: 'bdemo1',
      component: bdemo1
    }
  ]
})
