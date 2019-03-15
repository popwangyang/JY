<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false" v-if="!isChangePass">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit" @on-change-pass="changePassBtn">
						<div style="display: flex;justify-content: space-between;align-items: center;padding-left: 10px;">
							<Checkbox v-model="automaticLogon" @on-change="automaticLogonBtn">自动登录</Checkbox>
							<Button type="text" style="color: #57a3f3;" @click="changePassBtn">忘记密码</Button>
						</div>
					</login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
			 <Card icon="log-in" :title="forgetTitle" :bordered="false" v-if="isChangePass">
			  <div class="form-con">
			   <ForgetPassWordForm @on-change-title="changeTitle"/>
			  </div>
			</Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import ForgetPassWordForm from '_c/forgetPassWord-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm,
		ForgetPassWordForm
  },
	data(){
		return{
			forgetTitle:"忘记密码",
			isChangePass:false,
			automaticLogon:false,
		}
	},
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      }).catch((err) => {
				this.$Message.error('登录失败!');
			})
    },
		changeTitle(a){
			this.forgetTitle =  a == 1 ?  '忘记密码':'新密码设置'
		},
		changePassBtn(){
			this.isChangePass = true;
		},
		automaticLogonBtn(e){
			let code = e ? 0:1;
			localStorage.setItem('automaticLogon', code);
		}
  },
	mounted(){
		
	}
}
</script>

<style>

</style>
