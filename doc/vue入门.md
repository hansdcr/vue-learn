### vue入门

#### 100 知识点

##### 100.1 实现动态路由

store/moudles/permission.js

```js
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) { // 权限判断
        // ----- 动态路由添加
        const children = [
          {
            path: `/test/t/t1`,
            component: () => import('@/views/test/index'),
            meta: { title: '测试1', icon: 'edit' }
          },
          {
            path: `/test/t/t2`,
            component: () => import('@/views/test/index'),
            meta: { title: '测试2', icon: 'edit' }
          }
        ]

        // 路由合并到全局变量asyncRoutes中
        asyncRoutes.unshift({
          path: '/test/t',
          component: Layout,
          meta: { title: '测试', icon: 'documentation' },
          children
        }) // ------ 动态路由结束

        accessedRoutes = asyncRoutes || []  
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
```





