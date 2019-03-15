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
		<div style="display: flex;justify-content: center;">
			<Button type="text" style="color: #57a3f3;">已有账号？登录</Button>				 
		</div>
    </Form>	
</template>
<script>
	import { getIdentifyungCode, testIdentifyungCode } from "@/api/user"
	import TimeoutComponent  from './timeoutComponent'
    export default {
		components:{ TimeoutComponent },
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
						testIdentifyungCode(this.formInline.password).then((res) => {
							console.log(res)
							this.loading2 = false;
							this.$Message.success('Success!');
							this.$emit("on-change-step", 2)
						}).catch((err) => {
							this.loading2 = false;
							this.$Message.error("验证失败，请重新验证！")
						})
                    }
                })
            },
			getIdentifyungCode(){
				this.loading1 = true;
				getIdentifyungCode().then((res) => {
					console.log(res)
					this.loading1 = false;
					this.changeTimeOut(true);
				})
			},
			changeTimeOut(flage){
				this.showTimeOut = flage;
			}
        }
    }
</script>
