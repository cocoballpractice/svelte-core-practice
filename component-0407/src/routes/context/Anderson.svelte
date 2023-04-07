<script>
  import { getContext } from 'svelte'
  import Neo from "./Neo.svelte";
  import Emily from "./Emily.svelte";

  const pk = getContext('pk')
</script>

<h2>Anderson({pk})</h2>
<ul>
  <li>
    <Neo />
  </li>
  <li>
    <Emily />
  </li>
</ul>