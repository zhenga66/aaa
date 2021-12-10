<!-- 行政公告 -->
<template>
	<div>
		<!-- {{this.$route.query.id}} -->
		<public-notice @cha_x="cha_x">
      <template #biao-ti>
        行政
      </template>
      <template #xin-z>
				<div class="xing-z" @click="xin_z" v-show="$route.query.id == 1">新增</div>
      </template>
			<template #neir>
				<div>
					<div style="margin-top: 10px;" v-for="(item, index) in gongGao.slice((currentPage- 1)*pageSize,currentPage*pageSize)">
						<div style="padding: 0px 20px">
							<div class="df-jcsb-aic" style="margin-bottom: 5px;">
								<div class="biao-ti" @click="biao_ti(item,index)">{{item.title}}</div>
								<div style="color: #666666 font-size: 14px; font-weight: 600;">
									{{item.time}}
								</div>
							</div>
							<!-- 隐藏 -->
							<div style="display: flex; display: none;">
								<div class="biao-tia" v-for="ite in item.srcList" style="margin-right: 5px;">
									<el-image 
										style="width: 50px; height: 50px"
										:src="ite"
										:preview-src-list="imurl">
									</el-image>
								</div>
							</div>
							
					<!-- 		<div class="cao-z" v-show="$route.query.id == 1">
								<div style="border: 1px solid #1890FF; color: #1890FF; padding: 2px 5px; border-radius: 3px;">重新发布</div>
								<div style="color: red; background-color: #F56C6C; padding: 2px 5px; border-radius: 3px; color: #fff;">删除</div>
							</div> -->
						</div>
						<!-- 分割线 -->
						<div style="margin: 10px 0 10px 0;">
							<div class="demo_line_02">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div v-show="gongGao.length<1" style="text-align: center; padding: 20px 0 20px 0; font-size: 18px;">
					<p>数据为空</p>
				</div>
			</template>
    </public-notice>
		<!-- 更多 -->
		<!-- <div v-show="gongGao.length>0" style="text-align: center; cursor: pointer; margin-bottom: 5px;">
			<span style="padding: 2px 10px; border-radius: 3px; font-weight: 600; color: #1890FF;" @click="geng_d">{{zksq}}</span>
		</div> -->
		<!-- 分页 -->
		<div style="text-align: center; margin-top: 20px;">
			<paging :xz_zy="gongGao" :currentPage="currentPage" :pageSize="pageSize" @my="my" @dqy="dqy"></paging>
		</div>
		<!-- 遮罩层 -->
		<div>
			<newly-zzc @gb_zzc="gb_zzc" v-show="iszzc">
				<template #xz>
					<div style="font-size: 14px;">新增</div>
				</template>
				<!-- 标题输入框 -->
				<template #inp>
					<input class="bookName" type="text" v-model="title" style="font-size: 14px;"/>
				</template>
				<!-- 图片上传 -->
				<template #tpsc>
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
						:on-success="sc_hq"
					  :on-remove="handleRemove">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
					  <img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</template>
				<template #db>
					<div class="db">
						<!-- <div class="db_yl db-cf">清空</div> -->
						<div class="db_fbgg db-cf" @click="fbgg">发布公告</div>
					</div>
				</template>
			</newly-zzc>
			<!-- <div @click="aaa">保存数据到本地</div> -->
		</div>
	</div>
</template>

<script>
	import publicNotice from '@/components/content/publicNotice'
	import newlyZzc from '@/components/content/newlyZzc'
	import paging from '@/components/common/paging'
	import axios from 'axios'
	
	export default {
	  name: 'zxNotice',
		components:{
			publicNotice,
			newlyZzc,
			paging
		},
	  data(){
		 return{
			 // zhangK: 3,
			 zksq: '更多...',
			 iszzc: false,
			 shijian: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
			 gongGao: [
				 
			 ],
			 gongGao2: [],
			 gongGao3: [
				 {
					 title: '行政公告3',
					 srcList: [
						'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
						'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					 ],
				 },
			 ],
			 title: '',
			 dialogImageUrl: '',
			 dialogVisible: false,
			 src: "",
			 imageUrl: [],
			 imurl: [''],
			 currentPage: 1,
			 pageSize: 5,
			 bbb: {
				 name: 18
			 }
			 // isdl: false,
			 // gongGaoInd: '',
			 // isneiR: true
			 // srcList: [
			 // 	// '../../static/images/ask.jpg',
			 // 	'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
			 // 	'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
			 //  ],
		 }
	  },
		created() {
			
			this.jsj()
			// this.aaa()
		},
		methods:{
			jsj(){
				axios.get('http://192.168.10.120:89/user',{
					
				}).then( res => {
					// console.log(res)
					this.gongGao = res.data
					this.gongGao2.push(res.data)
				})
				// console.log(this.gongGao2)
			},
			// aaa(){
			// 	// var appData = require('../../assets/data/data.json');
			// 	// 						console.log(appData)
			// 	var appData = require('../../assets/data/data.json');
			// 	// var a = JSON.stringify(appData)
			// 	// var b = JSON.parse(a)
			// 	// console.log(a)
			// 	// console.log(b)
			// 	// this.imurl = item.srcList
			// 	this.gongGao = appData.gongGao
			// 	// console.log(this.gongGao)
			// 	console.log(this.imurl)
				
				
			// },
			// 每页
			my(da){
				console.log(da)
				this.pageSize = da
			},
			// 当前页
			dqy(da){
				console.log(da)
				this.currentPage = da
			},
			// 上传获取图
			sc_hq(response, file, fileList){
				var aa = []
				for(var i=0; i<fileList.length; i++){
					aa.push(fileList[i].url)
				}
				this.imageUrl = aa
			},
			// 查询
			cha_x(mod){
				// console.log(this.gongGao2[0])
				var tableDate = this.gongGao2[0];
				var newDate = [];
				tableDate.filter( item => {
					var isMingZi = true;
					if(mod != ""){
					 if(item.title.indexOf(mod) == -1){
						 isMingZi = false;
					 }
					}
					if(isMingZi){
					 newDate.push(item)
					}		
				})
				if(newDate == ''){
					this.open3()
					this.gongGao = newDate
				}else{
					this.gongGao = newDate
					// console.log(this.gongGao)	 
				}		
			},
			open3(){
				this.$message({
					message: '查询为空',
					type: 'warning'
				});
			},
			// 标题
			biao_ti(item,index){
				// console.log(this.gongGao)
				// console.log(index)
				// console.log(item.srcList)
				// for(let i=0; i<this.gongGao.length; i++){
				// 	// console.log(this.gongGao[i].srcList)
				// }
				this.imurl = item.srcList
				document.querySelector(".biao-tia").firstChild.firstChild.click()
				// console.log(this.imurl)
			},
			// 更多
			// geng_d(){
			// 	if(this.zksq == '更多...'){
			// 		this.zhangK = this.gongGao.length;
			// 		this.zksq = '收起';
			// 		console.log(this.gongGao.length)
			// 	}else{
			// 		this.zhangK = 3;
			// 		this.zksq = '更多...';
			// 	}
			// },
			// 新增
			xin_z(){
				if(this.$route.query.id == 1){
					this.iszzc = true
				}else{
				this.$message({
					message: '你还没有权限哦，请去登录呢！',
					type: 'warning'
				});
				}	
			},
			// 关闭遮罩层
			gb_zzc(data){
				this.iszzc = data
			},
			// 发布公告
			fbgg(){
				if(this.title != '' && this.imageUrl != ''){
					let tit = {
						title: '',
						srcList: []
					}
					console.log(this.imageUrl)
					tit.title = this.title
					// tit.img = this.src
					tit.srcList = this.imageUrl
					this.gongGao.push(tit)
					this.iszzc = false
				}else{
					this.$message({
						message: '标题和公告必须要添加哦',
						type: 'warning'
					});
				}
			},
		
			handleRemove(file, fileList) {
			},
			 // handlePictureCardPreview(file) {
				//  this.dialogImageUrl = file.url;
				//  this.dialogVisible = true;
			 // },
			// afterRead() {
			//  let that = this;
			 
			//  let file = this.$refs.updata.files[0];
			//  //   console.log(file);
			//  var reader = new FileReader();
			//  reader.readAsDataURL(file);
			//  reader.onload = function (e) {
			// 	 //   console.log(e);
			// 	 that.src = this.result;//显示缩略图
			// 	 // console.log(this.result);
			//  }
			// },
			
		}
	}
</script>

<style scoped>
	.xing-z{ border: 1px solid #F56C6C; color: #F56C6C; line-height: 25px; padding: 0 10px 0 10px;
         margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 14px; }
	/* 遮罩层底部	 */
	.db{  display: flex; justify-content: center; align-items: ; margin: 80px 0px 20px 0; }
	.db-cf{  padding: 5px 10px; border-radius: 3px; cursor: pointer;}
	.db_yl{ border: 1px solid #FF6600; margin-right: 20px; color: #FF6600;}
	.db_fbgg{ background-color: #F56C6C;color: #fff; width: 100px; display: flex;
          justify-content: center; position: fixed; bottom: 20%;}
	.demo_line_02{ height: 1px; border-top: 1px solid #ddd; text-align: center; width: 100%; margin: 0 auto;}
	.demo_line_02 span{ position: relative; top: -8px; background: #fff;/* padding: 0 20px; */ }
	/* .jian-ge{width: 98%; text-align:center; border-bottom:2px dashed #666666;} */
	/* 图片上传 */
	.uploader { display: none;	width: 160px;	}
	.laber-up { /* width: 160px; */  height: 8rem; /* background: skyblue; */ /* margin-bottom: 0.4rem; */}
	.laber-up>div{ width: 100%;	height: 100%;	border: 1px solid #666666;border-radius: 5px;	display: flex;
		flex-direction: column;	justify-content: center; align-items: center;	color: #ccc; position: relative;}
	.laber-up>div>p{ font-size: 0.4rem;position: absolute; top: 2.6rem; color: #333; }
	.laber-up>div>img{ width: 100%;	height: 100%; border-radius: 5px; }
	.delog{	text-align: right; }
	.bookName{width: 280px; height: 26px; }
	.biao-ti{ font-size: 16px; width: 550px; cursor: pointer; font-weight: 600; white-space:nowrap; /*文本不换行*/
	        text-overflow:ellipsis;/*设置超出部分显示...*/-o-text-overflow:ellipsis;overflow: hidden;}
</style>
