<script>
  import { get } from 'svelte/store'
  import { count, double, user } from './store.js'

  // console.log($count)

  // get() 함수를 통해 컴포넌트 외부에서 스토어를 구독하지 않고도 값을 확인할 수 있게 함
  console.log(get(count))
  console.log(get(double))
  console.log(get(user))

</script>