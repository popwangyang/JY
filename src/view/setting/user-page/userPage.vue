<template>
    <div class="userPage">
        <div class="box1">
            <Search @SearchBtn="SearchBtn"/>
        </div>
        <div class="box2">
            <Table :columns="columns" :data="data"></Table>
        </div>
        <div class="box3">
            <span>总共 {{this.data.length}} 个项目 </span>
            <Page :total="this.data.length" show-elevator show-sizer @on-change="pageChange"
                  @on-page-size-change="pageSizeChange"/>
        </div>
        <Modal
                v-model="passChangeFlage"
                title="修改密码"
                width='450'>
            <div style="width: 90%;">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
                    <FormItem label="新密码: " prop="password1">
                        <Input type="password" v-model="formInline.password1" placeholder="请输入6-20位数字、字母组合密码"/>
                    </FormItem>
                    <FormItem label="确认密码: " prop="password2">
                        <Input type="password" v-model="formInline.password2" placeholder="再次输入密码"/>
                    </FormItem>
                </Form>
            </div>
            <div slot='footer'>
                <Button @click="cancel" style="margin-left: 8px">取消</Button>
                <Button type="primary" @click="ok">确认</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import './userPage.less'
import Search from './Search'
import { adminResetPsaaword } from '@/api/setting.js'
export default {
  components: { Search },
  data() {
    const validatePass = (rule, value, callback) => {
      var patt = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/

      if (value === '') {
        callback(new Error('请填写密码'))
      } else if (!patt.test(value)) {
        callback(new Error('密码格式不正确'))
      } else {
        if (this.formInline.password2 !== '') {
          // 对第二个密码框单独验证
          this.$refs.formInline.validateField('password2')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formInline.password1) {
        callback(new Error('两次密码输入不一致!'))
      } else {
        callback()
      }
    }
    return {
      pageIndex: 1,
      pageSize: 10,
      passChangeFlage: false,
      formInline: {
        password1: '',
        password2: ''
      },
      ruleInline: {
        password1: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      },
      columns: [
        {
          title: 'ID',
          key: 'name'
        },
        {
          title: '员工姓名',
          key: 'age'
        },
        {
          title: '性别',
          key: 'address'
        },
        {
          title: '岗位',
          key: 'address1'
        },
        {
          title: '邮箱',
          key: 'address2'
        },
        {
          title: '手机',
          key: 'address3'
        },
        {
          title: '在职状态',
          key: 'address4',
          render: (h, params) => {
            var color = 'blue'
            var TextConent = null
            switch (parseInt(params.row.state)) {
              case 0:
                color = '#55c45f'
                TextConent = '在职'
                break
              case 1:
                color = '#BFBFBF'
                TextConent = '离职'
                break
            }
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
            var box = h('div', {
              style: {
                display: 'flex',
                alignItems: 'center'
              }
            }, [clicle, Text])
            return box
          }
        },
        {
          title: '操作',
          key: 'address5',
          render: (h, params) => {
            var bianJiBtn = h('Button', {
              props: {
                type: 'text',
                size: 'small'
              },
              style: {
                color: '#57a3f3'
              },
              on: {
                click: () => {
                  this.$router.push({
                    path: '/setting/addEmployee-page',
                    query: {
                      id: 0
                    }
                  })
                }
              }
            }, '编辑')
            var passChange = h('Button', {
              props: {
                type: 'text',
                size: 'small'
              },
              style: {
                color: '#57a3f3',
                marginLeft: '10px'
              },
              on: {
                click: () => {
                  this.$refs.formInline.resetFields()
                  this.passChangeFlage = true
                }
              }
            }, '修改密码')

            return h('div', {
              style: {
                display: 'flex',
                alignItems: 'center'
              }
            }, [bianJiBtn, passChange])
          }
        }
      ],
      data: [
        {
          name: 'PER0001',
          age: '王小明',
          address: '男',
          address1: 'ABC',
          address2: '57783889@qq.com',
          address3: '13752910423',
          state: '0'
        }

      ]
    }
  },
  methods: {
    SearchBtn(data) {
      console.log(data)
    },
    ok() {
      this.$refs.formInline.validate((valid) => {
				// var id = 
        if (valid) {
					adminResetPsaaword({id, password}).then((res) => {
						this.$Message.success('密码修改成功!')
					}).catch((err) => {
						this.$Message.error('操作失败，请稍后重试!')
					})          
        } 
      })
    },
    cancel() {
      this.passChangeFlage = false
      this.$refs.formInline.resetFields()
    },
    pageChange(index) {
      console.log(index)
      this.pageIndex = index
    },
    pageSizeChange(size) {
      console.log(size)
      this.pageIndex = 1
      this.pageSize = size
    }
  },
  mounted() {
    var arr = new Array(20)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Object.create(this.data[0])
    }
    this.data = arr
  }

}
</script>

<style>
</style>
