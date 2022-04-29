import { defineComponent, PropType, ref, onUnmounted ,defineExpose , reactive} from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning'>,
      default: 'warning'
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'mini'>,
      default: 'small'
    },
    onChangePswVisible: Function as PropType<(flag: boolean) => void>
  },
  emits: ['changePswVisible'],
  setup(props, { slots, emit , expose}) {
    // console.log(props)
    const flag = ref<boolean>(false)
    const title = ref<string>('xixi')

    const count = ref<number>(1)

    const timer = setInterval(() => {
      count.value++
    }, 2000)


    const b = ref('2')

    onUnmounted(() => {
      clearInterval(timer)
    })

    // expose(() => {
    //   b:2
    // })

    return () => (
      <div class='child'>
        {count.value}
        <br />
        <el-button
          type={props.type}
          size={props.size}
          {...{
            onClick: () => {
              flag.value = !flag.value
              emit('changePswVisible', flag.value)
            }
          }}
        >
          增加
        </el-button>
        <br />
        {slots.default && slots.default()}
        <br />
        {slots.suffix && slots.suffix('作用域插槽示例')}
        prefix具名插槽内容 : {slots.prefix && slots.prefix()}
      </div>
    )
  }
})
