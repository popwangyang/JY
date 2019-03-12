<template>
	<div class="JurisdictionListItem" v-bind:class="{ active: item.isSelect }" @click="btnClick(item.code)">
		<span>{{item.code}}</span>
		<span>{{item.name}}</span>
	</div>
</template>

<script>
	export default {
		props:['item'],
		data(){
			return{
				
			}
		},
		methods: {
			btnClick(code) {
				// console.log(code)
				this.$emit("btnClick", code)
			}
		},
	}
</script>

<style scoped="scoped">
.JurisdictionListItem{
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		cursor: pointer;
	}
.JurisdictionListItem:hover {
	background: #2d8cf0;
	color: white;
}
.active{
	background: #2d8cf0;
	color: white;
}
</style>
