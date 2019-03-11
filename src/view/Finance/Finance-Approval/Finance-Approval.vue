<!--
    @Time    : 2019/3/4 12:57
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : Finance-Approval.vue
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2017-->
<template>
    <div class="tmp">
		<div class="tmp-box1">
			<SearchComponet @searchBtn="searchBtn" @exportFile="exportFile"/>  
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
    </div>
</template>
<script>
import SearchComponet from './components/Search'


import './Finance-Approval.less'
export default {
  components: { SearchComponet, },
  data () {
    return {
		checkFlage:false,
		pageIndex:1,
		pageSize:10,
		columns: [
                    {
                        title: '序号',
                        key: 'name',
                        width: 80,
                        
                    },
                    {
                        title: '场所编号',
                        key: 'age',
                        width: 150
                    },
                    {
                        title: '场所名称',
                         minWidth: 150,
						 key: 'address'
                       
                    },
                    {
                        title: '套餐名称',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '充值金额(元)',                       
						key: 'city',
                        width: 150
                    },
                    {
                        title: '银行开户名',
                        key: 'zip',
                        width: 100
                    },
					 {
					    title: '开户行',
					    key: 'zip1',
					    width: 200
					},
					{
					    title: '汇款账号',
					    key: 'zip2',
					    width: 100
					},
					{
					    title: '提交时间',
					    key: 'zip3',
					    minWidth: 200
					},
					{
					    title: '状态',
					    key: 'zip4',
						fixed: 'right',
					    width: 150,
						render: (h, params) => {
							var color= 'blue';
							var TextConent = null;
							var showReason = false;
							var isLastList = params.index == this.data.length-1 ? "right-end":"right-start";
							console.log(params.index, this.data.length)
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
						fixed: 'right',
					    width: 150,
						render: (h, params) => {
							return h('Button', {
								props:{
									type:'text',
									size:'small'
								},
								on: {
									click: () => {
										this.checkFlage = true
									}
								}
							}, '核对')
						}
					},

                ],
		data: [
                    {
                        name: '001',
                        age: 'JC234-20181202',
                        address: '银乐迪西溪银泰店',
                        province: '名称B',
                        city: '50,000.00',
                        zip: '王钢蛋',
						zip1: '浙江工商银行武林支行',
						zip2: '****8 982',
						zip3: '2018-11-12 11:23:34',
						zip4: '待结算',
						zip5: '核对',
						state:2,
						reason: 'pppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp'
											
                    }
                   
                ]
	}
  },
  methods:{
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
		this.pageIndex = 1;
		this.pageSize  = size;
	}
  },
  mounted(){
	  var arr = new Array(10);
	  for(var i = 0; i < arr.length; i++){
		  arr[i] = Object.create(this.data[0])
	  }
	  this.data = arr;
  }
}
</script>

