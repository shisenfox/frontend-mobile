import {
  get,
  getResponse,
  post,
  postResponse,
  put,
  patch,
  del
} from '@/utils/http'

let myApi = {
  /**
   * 接口含义：用户登陆
   */
  login: function (param) {
    return postResponse('/login/auth', param)
  },
  /**
   * 接口含义：获取用户信息
   */
  getInfo: function (param) {
    return get('/user/resources', param)
  },
  /**
   * 接口含义：获取盐值
   */
  getSalt: function (param) {
    return get('/login/salt', param)
  },
  /**
   * 接口含义：用户登出
   */
  logout: function (param) {
    return post('/logout', param)
  },
  /**
   * token刷新
   */
  getNewToken: function (param) {
    return getResponse('/token/refresh', param)
  },
  /**
   * 接口含义：权限管理
   */
  //角色管理
  //角色列表查询
  getRole: function (param) {
    return get('/role/list', param)
  },

  //查询菜单-权限列表
  getOperationList: function (param) {
    return get('/menu/function/list', param)
  },
  //根据角色ID获取用户权限
  getOperationListById: function (param) {
    return get('/role/' + param + '/info')
  },
  //查询活动列表
  getActivityList:function(param){
    return get('/activity/list',param)
  },
  //查询活动详情
  getActivityInfo:function(param){
    return get('/activity/info',param)
  },
  // 查询所有游戏信息
  getActivityItemInfo: function(param) {
    return get('/activity/item/list', param)
  },
}

export default {
  myApi
}
