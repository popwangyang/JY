<template>
    <div>
		<div v-show="step === 1">
			<Step1 @on-change-step="chaneStep" @on-back-login="onBackLogin"/>
		</div>
		<div v-show="step === 2">
			<Step2  @on-back-login="onBackLogin" :username="username" :code="code"/>
		</div>
	</div>	
</template>
<script>
	import Step1 from './components/step1'
	import Step2 from './components/step2'
	
    export default {
		components:{ Step1, Step2 },
        data () {
            return {
                step : 1,
				username:"",
				code:""
            }
        },
        methods: {
           chaneStep(data){
			   this.step = data.step;
			   this.username = data.username;
			   this.code = data.code;
			   this.$emit('on-change-title', data.step)
		   },
		   onBackLogin(){
			   this.$emit("on-back-login")
		   }
        }
    }
</script>
