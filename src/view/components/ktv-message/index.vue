<template>
  <div class="ktv_main">
    <div class="ktv_header">
        <div class="left">左边</div>
        <div class="right">
          <Button type="primary"><Icon type="md-add" /> 新建</Button>
          <Button>操作日志</Button>
        </div>
    </div>
    <div class="ktv_content">
      <div class="ktv_from">
        <Form ref="formInline" :model="formInline" :label-width="90"  inline>
          <FormItem prop="user" label="KTV名称">
            <Input type="text" v-model="formInline.user" placeholder="请输入">
            </Input>
          </FormItem>
          <FormItem prop="password" label="地区选择">
            <Input type="text" v-model="formInline.password" placeholder="请选择地区">
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">搜索</Button>
          </FormItem>
        </Form>
      </div>
      <div class="ktv_table">
        <Table  :columns="columns" :data="data"  :loading="table_loading">
          <template slot-scope="{row,index}" slot="action">
            <Button type="text" size="small" style="margin-right: 5px" @click="look(row)" >查看</Button>
          </template>
        </Table>
        <br>
        <Page
            :current="search.p_index"
            :total="p_total"
            :page-size="search.p_size"
            @on-change="changePage"
            show-elevator show-sizer
            style="float:right;padding-bottom:20px">
        </Page>
      </div>

    </div>
  </div>
</template>

<script>
import './index.less'
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      p_total: 1,

      search: {
        p_index: 1,
        p_size: 20,
        nprovince: '',
        ncity: '',
        words: '',
        states: '',
        contract_status: '',
        jc_status: ''
      },
      provinceList: [],
      cityList: [],
      model2: '',
      model3: '',
      data: [
        {
          ktv_name: '银乐迪西溪银泰店',
          cate: '量贩式',
          region: '浙江省杭州市西湖区'
        }
      ],
      columns: [
        {
          title: '序号',
          align: 'center'
        },
        {
          title: '名称',
          key: 'ktv_name',
          align: 'center'
        },
        {
          title: '场所类型',
          key: 'cate',
          align: 'center'
        },
        {
          title: '地区',
          key: 'region',
          align: 'center'
        },
        {
          title: '合同有效期',
          align: 'center',
          render(h, params) {
            if (params.row.start_date && params.row.end_date) {
              return h('div', [
                h('div', params.row.start_date),
                h('div', '至'),
                h('div', params.row.end_date)
              ])
            } else {
              return h('span', '')
            }
          }
        },
        {
          title: '合同状态',
          key: 'room_num',
          align: 'center'

        },
        {
          title: '联系人',
          key: 'install_count',
          align: 'center'

        },
        {
          title: '联系号码',
          key: 'pass_state',
          align: 'center'

        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      table_loading: false
    }
  },
  methods: {
    handleSubmit(name) {
      console.log(this.formInline)
    },
    changePage() {

    },
    // 查看
    look() {

    }

  },
  mounted() {
  }
}

</script>

<style>
  .labelBox.labelBox{
    width: 200px;
    margin-right: 5px;
  }
  #gyxsearchBox{
    margin-bottom: 20px;
    margin-top: 10px;
  }
  #gyxsearchBox select{
    padding: 0.3rem .75rem;
    height: 36px;
    width: 200px;
    border: 1px solid #d7dde4;
    font-size: 14px;
    color: #657180;
  }
  #ttable .ivu-table-cell{
    padding-left: 10px;
    padding-right: 0px;
  }
  #ttable .ivu-table-row:hover{
    cursor: pointer;
  }
  /*合同即将过期样式*/
  .ivu-table .demo-table-error-row td{
    /*background-color: #ff6600 !important;*/
    color: red;
  }
</style>
