
<template>
    <div class="tmp">
        <div style="margin: 40px 0;">
			<div>
				<span style="font-size: 20px;font-weight: bold;margin: 40px 10px;">有效播放计次规则</span>
				<span v-show="flage1">
					<Button type="text" style="color: #1890ffd8;" @click="flage1 = false">编辑</Button>
				</span>
				<span v-show="!flage1">
					<Button type="text" style="color: #1890ffd8;">保存</Button>
					<Button type="text" style="color: #1890ffd8;">取消</Button>
				</span>
			</div>
			
			<div style="font-size: 16px;line-height: 50px;margin-left: 50px;" v-show="flage1">
				单首歌曲播放时长大于等于 1 分钟记为1次有效播放
			</div>
			<div style="font-size: 16px;line-height: 50px;margin-left: 50px;" v-show="!flage1">
				单首歌曲播放时长大于等于 <Input v-model="value1" style="width: 60px;font-size: 16px;" /> 分钟记为1次有效播放
			</div>	
		</div>
		<div style="height: 1px;background: #e8e8e8;margin: 20px 10px;"></div>
         <div style="margin: 40px 0;">
        	<div>
        		<span style="font-size: 20px;font-weight: bold;margin: 40px 10px;">账户余额提醒</span>
        		<span v-show="flage2">
        			<Button type="text" style="color: #1890ffd8;">编辑</Button>
        		</span>
				<span v-show="!flage2">
					<Button type="text" style="color: #1890ffd8;">保存</Button>
					<Button type="text" style="color: #1890ffd8;">取消</Button>
				</span>
        	</div>
        	
        	<div style="font-size: 16px;line-height: 50px;margin-left: 50px;">
        		账户余额低于 1000 元发送 1 次余额不足提醒
        	</div>	
			<div style="font-size: 12px;line-height: 50px;margin-left: 50px;color: #e8e8e8;">
				包括 网页端、APP端、邮件提醒
			</div>		
        </div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
		flage1:true,
		flage2:true,
		value1:1,
		value2:1000
	}
  }
}
</script>
<style scoped>
</style>
