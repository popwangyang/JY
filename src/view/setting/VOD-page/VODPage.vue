<template>
    <div class="VODPage">
        <div class="box1">
			<SearchCompoent @searchBtn="searchBtn" ref="searchBtn" />
		</div>
        <div class="box2">
			 <Table :columns="columns" :data="data"></Table>
		</div>
        <div class="box3">
			<span>总共 {{this.data.length}} 个项目 </span>
			<Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" />
		</div>
    </div>
</template>
<script>
	import './VODPage.less'
	import SearchCompoent from './components/Search'
	export default {
	  components: { SearchCompoent },
	  data () {
		return {
			pageIndex:1,
			pageSize:10,
			columns: [
                    {
                        title: '序号',
                        key: 'name'
                    },
                    {
                        title: 'VOD品牌',
                        key: 'age'
                    },
                    {
                        title: '品牌缩写',
                        key: 'address'
                    },
					{
					    title: '启用状态',
					    key: 'address1',
						render: (h, params) => {
							var BG =  null; 
							var TXT = null;
							var Direction = null;
							switch(parseInt(params.row.state)){
								case 1:
								BG ='#1890ff';
								TXT = '开';
								Direction = 'row'
								break;
								case 2:
								BG = '#8b959e';
								TXT = '关';
								Direction = 'row-reverse'
							}
							var span1 = h('span', {
								style:{
									margin:'0 4px'
								}								
							}, TXT);
							var span2 = h('span', {
								style:{
									width:'16px',
									height:'16px',
									display:'block',
									borderRadius:'50%',
									background:'white'
								}
							},"");
							var KaiDiv = h('div', {
								style:{
									width:'40px',
									height:'20px',
									padding:'2px',
									background:BG,
									borderRadius:'10px',
									display:'flex',
									color:"white",
									justifyContent:'space-between',
									alignItems:'center',
									flexDirection:Direction
								}
							},[span1, span2])
							
							return KaiDiv
						}
					},
					{
					    title: '操作',
					    key: 'address2',
						render: (h, params) => {
							return h('Button', {
								props:{
									type:'text',
									size:'small'
								},
								style:{
									color:'#1890ff'
								},
								on:{
									click:() =>{
										
										this.$refs.searchBtn.formInline.PinPaiName = params.row.age;
										this.$refs.searchBtn.formInline.PinPaiSuoXie = params.row.address;
										this.$refs.searchBtn.formInline.QiYongstate = parseInt(params.row.state) == '1' ? true:false;
										
										this.$refs.searchBtn.addVODFlage = true;
										console.log(this.$refs)
									}
								}
							}, '编辑')
						}
					}
                ],
			 data: [
                    {
                        name: '001',
                        age: '品牌名称A',
                        address: 'ABC',
                        state: '1'						
                    },
					 {
					    name: '002',
					    age: '品牌名称A',
					    address: 'ABC',
					    state: '2'						
					}
				]
		}
	  },
	  methods: {
	  	searchBtn(data) {
	  		console.log(data)
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
	  	  var arr = new Array(10);
	  	  for(var i = 0; i < arr.length; i++){
	  		  arr[i] = Object.create(this.data[0])
	  	  }
	  	  this.data = arr;
	  }
	}
</script>
<style scoped>
</style>
