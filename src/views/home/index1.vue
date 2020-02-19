<template>
    <div class="box">
        <HeaderLogo></HeaderLogo>
        <div class="swipe">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in bannerList" :key="index" >
                    <img v-lazy="image.imgUrl" style="width:100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--banner-end-->
        <van-sidebar class="sidebar">
            <van-sidebar-item title="热门社团"/>
            <span @click="turn('/home/associationList')">更多&gt;</span>
        </van-sidebar>
        <van-grid :column-num="4">
            <van-grid-item
                v-for="(value,index) in hotAssociation"
                :key="index"
                icon="photo-o"
                :text="value.associationName"
            />
        </van-grid>
        <!--热门社团-end-->
        <van-sidebar class="sidebar">
            <van-sidebar-item title="工会活动"/>
            <span>更多&gt;</span>
        </van-sidebar>
        <div 
            class="union"
            v-for="(value,index) in unionActivity"
            :key="index"
        >
            <div class="left">
                <img src="value.coverUrl"/>
            </div>
            <div class="right">
                <h4>{{value.activityName}}</h4>
                <p>{{value.activityStatus}}</p>
                <span>{{value.activityStartTime}}-{{value.activityEndTime}}</span>
            </div>
        </div>
        <!--工会活动-end-->
        
    </div>
</template>

<script>
    import HeaderLogo from '@/components/common/HeaderLogo'
    import Vue from 'vue';
    import { Lazyload } from 'vant';

    Vue.use(Lazyload);
    
    export default {
        name: "mayHome",
        components: {
            HeaderLogo,
        },
        data(){
            return{
                hotAssociation:[],
                bannerList:[],
                unionActivity:[],
            }
        },
        created(){
            this.getBanner()
            this.getHotAssociation()
            this.getUnionActivity()
        },
        methods:{
            //banner
            getBanner() {
                this.$api.myApi.getBanner()
                    .then((res) => {
                        if (res.retCode === '0') {
                           this.bannerList = res.result.list;
                        } else {
                            console.log(res.retMsg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },

            //热门社团
            getHotAssociation() {
                this.$api.myApi.getHotAssociation()
                    .then((res) => {
                        if (res.retCode === '0') {
                           this.hotAssociation = res.result.hotAssociationList;
                        } else {
                            console.log(res.retMsg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },

            //热门社团
            getUnionActivity() {
                this.$api.myApi.getUnionActivity()
                    .then((res) => {
                        if (res.retCode === '0') {
                           this.unionActivity = res.result.list;
                        } else {
                            console.log(res.retMsg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            //更多
            turn(path){
                this.$router.push(
                    {
                        path
                    }
                )
            }
        }
    }
</script>

<style lang="less" scoped>
    .box{
        background:#fff;
        border:1px solid;
    }
    .swipe{
        width:90%;
        height:112px;
        overflow:hidden;
        margin-left:5%;
        border:1px solid #000;
        border-radius:10px;
        margin-bottom:10px;
    }
    .sidebar{
        margin-left:5%;
        width:90%;
        height:30px;
        border:1px solid;
    }
    .sidebar /deep/ .van-sidebar-item{
        width:80px;
        line-height:30px;
        padding:0px;
        float:left;
    }
    .sidebar >span{
        float:right;
        color:#999;
        line-height:30px; 
        font-size:12px;
    }
    .union{
        background:#fff;
        display: flex;
        flex: row wrap;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding:5%;
    }
    .left{
        width:30%;
    }
    .left img{
        width:100%;
    }
    .right{
        width:65%;
    }
    .union h4{
        text-align:left;
        line-height:30px;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
    .union p{
        width:60px;
        line-height:20px;
        border:1px solid #00CC99;
        border-radius:5px;
        text-align:center;
        font-weight: 400;
        font-style: normal;
        font-size: 10px;
        color: #00CC99
    }
    .union span{
        font-weight: 400;
        font-style: normal;
        font-size: 10px;
        float:left;
        line-height:30px;
    }
</style>