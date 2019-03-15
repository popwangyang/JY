<template>
    <div>
		<div v-show="step === 1">
			<Step1 @on-change-step="chaneStep"/>
		</div>
		<div v-show="step === 2">
			<Step2/>
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
                step : 1
            }
        },
        methods: {
           chaneStep(step){
			   this.step = step;
			   this.$emit('on-change-title', step)
		   }
        }
    }
</script>
