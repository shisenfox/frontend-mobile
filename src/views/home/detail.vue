<template>
  <div>
    <Header title="活动详情"></Header>
    <div class="card">
      <img :src='imgSrc' />
      <h3>{{ activityName }}</h3>
    </div>
    <div class="space-20"></div>
    <van-tabs 
      v-model="activeName"
      sticky
    >
      <van-tab
        title="介绍"
        name="intro"
        class="tab-content"
      >
        <activity-info
          :activityInfo="activityInfo"
          :itemInfo="newRule" />
      </van-tab>
      <van-tab 
        title="报名详情"
        name="registry"
      >
        <registration :activityId="activityId" />
      </van-tab>
      <van-tab 
        title="问卷"
        name="questionnaire"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import ActivityInfo from './components/ActivityInfo'

export default {
  name: 'detail',
  components: {
    Header,
    ActivityInfo,
  },
  data () {
    return {
      status: '00',
      activityId: '',
      activityName: '',
      activityStatus:'',
      activityType:'',
      activityInfo: {},
      imgSrc: '',
      activeName: '',
      activityItems: [],
      itemInfo: [],
      newRule: [],
      registryList: window.localStorage.getItem('registryList') ? window.localStorage.getItem('registryList') : ''
    }
  },
  mounted() {
    this.activityId = this.$route.query.id
    this.getActivityInfo()
    this.getActivityItemInfo()
    // 当前用户是否已报名该活动
    if (this.registryList !== '') {
      let list = JSON.parse(this.registryList)
      list.forEach(item => {
        if(item.activityId === this.activityId) {
          this.status = item.status
        }
      })
    }
  },
  methods: {
    getActivityInfo(){
      this.$api.myApi.getActivityInfo({activityId: this.activityId})
      .then((res) => {
        if (res.retCode === '0') {
          this.activityInfo = res.result
          this.activityName = res.result.actiName
          this.activityStatus = res.result.actiStatus
          this.activityType = res.result.actiType
          this.activityInfo.actiRule = this.activityInfo.actiRule.split('$|$')
          this.activeName = res.result.activeName
          this.imgSrc = "data:image/png;base64," + res.result.actiImg
        } else {
          this.$toast.warnToast(res.retMsg)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getActivityItemInfo() {
      this.$api.myApi.getActivityItemInfo({activityId: this.activityId})
      .then((res) => {
        if (res.retCode === '0') {
          let activity = {
            itemId: 't' + this.activityId,
            itemName: '总成绩'
          }
          this.itemInfo = res.result.activityItemList
          this.itemInfo.map(item => {
            let tmp = {
              itemName: '',
              itemRule: []
            }
            tmp.itemName = item.itemName
            tmp.itemRule = item.itemRule.split('$|$')
            this.newRule.push(tmp)
          })
          this.activityItems = res.result.activityItemList.concat()
          this.activityItems.unshift(activity)
        } else {
          console.log(res.retMsg)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
// overwrite vant-ui style

// custom
.card {
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #fff;
  img {
    height: 388px;
    width:690px;
    align-self: center;
  }
  h3 {
    text-indent: 32px;
    line-height: 90px;
    text-align: left;
  }
}
.tab-content {
  background-color: #fff;
}

</style>