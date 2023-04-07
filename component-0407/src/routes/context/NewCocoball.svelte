<script>
  import { setContext } from 'svelte'
  import { getContext } from 'svelte'
  import Anderson from "./Anderson.svelte";

  const pocket = 10000
  setContext('pk', pocket)
  const pk = getContext('pk')
</script>

<h1 style="color: red">
  NewCocoball({pk})
</h1>
<ul>
  <li>
    <Anderson />
</ul>