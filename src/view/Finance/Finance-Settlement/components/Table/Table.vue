<template>
	<div>
		<Table height="400" :columns="columns" :data="data"></Table>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				columns:[
					 {
                        title: '序号',
                        key: 'name'
                    },
                    {
                        title: '结算金额(元)',
                        key: 'age'
                    },
                    {
                        title: '结算时间',
                        key: 'address'
                    },
					{
					    title: '状态',
					    key: 'state',
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
					}
				],
				data:[
					{
                        name: '001',
                        age: '50,000.00',
                        address: '2018-12-03 11:23:54',
                        state:2,
                        reason: 'pppppppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp'
                    }
                    
				]
			}
		},
		methods: {
			getData() {
				console.log("getData")
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

<style>
</style>
