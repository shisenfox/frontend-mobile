<template>
  <div>
    <van-row class="row1">
      <div class="line"></div>
      <span class="spanStyle">报名时间</span>
    </van-row>
    <div class="row2">
      <span class="spanStyle1">{{activityInfo.signStartTime}} ~ {{activityInfo.signEndTime}}</span>
    </div>
    <div class="space"></div>
    <van-row class="row1">
      <div class="line"></div>
      <span class="spanStyle">活动时间</span>
    </van-row>
    <div class="row2">
      <span class="spanStyle1">{{activityInfo.actiStartTime}} ~ {{activityInfo.actiEndTime}}</span>
    </div>
    <div class="space"></div>
    <van-row class="row1">
      <div class="line"></div>
      <span class="spanStyle">活动地点</span>
    </van-row>
    <div class="row2">
      <span class="spanStyle1">{{activityInfo.actiPlace}}</span>
    </div>
    <div class="space"></div>
    <van-row class="row1">
      <div class="line"></div>
      <span class="spanStyle">活动规则</span>
    </van-row>
    <div class="row2" style="margin-bottom: 0">
      <div 
        class="rule"
        v-for="(data, index) in activityInfo.actiRule"
        :key="index"
      >
        <p>{{ data }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityInfo',
  data () {
    return {
      active: 0,
      newRule: []
    }
  },
  props: {
    activityInfo: {
      type: Object,
      default: function() {
        return {
          signStartTime: '',
          signEndTime: '',
          actiStartTime: '',
          actiEndTime: '',
          actiPlace: ''
        }
      }
    },
    itemInfo: {
      type: Array
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .line{
      height:32px;
      width: 6px;
      background-color: #C7000B;
      margin-left: 30px;
      float:left;
      margin-top: 8px;
    }
  .space {
    height: 2px ;
    background-color: #EEEEEE;
    margin-left: 30px;
  }
  .row1 {
      height: 48px;
      padding-top: 30px;
      margin-bottom: 10px;
  }
  .row2{
    /*height: 42px;*/
    margin-bottom: 28px;
    padding: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    .noFloat{
      float: none;
    }
  }
  .rule {
    font-size: 26px;
    text-align: left;
    padding: 0 35px;
    color: #666;
    p {
      margin-bottom: 20px;
      &:first-child {
        margin-top:20px;
      }
    }
  }
  .divStyle{
    height:48px;
    width:128px;
  }
  .spanStyle{
    height:48px;
    /* width:128px; */
    font-size: 30px;
    float:left;
    margin-left: 10px;
  }
  .spanStyle1{
    width:690px;
    font-size: 26px;
    color: #666666;
    float:left;
    margin-bottom: 20px;
    text-align: left;
    margin-left: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>