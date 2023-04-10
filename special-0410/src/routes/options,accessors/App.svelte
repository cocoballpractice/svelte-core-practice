<script>
  import Cocoball from "./Cocoball.svelte";

  let cocoball

  function handler() {
    console.log(cocoball)
    console.log(cocoball.name)
    console.log(cocoball.getAge())
  }
</script>

<button on:click={handler}>
  Toggle
</button>

<Cocoball bind:this={cocoball}/>