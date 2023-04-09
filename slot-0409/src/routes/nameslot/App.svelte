<script>
  import Card from "./Card.svelte";
</script>

<!-- 슬롯에 들어갈 스타일은 컴포넌트 외부(App.svelte)에서 정의해서 내부(Card.svelte)로 넣어줘야 한다 -->

<Card>
  <div slot="age">85</div>
  <h2 slot="name">cocoball</h2>
  <div slot="email">test@test.com</div>
</Card>
<Card>
  <span slot="email">span@span.com</span>
  <h3 slot="name">h3cocoball</h3>
</Card>

<style>
  h3 {
    color: red;
  }
</style>