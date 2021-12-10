<!-- 财务公告 -->
<template>
	<div>
    <public-notice :gongGao="gongGao">
      <template #biao-ti>
        财务公告
      </template>
			<template #xin-z>
				<div class="xing-z" @click="xin_z">新增</div>
			</template>
			<template #neir>
				<div style="margin-top: 10px;" v-for="(item, index) in gongGao" v-if='index < zhangK'>
					<div style="padding: 0px 20px">
						<div class="df-jcsb-aic" style="margin-bottom: 5px;">
							<div style="font-size: 17px;">{{item.title}}</div>
							<div style="color: #666666">{{shijian}}</div>
						</div>
						<div class="cao-z">
							<div style=" border: 1px solid #1890FF; color: #1890FF; padding: 2px 5px; border-radius: 3px;">重新发布</div>
							<div style="color: red; background-color: #F56C6C; padding: 2px 5px; border-radius: 3px; color: #fff;">删除</div>
						</div>
					</div>
					<!-- 分割线 -->
					<div style="margin: 10px 0 10px 0;">
						<div class="demo_line_02">
							<span></span>
						</div>
					</div>
				</div>
			</template>
    </public-notice>
		<div style="text-align: center; cursor: pointer;">
			<span style="padding: 2px 10px; border-radius: 3px; font-weight: 600; color: #1890FF;" @click="geng_d">{{zksq}}</span>
		</div>
	</div>
</template>

<script>
  import publicNotice from '@/components/content/publicNotice'

	export default {
	  name: 'lsNotice',
    components:{
      publicNotice
    },
	  data(){
		 return{
			 zhangK: 3,
			 zksq: '更多...',
			 iszzc: false,
			 shijian: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
       gongGao: [
         {title: '我是历史标题1', img: '我是图片1',},
         {title: '我是历史标题2', img: '我是图片2',},
         {title: '我是历史标题3', img: '我是图片3',},
         {title: '我是历史标题4', img: '我是图片4',},
         {title: '我是历史标题5', img: '我是图片5',},
         {title: '我是历史标题6', img: '我是图片6',},
       ]
		 }
	  },
		methods:{
			geng_d(){
				if(this.zksq == '更多...'){
					this.zhangK = this.gongGao.length;
					this.zksq = '收起';
					console.log(this.gongGao.length)
				}else{
					this.zhangK = 3;
					this.zksq = '更多...';
				}
			},
			xin_z(){
				this.iszzc = true
				// console.log(this.title)
				// this.gongGao.push()
			},
		}
	}
</script>

<style scoped>
	.demo_line_02{ height: 1px; border-top: 1px solid #ddd; text-align: center; width: 97%; margin: 0 auto;}
	.demo_line_02 span{ position: relative; top: -8px; background: #fff;/* padding: 0 20px; */ }
	.xing-z{ border: 1px solid #F56C6C; color: #F56C6C; line-height: 25px; padding: 0 10px 0 10px;
	         margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 14px;}
</style>
