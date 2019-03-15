<template>
    <div class="tmp">
        <div class="tmp-box1">
            <Button icon="md-cloud-download" style="margin-right: 20px;" type="info" @click="exportFile">导出数据</Button>
        </div>
        <div class="tmp-box2">
            <Table :columns="columns" :data="data"></Table>
        </div>
        <div class="tmp-box3">
            <span>总共 {{this.data.length}} 个项目 </span>
            <Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange"
                  @on-page-size-change="pageSizeChange"/>
        </div>
        <Modal
                v-model="backFlage"
                title="退回理由"
        >
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="reason">
                    <Input v-model="formInline.reason" type="textarea" :maxlength="200"
                           :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入..."></Input>
                </FormItem>
            </Form>
            <div style='text-align: right;'>
                {{formInline.reason.length}}/200
            </div>
            <div slot="footer">
                <Button @click="backReasonCancle">取消</Button>
                <Button type="primary" @click="backReasonOk">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import './Finance-refund.less'

export default {
  components: {},
  data() {
    return {
      backFlage: false,
      currentID: '',
      formInline: {
        reason: ''
      },
      ruleInline: {
        reason: [
          { required: true, message: '理由不能为空', trigger: 'blur' }
        ]
      },
      columns: [
        {
          title: '序号',
          key: 'name',
          width: 80

        },
        {
          title: 'KTV名称',
          key: 'age',
          width: 150
        },
        {
          title: '账户余额',
          key: 'province',
          width: 100
        },
        {
          title: '退款金额',
          key: 'city'
        },
        {
          title: '银行开户名',
          key: 'address',
          width: 150
        },
        {
          title: '开户行',
          key: 'zip',
          width: 200
        },
        {
          title: '税号',
          key: 'zip1',
          width: 150
        },
        {
          title: '汇款账号',
          key: 'zip2',
          width: 150
        },
        {
          title: '状态',
          key: 'zip3',
          width: 160,
          // fixed: 'right',
          render: (h, params) => {
            var color = 'blue'
            var TextConent = null
            var showReason = false
            var isLastList = params.index == this.data.length - 1 ? 'right-end' : 'right-start'
            console.log(params.index, this.data.length)
            switch (parseInt(params.row.state)) {
              case 0:
                color = 'red'
                TextConent = '待结算'
                break
              case 1:
                color = 'green'
                TextConent = '已结算'
                break
              case 2:
                color = 'black'
                TextConent = '已退回'
                showReason = true
                break
            }
            console.log(color)
            var clicle = h('div', {
              style: {
                background: color,
                width: '5px',
                height: '5px',
                borderRadius: '50%'
              }
            }, '')
            var Text = h('div', {
              style: {
                margin: '10px'
              }
            }, TextConent)
            var reason = h('Poptip', {
              props: {
                wordWrap: 'word-wrap',
                width: '100',
                trigger: 'hover',
                placement: isLastList,
                content: params.row.reason
              },
              style: {
                color: '#57a3f3',
                cursor: 'pointer',
                marginLeft: '20px',
                display: showReason ? 'block' : 'none'
              }
            }, '原因')
            var box = h('div', {
              style: {
                display: 'flex',
                alignItems: 'center'
              }
            }, [clicle, Text, reason])
            return box
          }
        },
        {
          title: '操作',
          key: 'zip4',
          width: 160,
          fixed: 'right',
          render: (h, params) => {
            var Btn1 = h('Button', {
              style: {
                color: '#57a3f3'
              },
              props: {
                type: 'text',
                size: 'small'
              },
              on: {
                click: () => {

                }
              }
            }, '通过')
            var Btn2 = h('Button', {
              style: {
                color: '#57a3f3'
              },
              props: {
                type: 'text',
                size: 'small'
              },
              on: {
                click: () => {
                  this.$refs.formInline.resetFields()
                  this.backFlage = true
                }
              }
            }, '退回')

            return h('div', {
              style: {
                display: 'flex',
                alignItems: 'center'
              }
            }, [Btn1, Btn2])
          }
        }
      ],
      data: [
        {
          name: '001',
          age: '银乐迪西溪银泰店',
          address: '7,800.00',
          province: '7,800.00',
          city: '王钢蛋',
          zip: '浙江工商银行武林支行',
          zip1: '22030992',
          zip2: '****8 982',
          state: 2,
          reason: 's1111111111111111111112222222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333'
        }
      ]
    }
  },
  methods: {
    pageChange(index) {
      console.log(index)
      this.pageIndex = index
    },
    pageSizeChange(size) {
      console.log(size)
      this.pageIndex = 1
      this.pageSize = size
    },
    exportFile() {
      console.log('exportFile')
    },
    backReasonOk() {
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          this.backFlage = false
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    backReasonCancle() {
      this.backFlage = false
      this.$refs.formInline.resetFields()
    }
  },
  mounted() {
    var arr = new Array(10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Object.create(this.data[0])
    }
    this.data = arr
  }
}
</script>
<style scoped>
</style>
