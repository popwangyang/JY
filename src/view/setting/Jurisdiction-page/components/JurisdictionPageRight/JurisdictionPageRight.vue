<template>
	<div class="JurisdictionPageRight">
		<div class="box1">
			<span class="span1">
				<span style="display: inline-block;font-size: 14px;font-weight: bold;margin-right: 20px;">权限</span>
				<span>
					<Checkbox >全选</Checkbox>
				</span>
			</span>
			<span class="span2">				
				<Button type="primary" style="margin-right: 20px;">保存</Button>
				<Button style="margin-right: 10px;" @click="RZbtn">操作日志</Button>
			</span>
		</div>
		<div class="box2">
			
		</div>
	</div>
</template>

<script>
	import './JurisdictionPageRight.less'
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			RZbtn() {
				this.$router.push("OperationLog-page")
			}
		},
	}
</script>
