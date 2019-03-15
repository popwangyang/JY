<template>
	<div style="margin: 0px 10px;">
		重新发送({{timeValue}})
	</div>
</template>

<script>
	export default {
		data(){
			return{
				timeValue:10,
				time:null
			}
		},
		methods: {
			timeStar() {
			this.time = setInterval(() => {
				    console.log("time")
					this.timeValue --;
					if(this.timeValue <= 0){
						this.clearTime()
						this.$emit("on-time-out", false)
					}
				}, 1000)
			},
			clearTime(){
				clearInterval(this.time)
			}
		},
		mounted(){
			this.timeStar()
		}
	}
</script>

<style>
</style>
