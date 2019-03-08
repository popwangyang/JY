<!--
    @Time    : 2019/3/4 12:57
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : Finance-Approval.vue
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2017-->
<template>
    <div class="tmp">
		<div class="tmp-box1">
			
		   <Form  :label-width="80"  inline>
			 <FormItem label="场所名称:">
                 <Input style="width: 200px;"  placeholder="请输入..."></Input>
             </FormItem>
			 <FormItem label="状态">
				<Select style="width: 200px;">
					<Option value="beijing">全部</Option>
					<Option value="shanghai">确认到账</Option>
					<Option value="shenzhen">待确认</Option>
				</Select>
             </FormItem>
			<Button style="margin-left: 30px;" type="primary">搜索</Button>
		    </Form>
			<span>
				<Button icon="md-cloud-download"  style="margin-right: 20px;" type="info">导出数据</Button>
			</span>			
		</div>
		<div class="tmp-box2">
			<Table  border :columns="columns" :data="data"></Table>
		</div>
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
		columns: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
		 data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
	}
  }
}
</script>
<style scoped>
	.tmp{
		background: white;
		height: 100%;
		border-radius: 6px;
		padding: 10px;
	}
	.tmp-box1{
		
		height: 80px;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
</style>
