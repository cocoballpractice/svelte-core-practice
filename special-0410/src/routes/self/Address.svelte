<script>
  export let address
</script>

<ul>
  <li>
    {address.label}
    {#if address.children}
      {#each address.children as address}
        <svelte:self {address} /> <!-- 재귀 호출. 컴포넌트가 자기 자신을 호출, <Address {address} />를 호출하는 것과 동일 -->
      {/each}
    {/if}
  </li>
</ul>