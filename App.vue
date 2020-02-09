<template>
  <div class="app">
	  <Head></Head>
    <div class="content">
		<!-- 内容区域开始 -->
      		<router-view></router-view>
		<!-- 内容区域结束 -->
    </div>
	<Foot></Foot>
  </div>
</template>

<script>
import Head from "./components/Head";
import Foot from "./components/Foot";
export default {
	components:{Head,Foot}
}
</script>

<style lang="scss">
*{
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: border-box;
}
html,body,.app{
	font-size: 16px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.content{
	flex-grow: 1;
	margin-top: 0.64rem;
	margin-bottom: 0.64rem;
}
</style>