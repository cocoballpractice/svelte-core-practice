import { writable, derived } from 'svelte/store'

export let count = writable(1)

// writable, readable 스토어를 가져오고 두번째 인수에서 스토어에 대해 적용할 함수를 지정
// $는 자동 구독이 아니라 스토어의 데이터를 취급한다는 의미로 붙인 것
export let double = derived(count, ($count) => {
  return $count * 2
})

// '연결되어 있는 스토어가 바뀔 때마다' 두번째 인수의 함수가 실행되며, 구독이 소멸되고 새 구독이 진행되는 형식...
export let total = derived([count, double], ([$count, $double], set) => {
  console.log('total 구독자가 1명 이상일 때')
  // return $count + $double
  set($count + $double) // 반환을 하지 않고 set을 사용해도 동일
  return () => {
    console.log('total 구독자가 0명이 될 때') // 연결되어 있는 스토어가 바뀔 때마다 실행됨 (구독이 소멸되므로)
  }
})

// 세번째 인수에는 set 함수 실행 전 최초로 표기할 데이터, 값을 지정할 수 있음
export let initialValue = derived(count, ($count, set) => {
  setTimeout(() => {
    set($count +1)
  }, 1000)
}, '최초 계산 중...')