<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="email">
            <Input type="text" v-model="formInline.email" placeholder="请输入邮箱">
                <Icon type="ios-at-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" >
			<div style="display: flex;justify-content: space-between;">
				 <Input type="text" :maxlength="4" v-model="formInline.password" placeholder="验证码" style="width: 50%;">
				    <Icon type="ios-lock-outline" slot="prepend"></Icon>
				</Input>
				<Button type="primary" @click="getIdentifyungCode" :loading="loading1" v-if="!showTimeOut" :disabled="!disabled1">获取验证码</Button>
				<TimeoutComponent ref="TimeOut" @on-time-out="changeTimeOut" v-if="showTimeOut"/>
			</div>          
        </FormItem>
        <FormItem>
            <Button type="primary"  @click="handleSubmit('formInline')" long :disabled="!disabled2" :loading="loading2">确认</Button>
        </FormItem>
		<BackLogin @on-back-login="onBackLogin"/>
    </Form>	
</template>
<script>
	import { getIdentifyungCode, testIdentifyungCode } from "@/api/user"
	import TimeoutComponent  from './timeoutComponent'
	import BackLogin from '../backLogin'
    export default {
		components:{ TimeoutComponent, BackLogin },
        data () {
            return {
                formInline: {
                    email: '',
                    password: ''
                },
                ruleInline: {
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'click' },
						{ type: 'email', message: '邮箱格式不正确', trigger: 'click' }
                    ],
                    password: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { type: 'string', min: 4, message: '验证码格式不正确', trigger: 'click' }
                    ]
                },
				loading1:false,
				loading2:false,
				showTimeOut:false,
				
            }
        },
		computed: {
			disabled1() {	
				var patt = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
				console.log(patt.test(this.formInline.email))
				return  patt.test(this.formInline.email)
			},
			disabled2() {				
				return  (this.formInline.email!="" && this.formInline.password!="")
			}
		},
        methods: {
            handleSubmit(name) {
				this.loading2 = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
						var send_data = {
							username:this.formInline.email,
							code:this.formInline.password
						}
						testIdentifyungCode(send_data).then((res) => {
							console.log(res,"ppppppppppp")
							if(this.$refs.TimeOut){
								this.$refs.TimeOut.clearTime();
							}							
							this.loading2 = false;
							this.$Message.success('Success!');
							this.$emit("on-change-step", { step:2, username:this.formInline.email, code:this.formInline.password });							
						}).catch((err) => {
							this.loading2 = false;
							this.$Message.error("验证失败，请重新验证！")
						})
                    }else{
						this.loading2 = false;
					}
                })
            },
			getIdentifyungCode(){
				this.loading1 = true;
				getIdentifyungCode(this.formInline.email).then((res) => {
					console.log(res)
					this.loading1 = false;
					this.changeTimeOut(true);
					this.$Message.success('验证码已发送到你的邮箱，请注意查收!');
				}).catch((err) => {
					this.loading1 = false;
					this.$Message.error('获取验证码失败，请重新获取！');
				})
			},
			changeTimeOut(flage){
				this.showTimeOut = flage;
			},
			onBackLogin(){
				if(this.$refs.TimeOut){
					this.$refs.TimeOut.clearTime();
				}	
				this.$emit("on-back-login")				
			}
        }
    }
</script>
