<template>
	<div class="JurisdictionPageLeft">
		<div class="box1">
			<span style="font-size: 14px;font-weight: bold;">岗位</span>
			 <Button type="text"  icon="md-add" style="color:#2d8cf0;" @click="addGWFlage = true;cancleGWBtn()">新增</Button>
		</div>
		<div class="box2">
			<Input prefix="ios-search" placeholder="请输入..."  />
		</div>
		<div class="box3">
			<listItem v-for="item in arr" :item="item" @btnClick="foo" />
		</div>
		
		<Modal 
		v-model="addGWFlage"
		title="新增岗位"
		width="600">			
			<addGWfrom ref="addGWfrom" @showFlage="isShowGWFlage"/>
			<div slot="footer">
				<Button @click="addGWFlage = false">取消</Button>
				<Button type="primary" @click="addGWBtn">确定</Button>
			</div>
        </Modal>
	</div>
</template>

<script>
	import './JurisdictionPageLeft.less'
	import listItem from '../../../../../components/JurisdictionListItem'
	import addGWfrom from './components/addGWfrom'
	
	export default {
		components:{ listItem, addGWfrom },
		data(){
			return{
				addGWFlage:false,
				arr:[
					{name:'管理员', code:'001', isSelect:false},
					{name:'超级管理员', code:'002', isSelect:false},
					{name:'管理员', code:'003', isSelect:false},
					{name:'管理员', code:'004', isSelect:false}
				]
			}
		},
		methods: {
			foo(code) {
				console.log(code)
				this.arr.map((item) => {
					if(item.code == code){
						item.isSelect = true;
					}else{
						item.isSelect = false;
					}
				})
			},
			addGWBtn(){
				this.$refs.addGWfrom.handleSubmit()
			},
			cancleGWBtn(){
				this.$refs.addGWfrom.handleReset()				
			},
			isShowGWFlage(flage){
				this.addGWFlage = flage;
			}
			
		},
	}
</script>
