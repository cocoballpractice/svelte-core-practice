<script>
  import Cocoball from "./Cocoball.svelte";
  import Neo from "./Neo.svelte";

  let components = [
    { name: 'Cocoball', comp: Cocoball },
    { name: 'Neo', comp: Neo }
  ]
  let index = 1
  let selected = components[0].comp

</script>

{#each components as {name, comp}, i (name)}
  <label>
    <input type="radio"
           value={comp}
           bind:group={selected}
           on:change={() => index = i + 1}/>
    {name}
  </label>
{/each}

<!--
{#if selected === 'Cocoball'}
  <Cocoball />
{:else if selected === 'Neo'}
  <Neo />
{/if}
-->

<!-- bind 아님! -->
<!-- component this와 컴포넌트를 연결 -->
<svelte:component this={selected} index={index} />

