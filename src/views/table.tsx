import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import './table.scss'

export default defineComponent({
  setup() {
    const router = useRouter()
    const name = ref('')
    const select = ref('')
    const data = ref('')
    const options = ref([
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      },
      {
        value: 'Option4',
        label: 'Option4'
      },
      {
        value: 'Option5',
        label: 'Option5'
      }
    ])

    const columns = ref([
      {
        prop: 'date',
        label: 'Date',
        width: 180
      },
      {
        prop: 'name',
        label: 'Name',
        width: 180
      },
      {
        prop: 'address',
        label: 'Address',
        width: 180
      },
      {
        prop: '',
        label: '操作',
        width: 180,
        render: (row, column, cellValue, index) => {
          return (
            <el-button
              type='text'
              size='small'
              {...{
                onClick: () => {
                  delOne(index)
                }
              }}
            >
              删除
            </el-button>
          )
        }
      }
    ])

    const tableData = ref([
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ])

    const search = () => {
      console.log(name)
      console.log(select)
      console.log(data.value)
    }
    const addOne = () => {
      console.log('增加')
      tableData.value.push({
        date: '2022-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      })
    }
    const delOne = (index: number) => {
      console.log('删除')
      console.log(index)
      tableData.value.splice(index, 1)
    }
    return () => (
      <>
        <div class='table-page'>
          <el-row class='mt20'>
            <el-col span={4}>
              <div class='grid-content bg-purple'>姓名：</div>
            </el-col>
            <el-col span={12}>
              <div class='grid-content bg-purple-light'>
                <el-input v-model={name.value} placeholder='请输入' clearable />
              </div>
            </el-col>
          </el-row>
          <el-row class='mt20'>
            <el-col span={4}>
              <div class='grid-content bg-purple'>选择：</div>
            </el-col>
            <el-col span={12}>
              <el-select
                v-model={select.value}
                class='m-2'
                placeholder='Select'
                size='large'
              >
                {options.value.map((item) => (
                  <el-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  ></el-option>
                ))}
              </el-select>
            </el-col>
          </el-row>
          <el-row class='mt20'>
            <el-col span={4}>
              <div class='grid-content bg-purple'>日期：</div>
            </el-col>
            <el-col span={12}>
              <el-date-picker
                v-model={data.value}
                type='date'
                placeholder='Pick a day'
                shortcuts='shortcuts'
                value-format='YYYY-MM-DD'
              ></el-date-picker>
            </el-col>
          </el-row>
          <el-button type='primary' size='mini' onClick={search}>
            搜索
          </el-button>

          <el-table data={tableData.value} style='width: 100%'>
            {columns.value.map((item) => (
              <el-table-column
                prop={item.prop}
                label={item.label}
                width={item.width}
                formatter={item.render}
              ></el-table-column>
            ))}

            {/* <el-table data={tableData.value} style='width: 100%'>
            <el-table-column prop='date' label='Date' width='180' />
            <el-table-column prop='name' label='Name' width='180' />
            <el-table-column prop='address' label='Address' />
            <el-table-column
              label='操作'
              v-slots={{
                default: (scope: any) => {
                  return (
                    <div>
                      {scope.$index}
                      <el-button type='text' size='small' onClick={addOne}>
                        增加
                      </el-button>
                      <el-button
                        type='text'
                        size='small'
                        {...{
                          onClick: () => {
                            delOne(scope.$index)
                          }
                        }}
                      >
                        删除
                      </el-button>
                    </div>
                  )
                }
              }}
            ></el-table-column>  */}

            {/* <el-table-column
              label='Test'
              v-slots={{
                default: (scope: any): JSX.Element => (
                  <div>
                    {scope.$index}
                    <el-button type='text' size='small' onClick={addOne}>
                      增加
                    </el-button>
                    <el-button
                      type='text'
                      size='small'
                      {...{
                        onClick: () => {
                          delOne(scope.$index)
                        }
                      }}
                    >
                      删除
                    </el-button>
                  </div>
                )
              }}
            ></el-table-column> */}

            {/* <el-table-column fixed='right' label='Operations' width='120'>
              {
                <>
                  <el-button type='text' size='small' onClick={addOne}>
                    增加
                  </el-button>

                  <el-button
                    type='text'
                    size='small'
                    {...{
                      onClick: delOne
                    }}
                  >
                    删除
                  </el-button>
                </>
              }
            </el-table-column> */}
          </el-table>
        </div>
      </>
    )
  }
})
