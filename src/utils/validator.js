export default {
  'telphone': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/g.test(value)
    let pass2 = /(^(\\+86)?0?[1][3456789][0-9]{9}$)/g.test(value)

    if (!pass&&!pass2) {
      callback(new Error(rule.message || '正确格式：电话号码 或 手机号码'))
    }
    callback()
  },
  'phone': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '输入内容不能为空'))
      return
    }
    let pass = /(^(\\+86)?0?[1][3456789][0-9]{9}$)/g.test(value)
    if (!pass) {
      callback(new Error('请输入正确的手机号'))
    }
    callback()
  },
  'isNotNull': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '输入内容不能为空'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,50}$/g.test(value)
    if (!pass) {
      callback(new Error('不能含特殊字符'))
    }
      callback()

  },
  'notValidInputText': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '输入内容不能为空'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,50}$/g.test(value)
    if (!pass) {
      callback(new Error('不能含特殊字符'))
    }
    callback()
  },
  'email': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '输入内容不能为空'))
      return
    }
    let pass = /^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/g.test(value)
    if (!pass) {
      callback(new Error('请输入正确的邮箱'))
    } else {
      callback()
    }
  },
  'postcode': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^\d{6}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '必须为6位数字'))
    }
    callback()
  },
  'IDNumber': (rule, value, callback) => { // 不能含特殊字符
    if (value === '') {
      callback()
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,50}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '不能含特殊字符'))
    } else {
      callback()
    }
  },

  'isNumber': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^[0-9]*$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '必须为数字'))
    }
    callback()
  },
  'ip': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '请输入正确的IP地址'))
    }
    callback()
  },
  'letterOrNumber': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^[0-9a-zA-Z]+$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message))
    }
    callback()
  },
  'userCode': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,18}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '密码长度8-18，大写字母、小写字母，数字，特殊符号必须四选三'))
    }
    callback()
  },
  'reUserCode': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,18}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '密码长度8-18，大写字母、小写字母，数字，特殊符号必须四选三'))
    }
    callback()
  },
  /*
  *请输入招工人数
  * */
  'count': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^\d{1,11}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '输入的数字长度不超过11位'))
    }
    callback()
  },
  /*
  *截止日期：时间格式：yyyy-MM-dd，
  * */
  'endTime': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^\d{4}-\d{1,2}-\d{1,2}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '时间格式：yyyy-MM-dd'))
    }
    callback()
  },
  /*
  * 请输入所属行业
  *
  * */
  'companyIndustry': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入所属行业'))
      return
    }
    callback()
  },
  /*
  * 请输入乡
  *
  * */
  'townShip': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入乡'))
      return
    }
    callback()
  },
  /*
  * 请输入乡
  *
  * */
  'salaryInfo': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择薪资待遇'))
      return
    }
    callback()
  },
  'salary': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择薪资待遇'))
      return
    }
    callback()
  },
  /*
* 职位福利
* */
  'jobHighlight': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择职位福利'))
      return
    }
    callback()
  },
  /*
职位类别
*/
  'jobType': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择职位类别'))
      return
    }
    callback()
  },
  /*
  职位描述
  */
  'description': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择职位描述'))
      return
    }
    callback()
  },
  'sex': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择性别要求'))
      return
    }
    callback()
  },
  /*
  * 请选择工作地点
  * */
  'address': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择工作地点'))
      return
    }
    callback()
  },
  /*
  * 请输入年龄要求
  * */
  'age1': (rule, value, callback) => {
    if (value === '') {
      callback()
      return
    }
    let pass = /^[0-9]*$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '必须为数字'))
    }
    callback()
  },

  /*
  * 请输入年龄要求
  * */
  'age2': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入年龄要求'))
      return
    }
    callback()
  },
  /*
  * 请选择工作经验要求
  * */
  'experience': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择工作经验要求'))
      return
    }
    callback()
  },
  /*
  * 招聘学历：必输
  * */
  'degree': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择招聘学历'))
      return
    }
    callback()
  },
  /*
  * 请选择工作性质
  * */
  'jobNature': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择工作性质'))
      return
    }
    callback()
  },
  /*
  * 请输入用户名
  * */
  'userNameNeeded': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入用户名'))
      return
    }
    callback()
  },
  'jobName': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入职位名称'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,50}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '长度50，不能包含特殊字符'))
    }
    callback()
  },
  'engineerName': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入项目名称'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,50}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '不能包含特殊字符'))
    }
    callback()
  },
  /*
  * 联系人：必输,不能包含特殊字符（字母，数字，中文）,长度10
  * */
  'contacts': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入联系人'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,10}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '不超过10位，不能包含特殊字符'))
    }
    callback()
  },
  /*
* 招聘部门：长度20，不能包含特殊字符（字母，数字，中文）
* */
  'department': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入招聘部门'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,10}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '不超过20位，不能包含特殊字符'))
    }
    callback()
  },

  /*
  * 公司规模：不能包含特殊字符（字母，数字，中文）
  * */
  'companyScale': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入公司规模'))
      return
    }
    let pass = /^[\u4E00-\u9FA5A-Za-z0-9]{1,10}$/g.test(value)
    if (!pass) {
      callback(new Error(rule.message || '不能包含特殊字符'))
    }
    callback()
  },

  'userCodeNeeded': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请输入密码'))
      return
    }
    callback()
  },
  'nature': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择企性质'))
      return
    }
    callback()
  },
  'type': (rule, value, callback) => {
    if (value === '') {
      callback(new Error(rule.message || '请选择企业性质'))
      return
    }
    callback()
  }
}
