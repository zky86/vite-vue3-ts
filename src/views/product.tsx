import { defineComponent, reactive, ref } from 'vue'
import { ElEmpty, ElButton, ElForm, ElFormItem } from 'element-plus'
import { useRouter } from 'vue-router'
import useCounter from './counter'
import elm from './elm'
import {
  ElInput
} from 'element-plus'
export default defineComponent({
  setup() {
    const router = useRouter()
    const { count, increment } = useCounter({})
    const data = reactive({
      user: {
        name: '',
        password: ''
      }
    })
    const loginForm = ref<typeof ElForm | null>(null)

    const login = () => {
      if (!loginForm.value) return
      loginForm.value.validate((valid: boolean) => {
        if (valid) {
          if (data.user.name === 'admin' && data.user.password === '123456') {
            console.log('登录成功')
          } else {
            console.log('登录失败')
          }
        } else {
          return false
        }
      })
    }

    const keyUp = ({ code }: KeyboardEvent) => {
      if (code === 'Enter') {
        login()
      }
    }

    return () => (
      <>
        <div>组件测试1：</div>
        <div>
          You clicked: {count.value} times
          <button onClick={increment}>
            Click me
          </button>
        </div>
        <br></br>
        <div>组件测试2</div>

        <el-form ref={loginForm} model={data.user} label-width="120px" style="width:400px">
          {/* <el-form-item label="用户名：">
            <el-input  v-model={data.user.name}  placeholder="请输入" prefix-icon="user"></el-input>
          </el-form-item> */}
          <ElFormItem
            label="账号："
            prop="name"
            rules={[{ required: true, message: '请输入用户名', trigger: 'blur' }]}
          >
            <ElInput
              placeholder="请输入"
              v-model={data.user.name}
              v-slots={{
                prefix: <i class="el-input__icon el-icon-user"></i>
              }}
              {...{
                onKeyup: keyUp
              }}
            ></ElInput>
          </ElFormItem>

          <el-form-item label="密码：" prop="password" rules={[{ required: true, message: '请输入密码', trigger: 'blur' }]}>
            <el-input v-model={data.user.password} placeholder="请输入" prefix-icon="unlock" ></el-input>
          </el-form-item>
        </el-form>

        <ElButton type="primary" size="mini"
          {...{
            onClick: login
          }}>提交
        </ElButton>

        <br></br>
        <ElEmpty description="404 NOT FOUND" class="404-page">
          <ElButton
            type="primary"
            {...{
              onClick: () => {
                console.log("退出")
                // router.push({ name: 'login' })
              }
            }}
          >
            返回首页
          </ElButton>
        </ElEmpty>
      </>
    )
  }
})
