<template>
  <div class="details">
      <ul>
        <li>
            {{list.name}}
            <img :src='"https://elm.cangdu.org/img/"+list.image_path' alt="">
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
            list:{}
        }
    },
    mounted()
    {
        axios.get("http://elm.cangdu.org/shopping/restaurant/"+this.$route.query.id).then((res)=>{
            console.log(res);
            this.list=res.data;
        })
    }
}
</script>

<style lang="scss" scoped>
.details{
    width: 100%;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
</style>