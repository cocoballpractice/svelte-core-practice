<script>
  let age = 30
  export let name = 'Cocoball'
  export function getAge() {
    console.log(age)
  }

</script>

<svelte:options accessors /> 
<!--true 생략, 외부에서 해당 컴포넌트의 데이터/함수에 접근이 가능, 조건 : 접근하고자 하는 데이터/함수 앞에 export 키워드 필요-->

<h1 on:click={getAge}>{name}!</h1>