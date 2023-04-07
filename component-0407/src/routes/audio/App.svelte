<script>
  import AudioPlayer, {stopAll} from "./AudioPlayer.svelte";

  let audioTracks = [
    '블라블라블라1',
    '블라블라블라2',
    '블라블라블라3'
  ]

</script>

<button on:click={stopAll}>
  다 멈춰!
</button>

{#each audioTracks as src}
  <AudioPlayer {src} />
{/each}