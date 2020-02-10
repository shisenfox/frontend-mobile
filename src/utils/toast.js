import { Toast } from 'vant'

export default {
  showToast(msg) {
    Toast({
      message: msg,
      duration: 1000
    })
  },
  
  successToast(msg) {
    Toast.success({
      message: msg,
      duration: 2000
    })
  },
  
  warnToast(msg) {
    Toast.fail({
      message: msg,
      duration: 2000
    })
  },
  
  loading(msg) {
    Toast.loading({
      duration: 0,
      mask: false,
      forbidClick: true,
      message: msg || '加载中...'
    })
  },
  
  hideToast () {
    Toast.clear()
  }
}
