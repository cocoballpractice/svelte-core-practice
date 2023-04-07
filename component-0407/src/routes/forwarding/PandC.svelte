<!--
<script>
  import Parent from "./Parent.svelte";

  function handler(event) {
    const e = event.detail.event
    console.log(e.currentTarget)
  }

</script>

<Parent on:click={handler} />
-->
<script>
  import Parent from "./Parent.svelte";

  function handler(e) {
    console.log(e.currentTarget)
  }

  function myEventHandler(e) {
    console.log(e.detail.myName)
  }

</script>

<!-- Parent의 click이 별다른 처리 없이 바로 넘어옴 -->
<!-- Child의 myEvent가 별 다른 처리 없이 Parent에서 바로 넘어옴-->
<Parent
  on:click={handler} on:myEvent={myEventHandler}
/>