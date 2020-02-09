import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import A from "../components/A";
import B from "../components/B";
import C from "../components/C";
import D from "../components/D";
import Details from "../components/Details";
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },
    {
      path: '/d',
      name: 'd',
      component: D
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path:"/",
      redirect:"/a"
    }
  ]
})
