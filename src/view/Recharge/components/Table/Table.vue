<template>
	<div>
		<Table  :columns="columns" :data="data"></Table>
	</div>
</template>

<script>
	export default {
		props:['data'],
		data(){
			return{
				columns: [
                    {
                        title: '序号',
                        key: 'name',
                       
                        
                    },
                    {
                        title: '订单号',
                        key: 'age',
                        width: 200
                    },
                    {
                        title: '场所编号',
                        key: 'province',
                        width: 200
                    },
                    {
                        title: '场所名称',
                        key: 'city',
                        // width: 100
                    },
                    {
                        title: '套餐名称',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: '充值金额(元)',
                        key: 'zip',
                        width: 120
                    },
					 {
					    title: '支付方式',
					    key: 'zip1',
					    width: 100
					},
					 {
					    title: '订单创建时间',
					    key: 'zip2',
					    width: 200
					},
					 {
					    title: '订单状态',
					    key: 'state',
					     width: 200,
						render: (h, params) => {
							var color = null;
							var textConent = null;
							switch(parseInt(params.row.state)){
								case 0:
								    color="#2d8cf0"
									textConent= '交易成功'
								break;
								case 1:
								    color="gray"
									textConent= '交易失败'
								break;
								case 2:
								    color="gray"
									textConent= '已退款'
								break;
							}
							var circle = h('div', {
								 style:{
									 width:'5px',
									 height:'5px',
									 borderRadius:'50%',
									 background:color
								 }
							},'');
							var text = h('span', {
								style:{
									margin:'10px'
								}
							}, textConent);
							return h('div', {
								style:{
									display:'flex',
									alignItems:'center'
								}
							}, [ circle, text ]);							
						}
					},
				]
			}
		}
	}
</script>

