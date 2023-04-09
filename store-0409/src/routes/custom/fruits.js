import { writable, get } from 'svelte/store'

// 구분용
const _fruits = writable([
  { id: 1, name: '사과'},
  { id: 2, name: '바나나'},
  { id: 3, name: '체리' }
])

export let fruits = {
  ..._fruits, // 전개 연산자, set, update, subscribe
//  getList: () => {
//    return get(_fruits).map((f) => {f.name}) // f.name으로 새 배열을 만듬
//  },
  getList: () => get(_fruits).map((f) => f.name), // f: item
  setItem: (name) => {
    _fruits.update(($f) => { // f: 배열
      $f.push({
        id: $f.length + 1,
        name: name
      })
      return $f
    })
  }
}