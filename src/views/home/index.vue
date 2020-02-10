<template>
  <div class="container">
    <HeaderLogo></HeaderLogo>
    <div>
      <div v-if="noData">
        <span class="msg">暂无活动，敬请期待</span>
      </div>
      <div v-else>
        <div 
          v-for="item in myData"
          :key="item.id"
        >
          <div align="center">
            <img
              :src='"data:image/png;base64," + item.actiImg'
              class="item-img"
              @click="goDetail(item.id)"/>
          </div>
          <div class="title">
            <div class="acti-name">
              <span >{{ item.actiName }}</span>  
            </div>
            <div 
              class="status"
              :style="{'color':(item.actiStatusName ==='报名中') ? '#C7000B' : '#2c3e50'}"
            >
              <span>{{ item.actiStatusName }}</span>
            </div> 
          </div>
          <div class="content">
            <span>{{ item.actiStartTime }}</span>
            <div
              class="status"
              style="float: right"
            >
              <van-tag
                color="#fff5e3"
                text-color="#fd8458"
                v-show="item.registryStatus === '01'"
              >
                {{ item.registryStatus | statusFilter }}
              </van-tag>
            </div> 
          </div>
          <div class="content place">
            <span>{{ item.actiPlace }}</span>
          </div>
          <div class="space-between"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getToken } from '@/utils/auth' // 验权
import Header from "@/components/common/Header";
import HeaderLogo from '@/components/common/HeaderLogo'
import { setTimeout } from 'timers';

export default {
  name: "home",
  components: {
    HeaderLogo,
  },
  data() {
    return {
      noData: false,
      myData: [],
      registryList: window.localStorage.getItem('registryList') ? window.localStorage.getItem('registryList') : ''
    };
  },
  mounted(){
    this.getActiveList()
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '00': '未报名',
        '01': '已报名'
      }
      return statusMap[status]
    }
  },
  methods: {
    getActiveList() {
      this.$api.myApi.getActivityList()
      .then((res) => {
        if(res.retCode === '0') {
          this.myData = res.result.activityList
          let registryObj = JSON.parse(this.registryList)
          if (this.registryList !== '' && this.registryList != undefined) {
            this.myData.map(item => {
              registryObj.map(i => {
                if(i.activityId === item.id) {
                  item.registryStatus = i.status
                }
              })
            })
          }
          if(this.myData.length === 0) {
            this.noData = true;
          }
        } else {
          this.$toast.warnToast('res.retMsg')
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    
    goDetail(val){
      this.$router.push({
        name:"detail",
        query: {
          id: val
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.van-tag {
  height: 30px;
  line-height: 30px;
  width: 66px;
  font-size: 22px;
}
.container {
  /* height: 100%; */
  background-color:white;
  .msg{
    font-size: 26px;
  }
  .item-img {
    height: 388px;
    width: 690px;
    margin-top: 30px;
  }
  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .content{
    font-size: 24px;
    color: #999999;
    letter-spacing: 0;
    line-height: 36px;
    text-align: left;
    margin-left: 30px;
  }
  .place {
    padding-bottom: 20px;
  }
  .status{
    font-size: 24px;
    margin-right: 30px;
  }
  .acti-name{
    margin: 10px 0 10px 30px;
    font-size: 32px;
    text-align: left;
    color: #333333;
    letter-spacing: 0;
    line-height: 48px;
    font-weight:bolder;
  }
  .space-between {
    height: 6px;
    background-color: #fafafa;
    // box-shadow: 0 0 1px 0 rgba(10, 31, 68, 0.08), 0 1px 1px 0 rgba(10, 31, 68, 0.08);
  }
}

</style>
