import Main from '@/components/main'

/**
 * 中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/ktv',
    name: 'ktv',
    meta: {
      icon: 'logo-buffer',
      title: 'KTV管理'
    },
    component: Main,
    children: [
      {
        path: 'ktv-message',
        name: 'ktv-message',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: 'ktv信息'
        },
        component: () => import('@/view/components/ktv-message/index.vue')
      },
      {
        path: 'ktv-user',
        name: 'ktv-user',
        meta: {
          icon: 'md-trending-up',
          title: '用户管理'
        },
        component: () => import('@/view/components/ktv-user/index.vue')
      }
    ]
  },
  {
    path: '/Obligee',
    name: 'Obligee',
    meta: {
      icon: 'md-cloud-upload',
      title: '权利人管理'
    },
    component: Main,
    children: [
      {
        path: 'Obligee_message',
        name: 'Obligee_message',
        meta: {
          icon: 'ios-document',
          title: '权利人信息'
        },
        component: () => import('@/view/Obligee/Obligee_message.vue')
      },
      {
        path: 'Obligee_user',
        name: 'Obligee_user',
        meta: {
          icon: 'md-clipboard',
          title: '用户管理'
        },
        component: () => import('@/view/Obligee/Obligee_user.vue')
      }
    ]
  },
  {
    path: '/operation',
    name: 'operation',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'operation_page',
        name: 'operation_page',
        meta: {
          icon: '_qq',
          title: '运营管理'
        },
        component: () => import('@/view/operation-page.vue')
      }
    ]
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    meta: {
      icon: 'ios-stats',
      title: '数据统计'
    },
    component: Main,
    children: [
      {
        path: 'Statistics-page',
        name: 'Statistics-page',
        meta: {
          icon: 'md-add',
          title: '歌曲点播数据统计'
        },
        component: () => import('@/view/Statistics/Statistics-page.vue')
      },
      {
        path: 'Statistics-place',
        name: 'Statistics-place',
        meta: {
          icon: 'md-download',
          title: '场所点播数据统计'
        },
        component: () => import('@/view/Statistics/Statistics-place.vue')
      },
      {
        path: 'Statistics-Obligee',
        name: 'Statistics-Obligee',
        meta: {
          icon: 'md-download',
          title: '权利人结算数据统计'
        },
        component: () => import('@/view/Statistics/Statistics-Obligee.vue')
      },
      {
        path: 'Statistics-bill',
        name: 'Statistics-bill',
        meta: {
          icon: 'md-download',
          title: '场所账单数据统计'
        },
        component: () => import('@/view/Statistics/Statistics-bill.vue')
      }
    ]
  },
  {
    path: '/Finance',
    name: 'Finance',
    meta: {
      icon: 'ios-stats',
      title: '财务管理'
    },
    component: Main,
    children: [
      {
        path: 'Finance-Approval',
        name: 'Finance-Approval',
        meta: {
          icon: 'md-add',
          title: '合同到账审批'
        },
        component: () => import('@/view/Finance/Finance-Approval')
      },
      {
        path: 'Finance-Settlement',
        name: 'Finance-Settlement',
        meta: {
          icon: 'md-download',
          title: '结算管理'
        },
        component: () => import('@/view/Finance/Finance-Settlement')
      },
      {
        path: 'Finance-refund',
        name: 'Finance-refund',
        meta: {
          icon: 'md-download',
          title: '退款管理'
        },
        component: () => import('@/view/Finance/Finance-refund')
      }
    ]
  },
  {
    path: '/Recharge',
    name: 'Recharge',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'Recharge_page',
        name: 'Recharge_page',
        meta: {
          icon: 'ios-hammer',
          title: '充值订单',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/Recharge/Recharge')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: 'ios-stats',
      title: '设置'
    },
    component: Main,
    children: [
			{
				path: 'OperationLog-page',
				name: 'OperationLog-page',
				meta: {
				  hideInMenu:true,
					title: '操作日志'
				},
				component: () => import('@/view/setting/OperationLog-page')
			},
			{
				path: 'addEmployee-page',
				name: 'addEmployee-page',
				meta: {
				  hideInMenu:true,
					title: '新增员工'
				},
				component: () => import('@/view/setting/addEmployee-page')
			},
      {
        path: 'Jurisdiction_page',
        name: 'Jurisdiction_page',
        meta: {
          icon: 'ios-bug',
          title: '组织权限管理'
        },
        component: () => import('@/view/setting/Jurisdiction-page')
      },
      {
        path: 'user-page',
        name: 'user-page',
        meta: {
          icon: 'ios-navigate',
          title: '用户管理'
        },
        component: () => import('@/view/setting/user-page')
      },
      {
        path: 'VOD_page',
        name: 'VOD_page',
        meta: {
          icon: 'md-planet',
          title: 'VOD品牌管理'
        },
        component: () => import('@/view/setting/VOD-page.vue')
      },
      {
        path: 'parameter-page',
        name: 'parameter-page',
        meta: {
          icon: 'ios-navigate',
          title: '参数设置'
        },
        component: () => import('@/view/setting/parameter-page.vue')
      }
    ]
  },

  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
