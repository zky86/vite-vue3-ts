import { defineComponent, reactive, ref, toRef, toRefs, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { isVue3 } from '_vue-demi@0.12.5@vue-demi'
import { on } from 'element-plus/es/utils'

export default defineComponent({
  setup() {
    const formSize = ref('default')
    const ruleForm = reactive({
      name: 'Hello',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    })
    const rules = reactive<FormRules>({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ],
      region: [
        {
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change'
        }
      ],
      date1: [
        {
          type: 'date',
          required: true,
          message: 'Please pick a date',
          trigger: 'change'
        }
      ],
      date2: [
        {
          type: 'date',
          required: true,
          message: 'Please pick a time',
          trigger: 'change'
        }
      ],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change'
        }
      ],
      resource: [
        {
          required: true,
          message: 'Please select activity resource',
          trigger: 'change'
        }
      ],
      desc: [
        {
          required: true,
          message: 'Please input activity form',
          trigger: 'blur'
        }
      ]
    })
    const ruleFormRef = ref<FormInstance | null>()
    const submitForm = async (formEl: FormInstance | undefined) => {
      console.log('formEl', formEl)
      if (!formEl) return

      await formEl.value.validate((valid: any, fields: any) => {
        if (valid) {
          console.log('submit!')
          console.log('name', ruleForm.name)
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.value.resetFields()
    }

    const refone = ref(null)
    onMounted(() => {
      console.log(134)
      console.log(ruleFormRef.value)
      ruleFormRef.value.clearValidate()
      console.log(refone.value)
    })
    
   
    


    return () => (
      <>
        <div ref={refone}>ref节点测试</div>
        <br />
        <el-form
          ref={ruleFormRef}
          model={ruleForm}
          rules={rules}
          label-width='120px'
          class='demo-ruleForm'
          size={formSize}
        >
          <el-form-item label='Activity name' prop='name'>
            <el-input v-model={ruleForm.name} />
          </el-form-item>
          <el-form-item label='Activity zone' prop='region'>
            <el-select v-model={ruleForm.region} placeholder='Activity zone'>
              <el-option label='Zone one' value='shanghai' />
              <el-option label='Zone two' value='beijing' />
            </el-select>
          </el-form-item>
          <el-form-item label='Activity time' required>
            <el-col span={11}>
              <el-form-item prop='date1'>
                <el-date-picker
                  v-model={ruleForm.date1}
                  type='date'
                  placeholder='Pick a date'
                  style='width: 100%'
                />
              </el-form-item>
            </el-col>
            <el-col class='text-center' span={2}>
              <span class='text-gray-500'>-</span>
            </el-col>
            <el-col span={11}>
              <el-form-item prop='date2'>
                <el-time-picker
                  v-model={ruleForm.date2}
                  placeholder='Pick a time'
                  style='width: 100%'
                />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button
              type='primary'
              {...{
                onClick: () => {
                  submitForm(ruleFormRef)
                }
              }}
            >
              提交
            </el-button>

            <el-button
              type='primary'
              {...{
                onClick: () => {
                  resetForm(ruleFormRef)
                }
              }}
            >
              重置
            </el-button>

          </el-form-item>
        </el-form>
      </>
    )
  }
})
