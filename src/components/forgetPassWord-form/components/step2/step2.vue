<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="password1">
            <Input type="password" v-model="formInline.password1" placeholder="请输入6-20位新密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password2">
            <Input type="password" v-model="formInline.password2" placeholder="再次输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" long :loading="loading">确认</Button>
        </FormItem>
		<BackLogin @on-back-login="onBackLogin"/>
    </Form>
</template>
<script>
	import BackLogin from '../backLogin'
	import { ConfirmToModifyTheNewPassword } from '@/api/user'
     export default {
		components:{ BackLogin },
		props:{
			username:"",
			code:""
		},
        data () {
            const validatePass = (rule, value, callback) => {
                var patt = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/

				  if (value === '') {
					callback(new Error('请填写密码'))
				  } else if (!patt.test(value)) {
					callback(new Error('密码格式不正确'))
				  } else {
					if (this.formInline.password2 !== '') {
					  // 对第二个密码框单独验证
					  this.$refs.formInline.validateField('password2')
					}
					callback()
				  }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
					callback(new Error('请再次输入密码'))
				  } else if (value !== this.formInline.password1) {
					callback(new Error('两次密码输入不一致!'))
				  } else {
					callback()
				  }
            };
            return {
                formInline: {
					password1: '',
					password2: ''
				  },
                 ruleInline: {
					password1: [
					  { validator: validatePass, trigger: 'blur' }
					],
					password2: [
					  { validator: validatePassCheck, trigger: 'blur' }
					]
				  },
				  loading:false
            }
        },
        methods: {
            handleSubmit (name) {
				this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
						var send_data = {
							username: this.username,
							code: this.code,
							password:this.formInline.password1
						}
						ConfirmToModifyTheNewPassword(send_data).then((res) => {							
					        this.$Message.success('密码修改成功, 请重新登录');
						    this.loading = false;
							this.$emit("on-back-login")
						}).catch((err) => {
							this.$Message.error('密码修改失败, 请稍后重试!');
							this.loading = false;
						})                       
                    } else {
                        this.$Message.error('密码格式不正确!');
						this.loading = false;
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
			onBackLogin(){
				this.$emit("on-back-login")
			}
        }
    }
</script>

