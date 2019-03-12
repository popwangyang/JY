<template>
	<div class="userSearch">
		<Form :model="formItem" :label-width="80" inline>
			<FormItem label="员工名称:">
				<Input v-model="formItem.EmployeeName" style="width: 200px;" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="在职状态:">
				<Select v-model="formItem.onJobStatus" style="width: 200px;">
					<Option value="0">全部</Option>
					<Option value="1">在职</Option>
					<Option value="2">离职</Option>
				</Select>
			</FormItem>
			<Button style="margin-left: 30px;" type="primary" @click="searchBtn()">搜索</Button>
		</Form>
		
		<span>
			<Button icon="md-add" style="margin-right: 20px;" type="info" @click="addEmployee()" >新增</Button>
		    <Button>操作日志</Button>
		</span>
	</div>
</template>

<script>
	import './Search.less'
	export default {
		data(){
			return{
				formItem:{
					EmployeeName:"",
					onJobStatus:"0"
				},	
			}
		},
		methods: {
			searchBtn() {
				this.$emit("SearchBtn", this.formItem)
			},
			addEmployee(){
				this.$router.push("addEmployee-page")
			}
		},
	}
</script>

<style>
</style>
