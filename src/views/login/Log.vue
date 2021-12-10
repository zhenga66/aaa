<template>
  <div class="df-jcc-aic">
    <div class="ta-c">
      <div style="margin: 20vh 0 30px 0;">
        <span class="dl">登录</span>
      </div>
			<!-- 账号 -->
      <div class="por df-aic" :class="iszh == false?'mb-10':''">
        <i class="iconfont poa inp-slt">&#xe603;</i>
        <input type="text" placeholder="请输入账号" @blur="zh_yz" v-model="zhangHao" class="dl-inp"/>
				 <!-- <i class="iconfont red" style="margin-left: 5px;" v-show="is_zh">&#xe626;</i>
				 <i class="iconfont" style="margin-left: 5px;" v-show="!is_zh">&#xe64a;</i> -->
      </div>
			<div class="zh-jg" v-show="iszh">账号必须为6-20位字母和数字组合。</div>
			<!-- 密码 -->
			<div class="por df-aic" :class="ismm == false?'mb-10':''">
			  <i class="iconfont poa inp-slt">&#xe6d4;</i>
			  <input type="password" placeholder="请输入密码" @blur="mm_yz" v-model="miMa" class="dl-inp"/>
			</div>
      <div class="mm-jg" v-show="ismm">密码必须是6-16位数字。</div>
			<!-- 验证码 -->
			<div style="display: flex;">
				<div class="por df-aic">
				  <i class="iconfont poa inp-slt" v-show="yanZheng != identifyCode">&#xebee;</i>
					<i class="iconfont poa" style="left: 6px; font-size: 18px; color: #008A00;" v-show="yanZheng == identifyCode">&#xe610;</i>
				  <input type="text" placeholder="请输入密码" v-model="yanZheng" class="dl-inp2"/>
				</div>
				<div class="login-code" @click="refreshCode">
				  <sidentify :identifyCode="identifyCode"></sidentify>
				</div>
			</div>
			<div class="wjmm"><a :href="wjmm">忘记密码</a></div>
			<!-- 确定 -->
			<div class="dl-qd cs-p" @click="dl_qd">确定</div>
    </div>
  </div>
</template>

<script>
	import sidentify from '@/components/common/sidentify.vue'
	
export default {
  name: "Log",
	components:{
		sidentify
	},
  data() {
    return {
			// 登录
      zhangHao: '',
			miMa: '',
      yanZheng: '',
			iszh: false,
      is_zh: false,
			ismm: false,
			// 验证码
			identifyCodes: '1234567890',
			identifyCode: '',
			code: '',
			wjmm: 'https://qq.yh31.com/tp/zjbq/202011172007027387.gif',
    }
  },
	mounted() {
	  this.makeCode(this.identifyCodes, 4);
	},
	methods:{
		// aaa(aa){
		// 	if (this.zhangHao == '123'){
		// 	  this.is_zh = false
		// 	}else{
		// 	  this.is_zh = true
		// 	}
		// 	console.log(aa)
		// 	console.log(aa.key)
			
		// },
		//验证码
		 randomNum(min, max) {
		     return Math.floor(Math.random() * (max - min) + min);
		 },
		 refreshCode() {
		     this.identifyCode = "";
		     this.makeCode(this.identifyCodes, 4);
		 },
		 makeCode(o, l) {
		    for (let i = 0; i < l; i++) {
		       this.identifyCode += this.identifyCodes[
		         this.randomNum(0, this.identifyCodes.length)
		        ];
		   }
		    console.log(this.identifyCode);
		},
		// 账号验证
		zh_yz(){
		  if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(this.zhangHao)){
		    this.iszh = true
		    this.hah = 1
		  }else{
		    this.iszh=false
		    this.hah = 0
		  }
		},
		// 密码验证
		mm_yz(){
		  if(this.miMa.length < 6 || this.miMa.length > 15){
		    this.ismm=true
		    this.hae = 1
		  }else{
		    this.ismm=false
		    this.hae = 0
		  }
		},
		dl_qd(){
			if(this.zhangHao == '' && this.miMa == ''){
				this.$message({
					message: '账号和密码不得为空',
					type: 'warning'
				});
			}else{
				if(this.zhangHao != 'a111111' || this.miMa != '111111'){
					this.$message({
						message: '账号或者密码错误',
						type: 'error'
					});
				}else if(this.yanZheng == '' || this.identifyCode == ''){
					this.$message({
						message: '验证码不得为空',
						type: 'warning'
					});
				}else if(this.yanZheng != this.identifyCode){
					this.$message({
						message: '验证码错误',
						type: 'error'
					});
				}else{
					this.$message({
						message: '登录成功',
						type: 'success'
					});
					setTimeout(()=>{
						this.$router.push({path:'/', query: {id:'1'}})
					},1000)
				}
			}
			
		}
	}
};
</script>

<style scoped>
  .dl{ color: #0066CC; font-weight: 600; font-size: 22px; border-bottom: 2px solid #0066CC; padding: 10px 30px; }
  .dl-inp{ width: 200px; height: 28px; padding-left: 30px;}
	.dl-inp2{ width: 80px; height: 28px; padding-left: 30px; }
  .inp-slt{ left: 5px; font-size: 20px; }
	.zh-jg{ color: red; margin-bottom: 10px; text-align: left; }
	.mm-jg{ font-size: 14px; margin-bottom: 10px; color: red; text-align: left; }
	.dl-qd{ width: 235px; height: 28px; line-height: 28px; color: #fff; border-radius: 3px;
	 border: none; background-color: #1890FF; margin-top: 10px; }
	.wjmm{ text-align: right; width: 235px; margin: 5px 0 5px 0;}
	/* 验证码 */
	.code{ width: 80px; height: 28px; padding-left: 30px; }
	.login-code{ cursor: pointer; }
	.mb-10{ margin-bottom: 10px; }
</style>