<template>
	<div class="userPage">
		<div class="box1">
			<Search @SearchBtn="SearchBtn"/>
		</div>
		<div class="box2"></div>
		<div class="box3"></div>
	</div>
</template>

<script>
	import './userPage.less'
	import Search from './Search'
	export default {
		components:{ Search },
		data(){
			return{
				
			}
		},
		methods: {
			SearchBtn(data) {
				console.log(data)
			}
		},
			
	}
</script>

<style>
</style>
