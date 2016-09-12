/**
 * Created by Xcar on 2016/8/31.
 */
export default function (router) {
  //** 全局 路由 钩子
  router.map({
    '/': {
      name: 'index',
      title: '爱卡汽车-推广活动',
      component: function (resolve) {
        require(['./views/ask.vue'], resolve);
      }
    },
    'submit': {
      name: 'submit',
      title:'爱卡汽车-询问活动',
      component: function (resolve) {
        require(['./views/sub.vue'], resolve);
      }
    },
    'submit2': {
      name: 'submit2',
      title:'爱卡汽车-询问活动',
      component: function (resolve) {
        require(['./views/sub2.vue'], resolve);
      }
    }
    ,
    'success': {
      name: 'success',
      title : '询价成功',
      component: function (resolve) {
        require(['./views/success.vue'], resolve)
      }
    }
  })
}