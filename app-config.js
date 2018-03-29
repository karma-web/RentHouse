module.exports = {
  // 入口公共路径
  basePath: './src/apps/',
  // 全局cdn配置，数组内可引入多个cdn引用文件
  cdn: {
    js: [],
    css: []
  },
  // 多页面入口配置
  // -- entry 入口路径
  // -- title 输出页面title
  // -- filename 输出页面路径／文件名
  // -- cdn 页面cdn配置 (参考全局cdn配置格式)
  pages: [
    {
      entry: 'home',
      title: 'OS Home',
      filename: 'index.html',
      cdn: {}
    },
    {
      entry: 'auth',
      title: 'OS Auth',
      filename: 'auth/index.html',
      cdn: {}
    },
    // {
    //   entry: 'console',
    //   title: 'OS Console',
    //   filename: 'console/index.html',
    //   cdn: {}
    // },
    // {
    //   entry: 'admin',
    //   title: 'OS Admin',
    //   filename: 'admin/index.html',
    //   cdn: {}
    // }

  ],
  // 项目基础配置，项目部署config.js文件可以此为范本（不包括mock部分）
  // -- publicCloud 是否启用公有云模式
  // -- switcherList 项目菜单切换配置
  // -- api 项目远程数据源
  config: {
    publicCloud: true,
    switcherList: [
      { name: 'console', link: '/console' },
      { name: 'account', link: '/account' }
    ],
    api: {
      login: 'http://172.16.92.24:8090/mental/auth',
      admin: 'http://172.16.92.24:8080/portal'
    },
    // 本地数据模拟配置
    // ！项目部署不包括此部分
    mock: true,
    mockApi: {
      login: '/mock/auth',
      admin: '/mock/admin'
    }
  }
}
