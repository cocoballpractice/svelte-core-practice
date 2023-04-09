import { readable } from 'svelte/store'

const userData = {
  name: 'Cocoball',
  age: 30,
  email: 'test@test.com',
  token: 'dhdksdkaskd@'
}

// set 매개변수로 최초에 읽기 전용 데이터의 값을 변경할 수 있음
export let user = readable(userData, (set) => {
  console.log('user 구독자가 1명 이상일 때')
  delete userData.token // 해당 속성을 삭제
  set(userData) // 값을 변경하여 반환
  return () => {
    console.log('user 구독자가 0명이 될 때')
  }
})