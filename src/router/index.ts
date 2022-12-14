import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    //redirect: '/tabs/tab1'
    name: 'connectApi',
    component: () => import('@/views/connectApi.vue'),

  },
  {
    path: '/warehouse-for-orders',
    name: 'warehouse',
    component: () => import('@/views/warehouseForOrders.vue'),

  },
  {
    path: '/products-for-app',
    name: 'productsForApp',
    component: () => import('@/views/productsApp.vue'),

  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      } ,
      {
        path: '/enter-purchases',
        name: 'send-purshable',
        component: () => import('@/views/send-purshable.vue')
      
     },
     {
      path: '/trade-orders',
      name: 'TradeOrde',
      component: () => import('@/views/tradeOrders.vue'),
    },  
    ]
  },
  {
    path: '/edit-product/:id',
    name: 'EditP',
    component: () => import('@/views/EditProduct.vue'),
  },
  { 
    
    path: '/view-order/:number/:idalmacen',
    name: 'viewOrder',
    component: () => import('@/views/viewOrderByNumber.vue'),
    
  },
  { 
    
    path: '/data-collector',
    name: 'dataCollector',
    component: () => import('@/views/dataCollector.vue'),
    
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
