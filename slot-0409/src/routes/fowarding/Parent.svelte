<script>
  import Child from "./Child.svelte";
</script>

<!-- slot을 Child에게 전달 -->
<Child let:scoped> <!-- 자식에서 정의한 scoped 속성 -->
  <slot></slot>
  <slot name="named" slot="named-child"></slot> <!-- 부모로부터 name 슬롯으로 받아온 값을 자식에게 name-child 슬롯으로 전달 -->
  <slot name="scoped" slot="scoped-child" scoped={scoped}></slot> <!-- 부모로부터 scoped 슬롯으로 받아온 값을 자식에게 scoped-child 슬롯으로 전달 -->
</Child>