<template>
    <div class="tmp">
        <div class="tmp-box1">
			<SearchCompoent @searchBtn="searchBtn" @exportFile="exportFile"/>
		</div>
		<div class="tmp-box2">
			<Table   :columns="columns" :data="data"></Table>
		</div>
		<div class="tmp-box3">
			 <span>总共 {{this.data.length}} 个项目 </span>
			<Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" />
		</div>
		
		 <Modal
		    v-model="checkFlage"
			title="提示"
			width="400"
		   >
		    <div style="display: flex;">
				<span style="display: block;width: 20px;">
					<Icon type="md-alert" style="color: orange;font-size: 24px;"/>		
				</span>			
				<span style="display: block;flex:1;font-size: 14px;margin: 0 10px;font-weight: bold;">
					<div>确定已收到#银行开户名#-#银行#卡号后4位##充值金额#吗？</div>
					<div style="color: red;font-weight:100;">请仔细核对信息</div>
				</span>
			</div>
			<div slot='footer'>
				<Button @click="checkFlage = false">取消</Button>
				<Button type="primary">确认到账</Button>
			</div>
		</Modal>
		
		<Modal 
		title="权利人A-历史结算记录"
		width="800"
		v-model="historyFlage">
			<TableComponent ref="table" />
		<div slot='footer'></div>
		</Modal>
    </div>
</template>
<script>
import SearchCompoent from './components/Search'
import TableComponent from './components/Table'

import './Finance-Settlement.less'
export default {
  components: { SearchCompoent, TableComponent },
  data () {
    return {
		checkFlage:false,
		historyFlage:false,
		pageIndex:1,
		pageSize:10,
		columns:[
			{
				title: '序号',
				key: 'name',
				width: 80,
				
			},
			{
				title: '提现编号',
				key: 'age',
				width: 160
			},
			{
				title: '权利人名称',
				key: 'province',
				width: 100
			},
			{
				title: '提现金额(元)',
				key: 'city',
				width: 120
			},
			{
				title: '银行开户名',
				key: 'address',
				width: 100
			},
			{
				title: '开户行',
				key: 'zip',
				width: 160
			},
			{
				title: '税号',
				key: 'zip1',
				width: 100
			},
			{
				title: '汇款账号',
				key: 'zip2',
				width: 100
			},
			{
				title: '申请时间',
				key: 'zip3',
				
			},
			{
				title: '状态',
				key: 'zip4',
				width: 150,
				fixed: 'right',
				render: (h, params) => {
					var color= 'blue';
					var TextConent = null;
					var showReason = false;
					var isLastList = params.index == this.data.length-1 ? "right-end":"right-start";					
					switch(parseInt(params.row.state)){
						case 0:
						   color = 'red'
						   TextConent = '待结算'
						break;
						case 1:
						   color = 'green'
						   TextConent = '已结算'
						break;
						case 2:
						   color = 'black'
						   TextConent = '已退回'
						   showReason = true;
						break;
					}
					console.log(color)
					var clicle = h('div', {
						style:{
							background:color,
							width:'5px',
							height:'5px',
							borderRadius:'50%'
						}								
					},'')
					var Text = h('div', {
						style:{
						    margin:'10px'	
						}
					}, TextConent)
					var reason = h('Poptip', {
						props:{
							wordWrap:'word-wrap',
							width:'100',
							trigger:"hover",
							placement:isLastList,
							content:params.row.reason,									
						},
						style:{
							color:'#57a3f3',
							cursor:'pointer',
							marginLeft:'20px',
							display:showReason ? 'block':'none'
						}
					}, '原因')
					var box = h('div', {
						style:{
							display:'flex',
							alignItems:'center'
						}
					}, [clicle, Text, reason])
					return box;
				}
			},
			{
				title: '操作',
				key: 'zip5',
				width: 150,
				fixed: 'right',
				render: (h, params) => {
					var Btn1 =  h('Button', {
						style:{
							color:'#57a3f3'
						},
						props:{
							type:'text',
							size:'small'
						},
						on: {
							click: () => {
								this.checkFlage = true
							}
						}
					}, '核对');
				    var Btn2 = h('Button', {
						style:{
							color:'#57a3f3'
						},
						props:{
							type:'text',
							size:'small'
						},
						on: {
							click: () => {
								this.historyFlage = true;
								console.log(this.$refs)
								this.$refs.table.getData();
							}
						}
					}, '查看历史')
					
					return h('div', {
						style:{
							display:'flex',
							alignItems:'center'
						}
					}, [ Btn1, Btn2 ])
				}
			},
			
		],
		data:[
			{
				name: '001',
				age: 'TX2018100900001',
				address: '版权名称B',
				province: '50,000.00',
				city: '王钢蛋',
				zip: '浙江工商银行武林支行',
				zip1: '22030992',
				zip2: '****8 982',
				zip3: '2018-12-03 11:23:54',
				state:2,
				reason: 'pppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp'
			},
		]
	}
  },
  methods: {
	searchBtn(data){
		console.log(data)
	},
	exportFile(){
		console.log("exportFile")
	},
  	pageChange(index){
  		console.log(index);
  		this.pageIndex = index;
  	},
  	pageSizeChange(size){
		console.log(size);
  		this.pageIndex = 1;
  		this.pageSize  = size;
  	}
  },
  mounted(){
  	  var arr = new Array(20);
  	  for(var i = 0; i < arr.length; i++){
  		  arr[i] = Object.create(this.data[0])
  	  }
  	  this.data = arr;
  }
}
</script>
