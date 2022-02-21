import { defineComponent } from 'vue'
import { ElEmpty, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import  useCounter  from './counter'
export default defineComponent({
  setup() {
    const router = useRouter()
    const { count, increment } = useCounter({})
    return () => (
      <>
        <div>组件测试1：</div>
        <div>
          You clicked: { count.value } times
          <button onClick={increment}>
            Click me
          </button>
        </div>
        <div>组件测试2</div>
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
