
<template>
    <div class="JurisdictionPage">
			<div class="JurisdictionPage-box1">
				<JurisdictionPageLeft/>
			</div>
			<div class="JurisdictionPage-box2">
				<JurisdictionPageRight/>
			</div>
		</div>
</template>
<script>
import './Jurisdiction-page.less'
import JurisdictionPageLeft from './components/JurisdictionPageLeft'
import JurisdictionPageRight from './components/JurisdictionPageRight'
export default {
  components: { JurisdictionPageLeft, JurisdictionPageRight },
  data () {
    return {}
  }
}
</script>

