<template>
	<div style="display: flex;justify-content: center;">
		<Button type="text" style="color: #57a3f3;" @click="backLoginBtn">已有账号？登录</Button>				 
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods: {
			backLoginBtn() {
				this.$emit("on-back-login")
			}
		},
	}
</script>

<style>
</style>
