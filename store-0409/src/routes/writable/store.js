import { writable } from 'svelte/store'

// export let count = writable(0) // 첫번째 인수로 초기값 (0 지정)

// 2번째 인수로는 초기화 이후 구독이 생겼을 때 실행될 함수 넣을 수 있음, 반환된 함수는 구독이 없어졌을 때 실행되는 것
export let count = writable(0, () => {
  console.log('count 구독자가 1명 이상일 때!') // 초기 1회만 실행
  return () => {
    console.log('count 구독자가 0명일 때')
  }
})

export let name = writable('Cocoball', () => {
  console.log('count 구독자가 1명 이상일 때!') // 초기 1회만 실행
  return () => {
    console.log('count 구독자가 0명일 때')
  }
})