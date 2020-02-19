<template>
    <div class="box">
        <HeaderLogo></HeaderLogo>
        <van-tabs class="vanTabs">
            <van-tab v-for="(value,index) in associationList" :key="index" :title="value.associationSecondName">
                <div class="div"
                    v-for="(value,index) in value.associationSecondlList"
                    :key="index"
                    @click="turn('/home/associationDetail',value.id)">
                    <img src="value.pictureCode"/>
                    <p>{{value.associationName}}</p>
                    <p>社团人数：{{value.associationMembers}}</p>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import HeaderLogo from '@/components/common/HeaderLogo'
    export default {
        name: "associationList",
        components: {
            HeaderLogo,
        },
        data(){
            return{
                associationList:[],
            }
        },
        created(){
            this.getAssociationList()
        },
        methods:{
            
            getAssociationList() {
                this.$api.myApi.getAssociationList()
                    .then((res) => {
                        if (res.retCode === '0') {
                           this.associationList = res.result.associationList;
                        } else {
                            console.log(res.retMsg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            turn(path,associationId){
                this.$router.push(
                    {
                        path,
                        query:{associationId}

                    }
                )
            }
        }
           
    }
</script>

<style lang="less" scoped>
    .box{
        background:#fff;
    }
    .vanTabs /deep/ .van-ellipsis{
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #666666;
        text-align: center;
    }
    .vanTabs /deep/ .van-tab--active{
        color:#C7000B;
    }
    .vanTabs /deep/ .van-tab, .vanTabs /deep/ .van-tabs__nav,.vanTabs /deep/ .van-tabs__wrap{
        height:34px;
        line-height:34px;
    }
    .vanTabs /deep/ .van-tab__pane {
        padding:0 4% 0 4%;
        width: 100%;
        display: flex;
        flex: row wrap;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .div{
        width:47%;     
        margin-bottom:4%;
        border:1px solid #ddd;
        border-radius:5px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #666666;
        text-align: left;
        line-height:22px;
        padding-bottom:10px;
    }
   
    img{
        width:100%;
        height:82px;
        border:1px solid;
        border-radius:5px;
    }
    .div p{
        margin-left:5px;
    }
</style>