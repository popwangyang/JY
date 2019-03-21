<template>
	<div class="box">
		<Select v-model="model" style="width:200px" @on-change="onChange">
			<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		</Select>
		<Button @click="btn">全部已读</Button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data(){
			return {
				cityList: [
                    {
                        value: '0',
                        label: '全部'
                    },
                    {
                        value: '1',
                        label: '未读'
                    },
                    {
                        value: '2',
                        label: '已读'
                    },
                   
                ],
                model: '0'
			}
		},
	    methods:{
			...mapActions([
				'patchAllMessageReaded',
				'getMessageList'
			]),
			btn(){
				this.patchAllMessageReaded().then((res) => {
					console.log(res,"patchAllMessageReaded")
				}).catch((err) => {
					
				})
			},
			onChange(val){
				this.$emit('getMessageList', val);
			}
		}
	}
</script>

<style scoped="scoped">
	.box {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: space-between;
	}
</style>
