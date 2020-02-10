---
工银科技工会H5
---

## 前序准备
### 运行前准备
请确保本地已经安装node（8.0及以上版本）

## 环境搭建
```bash
# 克隆版本库
git clone git@83.249.172.12:union/techfrontcode.git

# 安装依赖包
cd techfrontcode/laborUnion
npm install

# 以开发模式运行
npm run serve
```

## 发布
```bash
npm run build
```

## 目录结构

```
.
|-- public/                     
|     |-- index.html            # 入口页面
|-- src/
|     |-- assets       			# 存放静态资源
|     |		|-- css/
|	  |		|	|-- global.less	# 全局样式文件
|     |     |-- img/	       	# 图片资源
|     |-- components/
|     |     |-- common/			# 公共组件
|     |     |-- ...
|     |-- router/				# 路由配置
|	  |		|-- index.js		
|	  |-- store/				# 数据状态管理
|	  |		|-- index.js
|	  |-- utils/				# 公共方法
|	  |-- views/				# 112
|	  |-- App.vue				# 根组件
|	  |-- main.js				# 入口js文件
|-- package.json
|-- vue.config.js              	# 配置文件
```

