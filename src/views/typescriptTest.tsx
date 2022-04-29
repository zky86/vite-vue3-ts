import { defineComponent, onMounted, reactive, ref } from 'vue'
import './table.scss'
import componentTest from './componentTest'

// console.log(1, componentTest)
export default defineComponent({
  components: {
    componentTest
  },
  setup() {
    const refTest = ref(null)

    onMounted(() => {
      console.log('ref1', refTest.value)
    })
  
    
  

    const password = ref<string>('123')
    return () => (
      <>
        <componentTest
          ref={refTest}
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
