# RentHouse

> RentHouse 2018

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```

## 新增特性
1.多页面应用统一开发打包（根目录app-config.js可配置）。<br>
2.开发默认集成数据mock server。<br>
3.集成ESlint vue语法标准检查。<br>
4.集成vuex前端状态存储。<br>
5.vue-router信息异步存入vuex。<br>
6.监听vue-router跳转动态更改页面title。<br>
7.国际化配置同步vuex，切换无需刷新。<br>



## 项目结构
``` bash
RentHouse/
├── build/                                        // 项目构建(webpack)相关代码
│   |-- build.js                                  // 生产环境构建代码
│   ├── check-version.js                          // 检查node、npm等版本
│   ├── dev-client.js                             // 热重载相关
│   ├── dev-server.js                             // 构建本地服务器
│   ├── get-app.js                                // 读取根目录app-config获取多页面构建信息
│   ├── utils.js                                  // 构建工具相关
│   ├── vue-loader.conf.js                        // webpack中vue组件编译配置
│   ├── webpack.base.conf.js                      // webpack基础配置
│   ├── webpack.dev.conf.js                       // webpack开发环境配置
│   └── webpack.prod.conf.js                      // webpack生产环境配置
├── config/                                       // 项目开发环境配置
│   ├── dev.env.js                                // 开发环境变量
│   ├── index.js                                  // 项目一些配置变量
│   └── prod.env.js                               // 生产环境变量
├── dist/                                         // 本地打包生成文件
├── mock/                                         // 本地mock系统目录
├── src/
│   ├── apps/                                     // 业务app目录
│       ├── app_xxx/                              // app
│           ├── fetch/                            // app请求方法定义
│           ├── i18n/                             // app国际化
│           ├── router/                           // app前端路由定义
│           ├── store/                            // vuex
│           ├── style/                            // app自定义样式
│           └── tpl/                              // app组件模版
│   ├── framework_tpl/                            // 框架公用模版
│   ├── locale/                                   // 框架国际化公共逻辑
│   ├── theme/                                    // 框架公共主题样式
│   └── util/                                     // 框架公用资源
├── static/                                       //静态文件
├── .babelrc                                      // ES6语法编译配置
├── .editorconfig                                 // 定义代码格式
├── .eslintignore                                 // eslint需要忽略检查的文件
├── .eslintrc.js                                  // eslint配置文件
├── .gitignore                                    // git上传需要忽略的文件格式
├── .postcssrc.js                                 // postcss配置文件
├── app-config.js                                 // 项目配置文件
├── index.tpl                                     // 项目入口页面
├── package.json                                  // 项目基本信息
└── README.md                                     // 项目说明

```
