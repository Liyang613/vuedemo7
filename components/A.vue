<template>
  <div>
      <ul>
          <li v-for="(e,i) in list" :key="i" @click="change(e.id)">
              <div class="left">
                   <img :src='"https://elm.cangdu.org/img/"+e.image_path' alt="">
              </div>
              <div class="right">
                  <div class="top">
                      <h4 v-show="e.is_premium">品牌</h4>
                      <h3>{{e.name}}</h3>
                      <p>
                          <span v-for="(v,index) in e.supports" :key="index">
                            {{v.icon_name}}
                          </span>
                      </p>
                  </div>
                  <div class="xx">
                      <p>
                          <van-rate
                            v-model="e.rating"
                            allow-half
                            void-icon="star"
                            void-color="#eee"
                        />
                        <span :style="{color:'orange'}">{{e.rating}}</span>
                         <span>月售{{e.recent_order_num}}单</span>
                      </p>
                     <p class="fn">
                         <span>{{e.delivery_mode.text}}</span>
                         <span>准时达</span>
                     </p>
                  </div>
                  <div class="b">
                      <p>
                         <span>￥{{e.float_minimum_order_amount}}起送/</span>
                         <span>{{e.piecewise_agent_fee.tips}}</span>
                     </p>
                     <p>
                         <span>10公里/</span>
                         <span :style="{color:'#81BCF4'}">40分钟</span>
                     </p>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data()
    {
        return{
            list:[]
        }
    },
    mounted()
    {
        axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((res)=>{
            // console.log(res.data);
            this.list=res.data;  
        })
    },
    methods:{
        change(id)
        {
            this.$router.push("/details?id="+id);
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    li{
        width: 100%;
        height: 1.44rem;
        display: flex;
        border-bottom: 1px solid #eee;
        .left{
            width: 20%;
            height: 100%;
            img{
                display: block;
                width: 0.98rem;
                margin-top: 0.24rem;
                margin-left: 0.12rem;
            }
        }
        .right{
            width: 80%;
            height: 100%;
            padding-right: 0.1rem;
            .top{
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                h4{
                    background: #FFD424;
                    width: 0.46rem;
                    line-height: 0.6rem;
                    float: left;
                }
                h3{
                    float: left;
                    margin-left: 0.06rem;
                }
                p{
                    float: right;
                }
            }
            .xx{
                display: flex;
                justify-content: space-between;
                .fn{
                    display: flex;
                    span{
                    display: block;
                    border: 1px solid #81BCF4;
                    margin-left: 0.02rem;
                        &:nth-of-type(1)
                        {
                            background: #81BCF4;
                            color: white;
                        }
                        &:nth-of-type(2){
                            color: #81BCF4;
                        }
                    }
                }
            }
            .b{
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>