
<template>
    <div class="tmp">
        <div class="tmp-box1">
			<Search @searchBtn="searchBtn" @exportFile="exportFile"/>
		</div>
		<div class="tmp-box2">
			<Table :data='data'/>
		</div>
		<div class="tmp-box3">
			<span>总共 {{this.data.length}} 个项目 </span>
			<Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" />
		</div>
    </div>
</template>
<script>
import './Recharge.less'
import Search from './components/Search'
import Table from './components/Table'

export default {
  components: { Search, Table },
  data () {
    return {
		pageIndex:1,
		pageSize:10,
		data:[ 
		  {
			name: '001',
			age: 'PAY20190212000001',
			address: 'JC234-20181202',
			province: '银乐迪西溪银泰店',
			city: '名称A',
			zip: '50,000.00',
			zip1: '微信',
			zip2: '2018-11-12 11:23:34',
			state: 0
			}		 
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
