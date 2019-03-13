<template>
	<div class="addEmployee">
		<div class="box0">
			 <Button @click="goRZ">操作日志</Button>
		</div>
		<div class="box">
			<Form :model="formItem" :rules="ruleInline" ref="formValidate" :label-width="80">
				<FormItem label="姓名: " prop="name">
			        <Input :disabled="disabled" v-model="formItem.name" placeholder="请输入..."></Input>
			    </FormItem>
				<FormItem label="性别: " prop="sex">
					<RadioGroup  v-model="formItem.sex">
						<Radio :disabled="disabled" label="male">男</Radio>
						<Radio :disabled="disabled" label="female">女</Radio>
					</RadioGroup>
			     </FormItem>
				<FormItem label="岗位: " prop="quarters">
					<Select v-model="formItem.quarters" multiple>
						<Option v-for="item in quartersList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem  label="邮箱: " prop="email">
				    <Input :disabled="disabled" v-model="formItem.email" :maxlength="100"  placeholder="请输入..."></Input>
				</FormItem>
				<FormItem label="手机: " prop="phone">
				    <Input v-model="formItem.phone" :maxlength="11" placeholder="请输入..."></Input>
				</FormItem>
				<FormItem label="在职状态: " prop="onJobState">
					<Select v-model="formItem.onJobState">
						<Option value="0">在职</Option>
						<Option value="1">离职</Option>
					</Select>
			    </FormItem>
				<FormItem label="数据范围: ">
				    <DataRage/>
				</FormItem>
				
				 <FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
				 </FormItem>
			</Form>
		</div>
		
	</div>
</template>

<script>
	import './addEmployee.less'
	import DataRage from './components/dataRange'
	export default{
		components:{ DataRage },
		data(){
			return{
				disabled:false,
				quartersList:[
					{
                        value: '小兵',
                        label: '小兵'
                    },
					{
					    value: '大兵',
					    label: '大兵'
					},
					{
					    value: '混混',
					    label: '混混'
					},
					{
					    value: '带头大哥',
					    label: '带头大哥'
					},
					{
					    value: '帮主',
					    label: '帮主'
					}
				],
				formItem:{
					name:"",
					sex:"male",
					quarters:[],
					email:"",
					phone:"",
					onJobState:"0",
					dataRange:[]
				},
				ruleInline:{
					name:[
						{ required: true, message:'员工姓名不能为空', trigger: 'blur'}
					],
					sex:[
						{ required: true, trigger: 'blur'}
					],
					quarters: [
						{ required: true, message: '需要给该员工分配一个岗位角色', trigger: 'blur', type:'array'},
						
					],
					email: [
						{ required: true, message: '员工邮箱不能为空', trigger: 'blur'}
					],
					phone: [
						{ required: false, message: '员工邮箱不能为空', trigger: 'blur'}
					],
					onJobState: [
						{ required: false, message: '员工邮箱不能为空', trigger: 'blur'}
					]
				}
			}
		},
		methods: {
			handleSubmit (name) {
                this.$refs[name].validate((valid) => {
					console.log(this.formItem)
                    if (valid) {
                        this.$Message.success('保存成功!');
                    } else {
                        this.$Message.error('保存失败!');
                    }
                })
            },
            handleReset (name) {
				if(this.formItem.name == "" && 
					this.formItem.sex == "male" &&
					this.formItem.quarters.length == 0 && 
					this.formItem.email == "" && 
					this.formItem.phone == "" && 
					this.formItem.onJobState == "0" &&
					this.formItem.dataRange.length == 0){	
					
				}else{
					this.$Modal.confirm({
					    title: '提示',
					    content: '<p>确定放弃编辑的内容吗？</p>',
					    onOk: () => {
					        this.$refs[name].resetFields();
					    },
					    onCancel: () => {
					        
					    }
					});
				}  
            },
			goRZ(){
				this.$router.push("OperationLog-page")
			}
		},
		mounted(){
			
			if(Object.keys(this.$route.query).length > 0){
				this.disabled = true;
				console.log(this.$route.query, "ssssssssssssssssss")
			}
		}
	}
</script>

<style>
</style>
