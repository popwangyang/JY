<template>
	<div class="JurisdictionPageRight">
		<div class="box1">
			<span class="span1">
				<span style="display: inline-block;font-size: 14px;font-weight: bold;margin-right: 20px;">权限</span>
				<span>
					<Checkbox v-model="allCheck" :indeterminate="indeterminate" @on-change="allCheckBtn">全选</Checkbox>
				</span>
			</span>
			<span class="span2">				
				<Button type="primary" style="margin-right: 20px;">保存</Button>
				<Button style="margin-right: 10px;" @click="RZbtn">操作日志</Button>
			</span>
		</div>
		<div class="box2">
			<PermissionTree @on-change-check="onChangeCheck" :data="permissionTree"/>
		</div>
	</div>
</template>

<script>
	 import { getALL, getItemIndeterminate } from '@/libs/tools'
	 import { changeTree, changeTreeSelected, } from '@/libs/util'
	import './JurisdictionPageRight.less'
	import PermissionTree from './components/permission-tree'
	export default {
		components: { PermissionTree },
		data(){
			return {
				permissionTree:this.$store.state.user.setPermissionTree,
				allCheck:"",
				indeterminate:""
			}
		},
		methods: {
			RZbtn() {
				this.$router.push("OperationLog-page")
			},
			onChangeCheck(){				
				this.getAllNodeFlage();
			},
			allCheckBtn(val){
				getALL(this.permissionTree).map(item => {
					item.is_selected = val;
				})
				changeTree(this.permissionTree)
				this.getAllNodeFlage();
			},
			getAllNodeFlage(){
				this.allCheck =	getALL(this.permissionTree).every(item => {
						return item.is_selected;
					})
				this.indeterminate = getItemIndeterminate(this.permissionTree)
			}
		},
		mounted(){
			this.getAllNodeFlage();
		}
		
	}
</script>
