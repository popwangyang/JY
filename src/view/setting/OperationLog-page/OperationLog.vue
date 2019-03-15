<template>
	<div class="OperationLog">
		<div class="box1">
			<span style="font-size: 16px;display: inline-block;margin: 0px 20px 20px 20px; font-weight: bold;">操作日志</span>
			<TableComponent :data="data" />
		</div>
		<div class="box2">
			<span>总共 {{this.data.length}} 个项目 </span>
			<Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" />
		</div>
	</div>
</template>

<script>
	import './OperationLog.less'
	import TableComponent from './components/Table'
	export default {
		components: {
			TableComponent
		},
		data() {
			return {
				pageIndex: 1,
				pageSize: 10,
				data: [{
						name: '001',
						age: '2018.12.12 11:34',
						address: '姓名(职位)',
						date: '新增VOD品牌xxx（名称）'
					}

				]
			}
		},
		methods: {
			pageChange(index) {
				console.log(index);
				this.pageIndex = index;
			},
			pageSizeChange(size) {
				this.pageIndex = 1;
				this.pageSize = size;
			}
		},
		mounted() {
			var arr = new Array(10);
			for (var i = 0; i < arr.length; i++) {
				arr[i] = Object.create(this.data[0])
			}
			this.data = arr;
		}
	}
</script>

<style>
</style>
