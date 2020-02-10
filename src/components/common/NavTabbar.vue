<template>
  <div class="container">
    <van-tabbar v-model="active" class="active_tab shadow">
      <van-tabbar-item
        v-for="(item,index) in tabbars"
        :key="index"
        @click="tab(index , item.name)"
      >
        <span class="current == index? active=''  fontStyle" >{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active?item.active:item.normal"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      currIndex: 0,
      active: 0,
      tabbars: [{
        name:'home',
        title:'首页',
        normal:require("../../assets/img/homeWhite.png"),
        active:require("../../assets/img/homeRed.png"),
      }, {
        name:'team',
        title:'战队',
        normal:require("../../assets/img/jobWhite.png"),
        active:require("../../assets/img/jobRed.png"),
      }, {
        name:'my',
        title:'我的',
        normal:require("../../assets/img/myWhite.png"),
        active:require("../../assets/img/myRed.png"),
      }]
    }
  },
  created(){
  },
  mounted(){
    const CURRENTHREF = window.location.hash;
    if(CURRENTHREF.includes('home')){
      this.active = 0;
    }else if(CURRENTHREF.includes('team')){
      this.active = 1;
    }else if(CURRENTHREF.includes('my')){
      this.active = 2;
    }
  },
  methods:{
    tab(index,val){
      if(this.currIndex !== index){
        this.currIndex = index;
        // window.localStorage.setItem('tabIndex',index);
        // window.localStorage.setItem('active',this.active)
        this.$router.push(val);
      }
    }
  }
}
</script>>
<style scoped>
  .container{
    height:98px;
    width:100%;
  }
  .fontStyle{
    font-size: 20px;
    text-align: center;
    margin-top: 6px;
  }
  .active_tab{
    height:98px;
  }
  .active_tab img{
    width:40px;
    height:40px;
  }
</style>>
