import { defineComponent, reactive, ref, toRef, toRefs } from 'vue'

export default defineComponent({
  setup() {
    // let obj = { name: '你好', age: 16 }
    // let msg = ref(obj.name)
    // console.log(msg.value) // 你好
    // let arr = ref([]) // ref 可以是任何类型 也可以是对象
    // function change1() {
    //   msg.value = '世界'
    //   //修改msg1数据的时候必须要加 .value 渲染数据的时候就不用加了
    //   console.log(obj, msg.value)
    //   // {name: "你好", age: 16} '世界'
    //   // 数据此时没改变 但是页面的数据改变了
    // }
    // change1()

    // let msg = { name: 'zs', age: 16 }
    // let msg2 = toRef(msg, 'name')
    // console.log(msg2.value) // zs
    // function change2() {
    //   msg2.value = 'ww'
    //   console.log(msg, msg2.value) // {name: "ww", age: 16} ww
    //   //此时 msg.ww 数据变了 但是视图上的是不会变的
    // }
    // change2()

    const user = reactive({
      name: '小李',
      age: 18
    })

    const ageRef = toRef(user, 'age')

    // 测试响应式效果
    setTimeout(() => {
      user.age = 20
    }, 2000)

    setTimeout(() => {
      ageRef.value = 30
    }, 3000)

    // const user = reactive({
    //   name: '小李',
    //   age: 18
    // })

    // const { age } = toRefs(user)

    // // 测试响应式效果
    // setTimeout(() => {
    //   user.name = '小红'

    //   // toRefs将属性转换为响应式的ref属性，需要通过.value来修改值
    //   age.value = 20
    // }, 2000)


    return () => (
      <>
        <h2>
          {/* {user.name} */}
          {/* {test.name}岁 */}
        </h2>
        <h2>user.age: { user.age }</h2>
        <h2>ageRef: { ageRef.value }</h2>

        <el-button
          type='text'
          size='small'
          {...{
            onClick: () => {
              // change1()
            }
          }}
        >
          {/* {msg.value} */}
          {/* {msg2.value} */}
        </el-button>
      </>
    )
  }
})
