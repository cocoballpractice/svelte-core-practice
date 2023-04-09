<script>
  export let block
  export let color
</script>

<!--<button class={block ? 'block' : ''}>-->
<button
  class:block={block}
  style="background-color : {color};
    color: {color ? 'white' : ''}
  ">
  <slot>
    Default Button! <!-- 내용(Content)이 안 들어올 경우 대체 컨텐츠(Fallback Content) -->
  </slot> <!-- 상위 컴포넌트에서 내용(Submit) 받아옴 -->
</button>