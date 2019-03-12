<template>
	<div>
		<Table :columns="columns" :data="data"></Table>
	</div>
</template>

<script>
	export default{
		props:['data'],
		data(){
			return{
				 columns: [
                    {
                        title: '序号',
                        key: 'name'
                    },
                    {
                        title: '操作时间',
                        key: 'age'
                    },
                    {
                        title: '操作人',
                        key: 'address'
                    },
					{
					    title: '操作内容',
					    key: 'date'
					}
                ]
			}
		}
	}
</script>

<style>
</style>
