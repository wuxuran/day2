import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index'
import List from '../views/List/List'
import My from '../views/My/My'
import Car from '../views/Car/Car'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
 {
   path:'/index',
   name:'Index',
   component:Index
 },{
  path:'/list',
  name:'List',
  component:List
},{
  path:'/my',
  name:'My',
  component:My
},{
  path:'/car/:id',
  name:'Car',
  component:Car
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
