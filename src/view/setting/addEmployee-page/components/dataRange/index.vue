<template>
	<div>
		<!-- <span style="display: flex;align-items: center;height: 32px;margin-bottom: 20px;">

			<span style="display: flex; height: 40px;">
				<span style="margin-right: 20px;display: flex;align-items: center;">
					<h1 style="font-size: 12px;margin: 10px;">省</h1>
					<Select placeholder="请选择" clearable v-model="provinceCode" style="width:150px" @on-change="provinceChange">
						<Option :value="item.number" v-for="item in province" :key="item.number">{{item.name}}</Option>
					</Select>
				</span>

				<span style="margin-right: 20px;display: flex;align-items: center;">
					<h1 style="font-size: 12px;margin: 10px;">市</h1>
					<Select placeholder="请选择" clearable v-model="cityCode" style="width:150px" @on-change="cityChange" :disabled="city.length > 0 ? false:true">
						<Option :value="item.number" v-for="item in city" :key="item.number">{{item.name}}</Option>
					</Select>
				</span>

				<span style="margin-right: 20px;display: flex;align-items: center;">
					<h1 style="font-size: 12px;margin: 10px;">区</h1>
					<Select placeholder="请选择" clearable v-model="countyCode" style="width:150px" :disabled="county.length > 0 ? false:true">
						<Option :value="item.number" v-for="item in county" :key="item.number">{{item.name}}</Option>
					</Select>
				</span>
			</span>

			<span style="margin-right: 20px;display: flex;align-items: center;">
				<Button type="primary" style="margin-right: 20px;" @click="selectPositionBtn">
					确定
				</Button>
				<Button @click=" formInline.ADposition = [];provinceCode = '';cityCode = '';countyCode ='';">
					清除
				</Button>
			</span>

		</span>


		<span style="display:flex;width: 500px;margin-bottom: 20px;flex-wrap: wrap;min-height: 62px;border: 1px solid gainsboro;border-radius: 6px;"
		 v-show="formInline.ADposition.length >= 0 ? true:false">
			<template v-for="item in formInline.ADposition">
				<span id="selectListItem" class="selectListItem" style="padding: 6px 8px;">
					<span style="margin-right: 10px;">{{item.value}}</span>
					<Icon type="close-circled" @click.native="delectItem(item.code)"></Icon>
				</span>
			</template>
		</span> -->
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods: {
				// 省请求
			provinceAjax () {
				let _this = this
				var send_data={
					'user_id': OAth.id,
					'area_all': '00000000'
				};
				
				get('/cperm/area',send_data).then(res=>{
					
					this.province = res.data;
					this.city = [];
					this.county = [];
				});
			},
			// 市请求
			cityAjax (num) {
				let _this = this;
				var send_data={
					'user_id': OAth.id,
					'province': num
				};
				get('/cperm/area',send_data).then(res=>{
					//console.log(res);
					this.city = res.data;
					
				});
			},
			// 区或县请求
			countyAjax (num,callback) {
				let _this = this;
				var send_data={
					'user_id': OAth.id,
					'city': num
				};
				get('/cperm/area',send_data).then(res=>{
					this.county = res.data;
				});
			}
		},
		mounted(){
			// this.provinceAjax();
		}
	}
</script>

<style>
</style>
