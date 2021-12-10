<template>
	<div class="hade df-jcsa-aic">
		<h2>邦胜</h2>
		<div class="hade-y dis-f cs-p">
			<div class="hade-it">首页</div>
			<div class="hade-it">管理</div>
			<div @click="hade_dl" class="cs-p">
				<div class="hade-it" style="font-size: 12px; color: peachpuff;" v-show="$route.query.id == 1">已登录</div>
				<div class="hade-it" style="font-size: 14px; color: #DBD317;" v-show="$route.query.id != 1">去登录</div>
				<!-- <div>登录</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "hoHade",
	data(){
		return{
			
		}
	},
	methods:{
		hade_dl(){
			if(this.$route.query.id != 1){
				this.$router.push('/log')
			}
		}
	}
}
</script>

<style scoped>
	.hade{ color: #fff; line-height: 6vh; }
	.hade-y{ font-size: 16px;}
	.hade-it{ padding: 0 20px; margin-right: 5px; height: 6vh; }
	.hade-it:hover{ background-color: #0066CC; }
</style>