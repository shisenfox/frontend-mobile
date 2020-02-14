<template>
    <div style="background-color: rgba(242, 242, 242, 1)">
        <div class="navTop">
            <div class="navTop-center">
                <van-row>
                    <van-col span="5">
                        <div class="borerR">
                            <img src="../../assets/img/personalImg.png" alt="">
                        </div>
                        <!--<van-image
                                round
                                width="1rem"
                                height="1rem"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />-->
                    </van-col>
                    <van-col span="10" style="line-height: 43px;">
                      {{name}}({{oA}})
                    </van-col>
                    <van-col span="3" offset="6">
                        <van-icon name="setting-o" />
                    </van-col>
                </van-row>
            </div>
            <img src="../../assets/img/red.png" alt="" class="Img">
        </div>
        <div style="margin-top: 1rem;padding: 5px ;color: #999999;">
           <!-- <div class="center">
                 <van-row>
                     <van-col span="6">
                        <div>
                            <p>
                                <van-icon name="like" size="small" />
                            </p>
                            <p>我的报名</p>
                        </div>
                     </van-col>
                     <van-col span="6">
                         <div>
                             <p>
                                 <van-icon name="like-o" size="small" />
                             </p>
                             <p>我的福利</p>
                         </div>
                     </van-col>
                     <van-col span="6">
                         <div>
                             <p>
                                 <van-icon name="like-o" size="small" />
                             </p>
                             <p>我的奖品</p>
                         </div>
                     </van-col>
                     <van-col span="6">
                         <div>
                             <p>
                                 <van-icon name="like-o" size="small" />
                             </p>
                             <p>我的关注</p>
                         </div>
                     </van-col>
                 </van-row>
            </div>-->
            <van-grid clickable :column-num="4" :border="false">
                <van-grid-item icon="home-o" text="我的报名" to="/" />
                <van-grid-item icon="gift-card" text="我的福利" url="/vant/mobile.html" />
                <van-grid-item icon="point-gift" text="我的奖品" to="/" />
                <van-grid-item icon="star" text="我的关注" to="/" />
            </van-grid>
        </div>
        <div class="center-center">
            <!--<div class="center-body">
                <van-row>
                    <van-col span="2">
                        <van-icon name="like"/>
                    </van-col>
                    <van-col span="5" :slot="left">
                        <span>我的社团</span>
                    </van-col>
                    <van-col span="2" offset="15" justify="end">
                        <van-icon name="arrow"/>
                    </van-col>
                </van-row>
            </div>
            <van-divider style="border-width:1px" />
            <div class="center-body">
                <van-row>
                    <van-col span="2">
                        <van-icon name="like"/>
                    </van-col>
                    <van-col span="5" :slot="left">
                        <span>我的日程</span>
                    </van-col>
                    <van-col span="2" offset="15" justify="end">
                        <van-icon name="arrow"/>
                    </van-col>
                </van-row>
            </div>
            <van-divider style="border-width:1px" />
            <div class="center-body">
                <van-row>
                    <van-col span="2">
                        <van-icon name="like"/>
                    </van-col>
                    <van-col span="5" :slot="left">
                        <span>消息中心</span>
                    </van-col>
                    <van-col span="2" offset="15" justify="end">
                        <van-icon name="arrow"/>
                    </van-col>
                </van-row>
            </div>
            <van-divider style="border-width:1px" />-->
            <van-cell-group style="text-align: left;">
                <van-cell title="我的社团" icon="friends" is-link url="/vant/mobile.html" :center="true" style="height: 1rem"/>

                <van-cell title="我的日程" icon="location-o" is-link url="/vant/mobile.html" :center="true" style="height: 1rem" />

                <van-cell title="消息中心" icon="chat" is-link to="index" :center="true" style="height: 1rem"/>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mayHome",
        data(){
            return{
                img:'',
                name:'张三',
                oA:'1001123251',
                border:true
            }
        },
        created(){
            this.getInfo()
        },
        methods:{
            getInfo() {
                debugger;
                this.$api.myApi.getInfo()
                    .then((res) => {
                        if (res.retCode === '0') {
                            debugger;
                           this.name = res.name;
                           this.oA = res.oA
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

<style lang="less">
.navTop{
    color: white;
    height: 2rem;
    background-color: rgba(197, 23, 41, 1);
    padding-top: 0.5rem;
}
    .borerR{
        border-radius: 50%;
    }
   /* .navTop-center{
        text-align: center;
    }*/
    .center{
        height: 3rem;
        line-height: 1rem;
        color: #999999;
        padding-top: 1rem;
        background-color: rgba(255, 255, 255, 1);
    }
    .center-center{
        margin: 10px;
        color: #999999;
        background-color: rgba(255, 255, 255, 1);
    }
    .center-body{
        height: 1rem;
        line-height: 1rem;
    }
    .Img{
        width: 100%;
    }
</style>