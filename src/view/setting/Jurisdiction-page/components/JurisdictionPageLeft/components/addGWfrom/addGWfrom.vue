<template>
	<div style="padding: 0 40px;">
		 <Form ref="formValidate" :model="formItem" :rules="ruleValidate" :label-width="100">
			  <FormItem label="岗位名称：" prop="GWname">
				   <Input v-model="formItem.GWname" placeholder="请输入..."></Input>
			  </FormItem>
			  <FormItem label="岗位描述：" prop="GWdescribe">
			  		<Input v-model="formItem.GWdescribe" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入..."></Input>
			  </FormItem>
			  <FormItem label="是否启用：" prop="isEnable">
				<i-switch v-model="formItem.isEnable" size="large">
					<span slot="open">On</span>
					<span slot="close">Off</span>
				</i-switch>
              </FormItem>
		</Form> 
	</div>
</template>

<script>
	export default {
		data(){
			return{
				formItem:{
					GWname:"",
					GWdescribe:"",
					isEnable:false
				},
				ruleValidate:{
					GWname:[
                        { required: true, message: '请填写岗位名称', trigger: 'blur' }
                    ],
					
				}
			}
		},
		methods: {
			handleSubmit () {
                this.$refs.formValidate.validate((valid) => {
                    if (valid) {
                        // this.$Message.success('Success!');
						this.$emit("showFlage", false)
						console.log(this.formItem)
						
						
                    } else {
                        // this.$Message.error('Fail!');
						this.$emit("showFlage", true)
                    }
                })
            },
			handleReset () {
				console.log("ppppp")
                this.$refs.formValidate.resetFields();
            }
		},
	}
</script>

<style>
</style>
