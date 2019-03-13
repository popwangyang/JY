<template>
	<div class="box">
		<Form :model="formItem" :label-width="80" inline>
			<FormItem label="品牌名称:">
				<Input v-model="formItem.PinPaiName" style="width: 200px;" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="品牌缩写:">
				<Input v-model="formItem.PinPaiSuoXie" style="width: 200px;" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="启用状态:">
				<Select v-model="formItem.QiYongstate" style="width: 200px;">
					<Option value="0">启用</Option>
					<Option value="1">未启用</Option>
				</Select>
			</FormItem>
			<Button style="margin-left: 30px;" type="primary" @click="searchBtn()">搜索</Button>
		</Form>
		<span>
			<Button icon="md-add" style="margin-right: 20px;" type="primary" @click="addVODFlage = true; $refs.formInline.resetFields();" > 新增</Button>				
			<Button @click="goRZ"> 操作日志</Button>
		</span>
		<Modal
			v-model="addVODFlage"
			title="新建VOD品牌"
			width='400'
			>
			<div style="padding: 0 20px;">
				 <Form :model="formInline" :label-width="100" ref="formInline"  :rules="ruleInline" >
					 <FormItem label="VOD品牌名称：" style='width: 300px;' prop='PinPaiName'>
						<Input v-model="formInline.PinPaiName" :maxlength="10" placeholder="请输入..."></Input>
					</FormItem>
					<FormItem label="品牌缩写：" style='width: 300px;' prop='PinPaiSuoXie'>
						<Input v-model="formInline.PinPaiSuoXie" :maxlength="10" placeholder="请输入..."></Input>
					</FormItem>
					<FormItem label="是否启用：">
						<i-switch v-model="formInline.QiYongstate" size="large">
							<span slot="open">On</span>
							<span slot="close">Off</span>
						</i-switch>
				    </FormItem>
				 </Form>
			</div>
			<div slot='footer'>
				<Button type="primary"  @click="handleSubmit('formInline')">确定</Button>
				<Button @click="handleReset('formInline')">取消</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	export default {
		data(){
			const validatePinPaiName = (rule, value, callback) => {
				if(value === ''){
					callback(new Error('请填写VOD名称')); 
				}else{
				    callback();
				}
			};
			const validatePinPaiSuoXie = (rule, value, callback) => {
				var patt = /^[A-Z]+$/;
				 if (!value) {
                    return callback(new Error('请填写品牌缩写'));
                }else if(!patt.test(value)){
					return callback(new Error('请填写大写字母'));
				}
				setTimeout(() => {
					callback(new Error('该品牌缩写已存在'));
				}, 1000)				
			}
			return {
				addVODFlage:false,
				formItem:{
					PinPaiName:"",
					PinPaiSuoXie:"",
					QiYongstate:""
				},
				formInline:{
					PinPaiName:"",
					PinPaiSuoXie:"",
					QiYongstate:true
				},
				ruleInline:{
					PinPaiName:[
						{ validator: validatePinPaiName, trigger: 'blur' }
					],
					PinPaiSuoXie:[
						{ validator: validatePinPaiSuoXie, trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			searchBtn() {
				this.$emit("searchBtn", this.formItem);
			},
			 handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
						this.addVODFlage = false;
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
				this.addVODFlage = false;
            },
			goRZ(){
				this.$router.push("OperationLog-page")
			}
		},
	}
</script>

<style scoped="scoped">
	.box{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
