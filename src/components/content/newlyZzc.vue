<!-- 添加公告遮罩层 -->
<template>
	<div class="zzc-bj">
		<div class="zzc-k">
			<!-- 头部 -->
			<div class="zzc-tb">
				<slot name="xz"></slot>
				<!-- <div>- 新增 -</div> -->
				<div class="cs-p" @click="gb_zzc">x</div>
			</div>
			<div style="padding: 15px 20px; font-size: 16px; font-weight: 600;">
				<!-- 标题 -->
				<div style="display: flex; align-items: center;">
					<div style="margin-right: 20px;"><span class="xing">* </span>标题</div>
					<div>
						<slot name="inp"></slot>
					</div>
				</div>
				<!-- 内容 -->
				<div style="margin-top: 30px;">
					<div><span class="xing">* </span>内容</div>
					<div style="margin-left: 60px;">
						<!-- 图片 -->
<!-- 						<el-upload
						  action="https://jsonplaceholder.typicode.com/posts/"
						  list-type="picture-card"
						  :on-preview="handlePictureCardPreview"
						  :on-remove="handleRemove">
						  <i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
						  <img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog> -->
						<slot name="tpsc">
							
						</slot>
						
					</div>
				</div>
			</div>
			<div>
				<slot name="db"></slot>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
	  name: '',
	  data(){
		 return{
			
		 }
	  },
		methods:{
		 gb_zzc(){
			 this.$emit('gb_zzc', false)
		 },

		 
		}
	}
</script>

<style scoped>
	.zzc-bj{ background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; z-index: 100;
	 top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center;}
	.zzc-k{ width: 800px; height: 500px; background-color: #fff; border-radius: 4px; position: relative;}
	.zzc-tb{ width: 800px; height: 30px; background-color: #1890FF; border-radius: 3px 3px 0 0; 
	 color: #fff; display: flex; justify-content: space-between; align-items: center; padding: 0 10px; font-size: 16px;}
	.xing{ color: red; }
	
	
	
</style>
