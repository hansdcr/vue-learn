### vue入门

#### 1 项目初始化

##### 1.1  [初始化vue-element-ui](http://www.youbaobao.xyz/admin-docs/guide/)

```
git clone https://github.com/PanJiaChen/vue-element-admin
cd vue-element-admin
npm i
npm run dev
```

##### 1.2 精简项目

- 删除 src/views 下的源码，保留：
  - dashboard：首页
  - error-page：异常页面
  - login：登录
  - redirect：重定向
- 对 src/router/index 进行相应修改
- 删除 src/router/modules 文件夹
- 删除 src/vendor 文件夹

##### 1.3 源码调试

如果需要进行源码调试，需要修改 vue.config.js：

```js
config
  // https://webpack.js.org/configuration/devtool/#development
  .when(process.env.NODE_ENV === 'development',
    config => config.devtool('cheap-source-map')
  )
```

将 cheap-source-map 改为 source-map，如果希望提升构建速度可以改为 eval

####  2 用户登陆

##### 2.1 登陆流程图

![image-20201025120508418](/Users/11091752/Library/Application Support/typora-user-images/image-20201025120508418.png) 



#### 3 常用

##### 3.1 $emit 和$on

* 解决的问题： 事件的定义和消费
* $on 事件的定义
* $emit 事件的消费

```js
<template>
  <div class="dashboard-editor-container">
    <!-- 事件的触发 -->
     <button @click="boost">事件测试</button>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {},
  data() {
    return {}
  },

  created() {
    // 事件的定义
    this.$on('my_events', this.handleEvents)
  },

  methods: {
    // 事件的消费
    boost() {
      this.$emit('my_events', 'my params')
    },

    // 事件的执行
    handleEvents(e){
      console.log('this.message', e)
    }
  }
}
</script>
```

##### 3.2 provide inject

* 解决问题： 跨组建通信





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





