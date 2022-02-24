import { defineComponent, reactive, ref } from 'vue'
import './table.scss'
import componentTest from './componentTest'

// console.log(1, componentTest)
export default defineComponent({
  components: {
    componentTest
  },
  setup() {
    const password = ref<string>('123')
    return () => (
      <>
        <componentTest
          type='success'
          size='large'
          v-slots={{
            prefix: <i class='el-icon-star-on'>具名</i>,
            suffix: (props: string) => <div>11{props}</div>
          }}
          onChangePswVisible={(flag: any) => {
            password.value = flag
            console.log(password.value)
          }}
        >
          这是一段默认插槽的内容
        </componentTest>
      </>
    )
  }
})
