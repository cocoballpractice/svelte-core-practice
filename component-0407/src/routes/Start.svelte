<script>
  import { onMount } from "svelte";
  import Cocoball from "./Cocoball.svelte";
  import Footer from "./Footer.svelte";

  let cocoball

  onMount(() => {
    console.log(cocoball)
    console.log(cocoball.title)
  })
</script>

<!-- HTML에 사용할 수 있는 전역 속성과 중복되는 이름을 사용해도 상관없다 -->
<!-- bind:this를 통해 컴포넌트에 접근할 수 있고 컴포넌트 내부의 일부 데이터를 열어볼 수 있음 -->
<Cocoball title="WOW!" bind:this={cocoball}/> <!--props 값 주입-->