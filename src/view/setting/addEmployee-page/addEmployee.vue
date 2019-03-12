<template>
	<div class="addEmployee">
		<Form :model="formItem" :label-width="80">
			<FormItem label="姓名: ">
                <Input v-model="formItem.name" placeholder="Enter something..."></Input>
            </FormItem>
			<FormItem label="性别: ">
				<RadioGroup v-model="formItem.sex">
					<Radio label="male">Male</Radio>
					<Radio label="female">Female</Radio>
				</RadioGroup>
             </FormItem>
			<FormItem label="岗位: ">
			    <Input v-model="formItem.quarters" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="邮箱: ">
			    <Input v-model="formItem.email" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="手机: ">
			    <Input v-model="formItem.phone" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="在职状态: ">
			    <Input v-model="formItem.onJobState" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="数据范围: ">
			    <Input v-model="formItem.dataRange" placeholder="Enter something..."></Input>
			</FormItem>
		</Form>
	</div>
</template>

<script>
	import './addEmployee.less'
	export default{
		data(){
			return{
				formItem:{
					name:"",
					sex:"",
					quarters:"",
					email:"",
					phone:"",
					onJobState:"",
					dataRange:""
				}
			}
		}
	}
</script>

<style>
</style>
