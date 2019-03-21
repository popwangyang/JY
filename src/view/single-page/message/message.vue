<template>
	<div class="messageBox">
		<div class="box1">
			<Search @getMessageList="selectData"/>
		</div>
		<div class="box2">
			<TableComponent :data="data" :loading="loading"/>
		</div>
		<div class="box3">
			<span>总共 {{this.data.length}} 个项目 </span>
			<Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange"
			      @on-page-size-change="pageSizeChange"/>
		</div>
	</div>
</template>

<script>
	import './message.less'
	import Search from './components/search'
	import TableComponent from './components/table'
	import { mapActions } from 'vuex'
	export default {
		components: { Search, TableComponent },
		data () {
			return {
			   loading:false,
			   readState:0,
			   pageIndex: 1,
			   pageSize: 10,
			   
			}
		},
		computed:{
			data() {
				return this.$store.state.user.messageList
			}
		},
		methods:{
			...mapActions([
				'getMessageList'
			]),
			 pageChange(index) {
			  
			  this.pageIndex = index;
			  this.getData();
			},
			pageSizeChange(size) {
			  
			  this.pageIndex = 1
			  this.pageSize = size
			  this.getData();
			},
			selectData(readState){
				this.readState = readState;
				this.getData();
			},
			getData(){
				var send_data = {
					readState:this.readState,
					pageIndex:this.pageIndex,
					pageSize:this.pageSize
				}
				this.loading = true;
				this.getMessageList(send_data).then((res) => {
					this.loading = false;
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>
