import { ref } from 'vue'

const useCounter = ({ intialValue = 0, delay = 1000 }) => {
  const count = ref(intialValue)
  const increment = () => {
    count.value += 1
  }
  return {
    count,
    increment
  }
}
export default useCounter
