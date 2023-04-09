<script>
  import Card from "./Card.svelte";
</script>

<Card>
  <div slot="age">85</div>
  <h2 slot="name">cocoball</h2>
  <div slot="email" let:domain let:hello>thesecon{domain} / {hello}</div> <!-- 컴포넌트에서 정의한 domain 속성과 값을 가져와 변수로 사용할 수 있음 -->
</Card>
<Card>
  <span slot="email" let:domain>span{domain}</span>
  <h3 slot="name">h3cocoball</h3>
</Card>

<style>
  h3 {
    color: red;
  }
</style>