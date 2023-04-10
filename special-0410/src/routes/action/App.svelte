<script>
  let toggle = true
  let width = 200

  function hello(node, options = {}) {
    const { 
      width = '100px', // 기본값
      height = '100px', // 기본값
      color = 'tomato' // 기본값
    } = options
    console.log(node)
    node.style.width = width
    node.style.height = height
    node.style.backgroundColor = color

    return {
      update(opts) {
        // options가 변경될 때마다 실행
        console.log('update', opts)
        node.style.width = opts.width
      },
      destroy() {
        console.log('destroy')
      }
    }
  }
</script>

<button on:click={() => toggle = !toggle}>
  Toggle
</button>
<button on:click={() => width += 20}>
  Size Up
</button>

<div use:hello></div>
{#if toggle}
  <div use:hello={{
    width: `${width}px`,
    height: '70px',
    color: 'royalblue'
  }}></div>
{/if}
