<template>
  <div class="footer">
      <ul>
          <li>
              <router-link to="/a">外卖</router-link>
          </li>
          <li>
              <router-link to="/b">搜索</router-link>
          </li>
          <li>
              <router-link to="/c">订单</router-link>
          </li>
          <li>
              <router-link to="/d">我的</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 0.64rem;
    background: #eee;
    position: fixed;
    left: 0;
    bottom: 0;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        li{
            width: 25%;
            text-align: center;
            line-height: 0.64rem;
        }
    }
}
</style>