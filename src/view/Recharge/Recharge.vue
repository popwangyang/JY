
<template>
    <div class="tmp">
        <div class="tmp-box1">
			<Search @searchBtn="searchBtn" @exportFile="exportFile"/>
		</div>
		<div class="tmp-box2"></div>
		<div class="tmp-box3"></div>
    </div>
</template>
<script>
import './Recharge.less'
import Search from './components/Search'
export default {
  components: { Search },
  data () {
    return {}
  },
  methods: {
  	searchBtn(data){
  		console.log(data)
  	},
  	exportFile(){
  		console.log("exportFile")
  	}
  },
}
</script>
