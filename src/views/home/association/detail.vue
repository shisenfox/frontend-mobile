<template>
    <div class="box">
        <div class="top">
            <img src="associationDetail.associationPictureCode"/>
            <p>{{associationDetail.associationName}}</p>
            <p class="span">
                <span>成立时间：{{associationDetail.beginDate}}</span>
                <span>{{associationDetail.associationType}}</span>
            </p>
            <p>社团人数：{{associationDetail.associationMembers}}</p>
            <p>社长：
                <span v-for="(value,index) in associationDetail.associationPresidents" :key="index">
                {{value.presidentName}}({{value.presidentCheckNo}})
                </span>
            </p>
        </div>
        <div class="bottom">
            <van-tabs v-model="active" class="vanTabs">
                <van-tab title="社团介绍">
                    <p @click="turnActivity">查看社团活动&gt;</p>
                    <div class="content">
                        {{associationDetail.associationIntroduced}}
                    </div>
                </van-tab>
                <van-tab title="社团人员">
                    <table>
                        <tr>
                            <th>会员名称</th>
                            <th>性别</th>
                            <th>联系方式</th>
                        </tr>
                        <tr v-for="(value,index) in associationDetail.associationUsers" :key="index">
                            <td>{{value.userName}}({{value.checkNo}})</td>
                            <td>{{value.gender}}</td>
                            <td>{{value.phone}}</td>
                        </tr>
                    </table>
                </van-tab>
            </van-tabs>
        </div>
        <div class="footer">
            <span @click="turn('/home')">首页</span>
            <span v-show="attentionFlag">关注</span>
            <span v-show="!attentionFlag" style="color:red;">关注</span>
            <span>分享</span>
            <button @click="join" v-if="buttonFlag">加入社团</button>
            <button @click="join" v-else>退出社团</button>
        </div>
        <!--弹框-->

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "associationDetail",
        data(){
            return{
                associationId:'',
                associationDetail:{},
                active:0,
                userName:'',
                buttonFlag:true,
                attentionFlag:true,
                alertFlag:true,
            }
        },
        created(){
            this.associationId=this.$route.query.associationId
            this.getAssociationDetail()
            this.$store.state.navBarFlag=false
            this.login()
        },
        methods:{
            getAssociationDetail() {
                let params={
                    id:this.associationId
                }
                this.$api.myApi.getAssociationDetail(params)
                    .then((res) => {
                        if (res.retCode === '0') {
                           this.associationDetail = res.result;
                        } else {
                            console.log(res.retMsg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            //查看社团活动
            turnActivity(){
                this.$router.push({path:'/my'})//这里需要修改，可直接引到另一个人写的页面
                this.$store.state.navBarFlag=true//根据是否显示导航做修改
            },
            //首页
            turn(path){
                this.$router.push(
                    {
                        path,

                    }
                )
                this.$store.state.navBarFlag=true;
            },
            login(){
                if(document.cookie){
                    //已登录
                    this.userName=document.cookie.substring(9);
                    //userName是暂定的字段
                    //查看该用户是否加入该社团
                    this.$api.myApi.getAssociations()
                        .then((res) => {
                            if (res.retCode == '0') {
                                for(let i of res.result){
                                    this.buttonFlag=true;
                                    if(this.associationId==i.id){
                                        this.buttonFlag=false
                                        return
                                    }
                                }
                            } else {
                                console.log(res.retMsg)
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    //查看该用户是否关注该社团
                    let param={
                        attentionUserId:this.userName
                    }
                    this.$api.myApi.getAttentionAssociation(param)
                        .then((res) => {
                            if (res.retCode == '0') {
                                for(let i of res.result.list){
                                    this.attentionFlag=true;
                                    if(this.associationId==i.id){
                                        this.attentionFlag=false
                                        return
                                    }
                                }
                            } else {
                                console.log(res.retMsg)
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    
                }else{
                    //未登录
                    this.buttonFlag=true
                    this.attentionFlag=true
                }
            },
            join(){
                if(!document.cookie.substring(9)){
                    //用户未登录弹框
                    Dialog.confirm({
                        title: '温馨提示',
                        message: '您还没有登录，请先登录！'
                    }).then(() => {
                        this.$router.push({path:'/my'})
                        this.$store.state.navBarFlag=true
                    }).catch(() => {
                        // on cancel
                    });
                }else{
                    if(this.buttonFlag){
                        //用户登录，未加入社团弹框(入团)
                        Dialog.confirm({
                            title: '温馨提示',
                            message: '确定加入该社团？'
                        }).then(() => {
                            let params={
                                id:this.associationId,
                                type:0,
                                userName:document.cookie.substring(9)
                            }
                            console.log(params)
                            this.$api.myApi.joinAssociation(params)
                                .then((res) => {
                                    if (res.retCode === '0') {
                                        Dialog.confirm({
                                            title: '温馨提示',
                                            message: '加入成功！去看看社团活动。'
                                        }).then(() => {
                                            this.turnActivity();
                                        }).catch(() => {
                                            // on cancel
                                            this.buttonFlag=false;
                                        });
                                    } else {
                                        console.log(res.retMsg)
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }).catch(() => {
                            // on cancel
                        });

                    }else{
                    //用户登录，已加入社团弹框(退团)
                        Dialog.confirm({
                            title: '温馨提示',
                            message: '确定退出该社团？'
                        }).then(() => {
                            let params={
                                id:this.associationId,
                                type:1,
                                userName:document.cookie.substring(9)
                            }
                            console.log(params)
                            this.$api.myApi.joinAssociation(params)
                                .then((res) => {
                                    if (res.retCode === '0') {
                                        Dialog.confirm({
                                            title: '温馨提示',
                                            message: '退出成功！去看看社团活动。'
                                        }).then(() => {
                                            this.turnActivity();
                                        }).catch(() => {
                                            // on cancel
                                            this.button=true;
                                        });
                                    } else {
                                        console.log(res.retMsg)
                                    }
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }).catch(() => {
                            // on cancel
                        });
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .top{
        padding:0 2%;
        margin:0 auto 10px;
        background:#fff;
    }
    .top>img{
        width:100%;
        height:167px;
        border-radius:5px;
    }
    .top>p{
        text-align:left;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #666666;
        height:30px;
        line-height:30px;
    }
    .top>p:first-of-type{
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #C83B49;
    }
    .span>span{
        display:inline-block;
        width:48%;
    }
    .bottom{
        background:#fff;
    }
    .vanTabs /deep/ .van-ellipsis{
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #666666;
        text-align: center;
        border-bottom:3px solid #ddd;
    }
    .vanTabs /deep/ .van-tab--active{
        color:#C7000B;
    }
    .vanTabs /deep/ .van-tab, .vanTabs /deep/ .van-tabs__nav,.vanTabs /deep/ .van-tabs__wrap{
        height:38px;
        line-height:38px;
    }
    .vanTabs /deep/ .van-tabs__line{
        width:50% !important;
    }
    .vanTabs p{
        line-height:34px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #0099FF;
        margin-right:2%;
        text-align:right;
    }
    .content{
        width: 96%;
        margin:0 auto;
        line-height:20px;
        border: 1px solid rgba(228, 228, 228, 1);
        border-radius: 6px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        text-align: left;
    }
    table{
        width:96%;
        margin:10px auto 60px;
        font-weight: 404;
        font-style: normal;
        font-size: 10px;
        text-align: center;
        border-collapse: collapse;
    }
    th,td{
        border:1px solid #ddd;
        line-height:30px;
    }
    th{
        font-weight:404;
        background:#F5F9FA;
        line-height:40px;
    }
    .footer{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        line-height:50px;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        box-sizing: border-box;
    }
    .footer span{
        display:inline-block;
        width:15%;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #666666;
        text-align: center;
    }
    .footer button{
        width:50%;
        height:35px;
        line-height:35px;
        border:none;
        border-radius:5px;
        background:#C83B49;
        color:#fff;
    }
</style>