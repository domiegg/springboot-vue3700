import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import gongyingshangxinxi from '@/views/modules/gongyingshangxinxi/list'
    import weixiuyuan from '@/views/modules/weixiuyuan/list'
    import kehu from '@/views/modules/kehu/list'
    import cheliangxiaoshou from '@/views/modules/cheliangxiaoshou/list'
    import cheliangweixiu from '@/views/modules/cheliangweixiu/list'
    import xiaoshouyuan from '@/views/modules/xiaoshouyuan/list'
    import baoxiangongsi from '@/views/modules/baoxiangongsi/list'
    import xiaoshoutongji from '@/views/modules/xiaoshoutongji/list'
    import yingyetongji from '@/views/modules/yingyetongji/list'
    import wuzixinxi from '@/views/modules/wuzixinxi/list'
    import cheliangxinxi from '@/views/modules/cheliangxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/gongyingshangxinxi',
        name: '供应商信息',
        component: gongyingshangxinxi
      }
      ,{
	path: '/weixiuyuan',
        name: '维修员',
        component: weixiuyuan
      }
      ,{
	path: '/kehu',
        name: '客户',
        component: kehu
      }
      ,{
	path: '/cheliangxiaoshou',
        name: '车辆销售',
        component: cheliangxiaoshou
      }
      ,{
	path: '/cheliangweixiu',
        name: '车辆维修',
        component: cheliangweixiu
      }
      ,{
	path: '/xiaoshouyuan',
        name: '销售员',
        component: xiaoshouyuan
      }
      ,{
	path: '/baoxiangongsi',
        name: '保险公司',
        component: baoxiangongsi
      }
      ,{
	path: '/xiaoshoutongji',
        name: '销售统计',
        component: xiaoshoutongji
      }
      ,{
	path: '/yingyetongji',
        name: '营业统计',
        component: yingyetongji
      }
      ,{
	path: '/wuzixinxi',
        name: '物资信息',
        component: wuzixinxi
      }
      ,{
	path: '/cheliangxinxi',
        name: '车辆信息',
        component: cheliangxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
