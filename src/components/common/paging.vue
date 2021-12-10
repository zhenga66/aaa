<!-- 分页 -->
<template>
	<div style="margin: 0px 0 20px 0;">
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 20, 50]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="xz_zy.length">
		</el-pagination>
	</div>
</template>

<script>
	export default {
	  name: 'paging',
		props:{
			xz_zy: Array,
			currentPage: Number,
			pageSize: Number
		},
	  data(){
			return {
				 // currentPage: 1,
				 // pageSize: 5
			};
	  },
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.$emit("my",val)
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.$emit("dqy",val)
			}
		},
	}
</script>

<style scoped>
	
</style>
