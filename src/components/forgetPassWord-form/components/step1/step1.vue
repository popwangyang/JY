<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="请输入邮箱">
                <Icon type="ios-at-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" >
			<div style="display: flex;justify-content: space-between;">
				 <Input type="text" v-model="formInline.password" placeholder="验证码" style="width: 50%;">
				    <Icon type="ios-lock-outline" slot="prepend"></Icon>
				</Input>
				<Button type="primary">获取验证码</Button>
			</div>          
        </FormItem>
        <FormItem>
            <Button type="primary"  @click="handleSubmit('formInline')" long>确认</Button>
        </FormItem>
		<div style="display: flex;justify-content: center;">
			<Button type="text" style="color: #57a3f3;">已有账号？登录</Button>				 
		</div>
    </Form>	
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
						this.$emit("on-change-step", 2)
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
