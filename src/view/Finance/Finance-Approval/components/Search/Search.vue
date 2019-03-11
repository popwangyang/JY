<template>
	<div class="Search">
		<Form :model="formItem" :label-width="80" inline>
			<FormItem label="场所名称:">
				<Input v-model="formItem.addressName" style="width: 200px;" placeholder="请输入..."></Input>
			</FormItem>
			<FormItem label="状态">
				<Select v-model="formItem.state" style="width: 200px;">
					<Option value="0">全部</Option>
					<Option value="1">确认到账</Option>
					<Option value="2">待确认</Option>
				</Select>
			</FormItem>
			<Button style="margin-left: 30px;" type="primary" @click="searchBtn()">搜索</Button>
		</Form>
		<span>
			<Button icon="md-cloud-download" style="margin-right: 20px;" type="info" @click="exportFile()" >导出数据</Button>
		</span>
	</div>
</template>


<script>
	import './Search.less'
	export default {
		data() {
			return {
                formItem:{
					addressName:"",
					state:"0"
				},				
			}
		},
		methods: {
			searchBtn() {
				this.$emit('searchBtn', this.formItem)
			},
			exportFile(){
				this.$emit('exportFile');
			}
		}
	}
</script>
