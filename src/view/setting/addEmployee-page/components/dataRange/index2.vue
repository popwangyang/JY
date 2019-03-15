<template>
    <cascaderMulti :multiple="true" v-model="end_code" :data="end_codes" placeholder="请选择"></cascaderMulti>
</template>
<script>
    export default {
        data () {
            return {
                end_code: [],
                end_codes: [
					{
					value: 1,
					label: "接通1",
					children: [{
					  label: "已报价1",
					  value: 3,
					  children: [],
					  multiple: true //可忽略项，当为true时该项为多选
					}]
				  },{
					value: 2,
					label: "接通2",
					children: [{
					  label: "已报价2",
					  value: 4,
					  children: [],
					  multiple: true //可忽略项，当为true时该项为多选
					}]
				  }]
            }
        }
    }
</script>