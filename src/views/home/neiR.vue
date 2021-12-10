<template>
	<div class="neir">
		<div class="neir-p"  style="overflow:auto; height: 100%;">
			<div>
				<!-- 行政公告 -->
				<xz-notice></xz-notice>
			</div>
			<div>
				<!-- 组织架构 -->
				<zzjg-notice></zzjg-notice>
			</div>
			<div>
				<!-- 管理制度 -->
				<glzd-notice></glzd-notice>
			</div>
			<div>
				<!-- sop公告 -->
				<sop-notice></sop-notice>
			</div>
			<div>
				<!-- 邮件分机 -->
				<yjfj-notice></yjfj-notice>
			</div>
		</div>
		 
	</div>
</template>

<script>
	import xzNotice from './notice/xzNotice.vue'
	import zzjgNotice from './notice/zzjgNotice.vue'
	import glzdNotice from './notice/glzdNotice.vue'
	import sopNotice from './notice/sopNotice.vue'
	import yjfjNotice from './notice/yjfjNotice.vue'
	
	export default {
	  name: 'neiR',
		components:{
			xzNotice,
			zzjgNotice,
			glzdNotice,
			sopNotice,
			yjfjNotice
		},
	  
	}
</script>

<style scoped>
	.neir{ background-color: #fff; height: 100%; width: 80%; margin: 0 auto;}
	.neir-p{ padding: 20px 15px; }
</style>
