<script>
  // $$slots : 컴포넌트가 부모 컴포넌트로부터 어떤 이름을 가지고 있는 내용을 슬롯으로 받는데
  // 그 슬롯에 값이 삽입이 되었는지를 true, false로 표시
  console.log($$slots) 
</script>

<div class="user-card">
  <slot name="name"></slot>
  {#if $$slots.age}
    <hr />
    <slot name="age"></slot>
  {/if}
  {#if $$slots.email}
    <hr />
    <slot name="email"></slot>
  {/if}
</div>