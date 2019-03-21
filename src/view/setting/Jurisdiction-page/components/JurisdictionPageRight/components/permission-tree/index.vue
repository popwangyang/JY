<template>
	<div>
		<template v-for="item in data">
			<span :key="item.id">
				<h1>
					<Checkbox
					v-model="item.is_selected"
					:indeterminate="item.indeterminate"
					@on-change="CheckboxItem1(item)"
					>{{item.name}}</Checkbox>
					</h1>
				<div style="margin-left:20px ;display: flex;align-items: center;">
					<template v-for="item1 in item.children">
						<span :key="item1.id">
							<span v-if="item1.children">
								<h1>
									<Checkbox
									v-model="item1.is_selected"
									:indeterminate="item1.indeterminate"
									@on-change="CheckboxItem1(item1)"
									>{{item1.name}}</Checkbox>
								</h1>							   
							   <template v-for="item2 in item1.children">
									   <Checkbox v-model="item2.is_selected" :key="item2.id" @on-change="CheckboxItem1(item2)">{{item2.name}}</Checkbox>
							   </template>								 							    
							</span>
							<span v-else>
								<Checkbox v-model="item1.is_selected" @on-change="CheckboxItem1(item1)"  >{{item1.name}}</Checkbox>
							</span>
						</span>
					</template>
				</div>
			</span>
		</template>
	</div>
</template>

<script> 

	import { changeTree, changeTreeSelected } from '@/libs/util'
	export default {
		props:['data'],
		data() {
			return{

			}
		},
		methods:{
			CheckboxItem1(item){
				changeTreeSelected(this.data, item)
				changeTree(this.data)	
				this.$emit('on-change-check')
				
			}
		}
	}
</script>

<style>
</style>
