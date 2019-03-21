<template>
	<div>
		<Table :columns="columns" :data="data" :loading='loading'></Table>
		<Modal
			v-model="modal"
			:title="title"
			>
			<p style="line-height: 28px;text-indent: 30px;">{{content}}</p>	
		</Modal>
    </div>
</template>
<script>
	import {  mapActions } from 'vuex'
    export default {
		props: ['data', 'loading'],
        data () {
            return {
                columns: [
                    {
                        title: '标题',
                        key: 'title',
						width:'200'
                    },
                    {
                        title: '内容',
                        key: 'content',
						ellipsis:true
						
                    },
                    {
                        title: '接受时间',
                        key: 'create_date',
						width:'200'
                    },
					{
					    title: '操作',
						width:'200',
						render: (h, params) => {
							return h('Button', {
								props:{
									type:'text'
								},
								style:{
									color:"#3e76f6"
								},
								on:{
									click: () => {
										this.modal = true;
										const { title, content } = params.row;
										this.title = title;
										this.content = content;
										if(params.row.state == 0) {
											this.patchMessageReaded(params.row.id)
										}										
									} 
								}
							}, "查看")
						}
					}
                ],
				modal: false,
				title:"提示",
				content:"暂时没有获取到内容"
            }
        },
	methods:{
		...mapActions([
		 'patchMessageReaded'
		]),
	   }
	
    }
</script>
