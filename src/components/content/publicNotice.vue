<!-- 公告加查询新增 -->
<template>
	<div>
		<!-- 标题 -->
		<div class="df-jcsb-aic dis-f">
      <h2><slot name="biao-ti"></slot></h2>
			<div class="df-aic">
				<!-- 新增 -->
				<div style="position: relative; display: flex; align-items: center;">
					<input type="text" placeholder="请输入公告标题" style="height: 21px; width: 110px; padding: 0 20px 0 10px;" v-model="chaXun">
					<i style="position: absolute; right: 5px;" class="iconfont cs-p" v-show="chaXun != ''" @click="qk_cx">&#xe606;</i>
				</div>
				<div @click="cha_xun" class="df-aic cs-p" style="background-color: #FF6600; line-height: 25px; padding: 0 5px 0 5px; color: #fff; margin-left: 10px; border-radius: 3px; font-size: 14px;">
				  <i class="iconfont" style="margin:2px 3px 0 0; font-size: 14px;">&#xe605;</i>
					<slot name="cha-x"></slot>
				  <div>查询</div>
					<!-- <el-button :plain="true" @click="open3">查询</el-button> -->
				</div>
				<slot name="xin-z"></slot>
			</div>
      <!-- <div class="geng-duo cs-p">更多</div> -->
			
		</div>
		<!-- 分割线 -->
		<div class="jian-ge"></div>
		
		<!-- 内容 -->
		<slot name="neir"></slot>
		
	</div>
</template>

<script>
	export default {
	  name: 'publicNotice',
		// props:{
		// 	gongGao: Array,
		// },
	  data(){
		 return{
			 chaXun: '',
		 }
	  },
		methods:{
			// 传值到行政公告
			cha_xun(){
				this.$emit('cha_x', this.chaXun)
				// console.log('cha_x', this.chaXun)
			},
			// 清空查询
			qk_cx(){
				this.chaXun = ''
			}
			// aaa(){
			// 	console.log(111)
			// },
			// open3() {
			// 	console.log(this.gongGao)
			// 	if(this.gongGao.length<1){
			// 		this.$message({
			// 		    message: '警告哦，这是一条警告消息',
			// 		    type: 'warning'
			// 		  });
			// 		}
			// 	}
			       
		}
	}
</script>

<style scoped>
	.geng-duo{
		margin-right: 20px; border-radius: 3px; border: 1px solid #999999; padding: 5px 10px; 
	}
	.geng-duo:hover{background: #D3D3D3;}
	.jian-ge{ background-color: #D6E2ED; width: 100%; height: 2px; margin-top: 10px; }

	.cao-z{display: flex; justify-content: flex-end; font-size: 14px;}
	.cao-z div{margin-left: 10px; cursor: pointer;}
</style>
