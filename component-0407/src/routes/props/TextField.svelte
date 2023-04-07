<script>
  export let value
  export let color
  // $$props : 컴포넌트에 내장된 객체, 바깥에서 받는 모든 props를 받는 객체, 명시적 props(위에서 export로 명시하는 등 직접 작성한 것)를 사용할 때
  // $$restProps : 암시적 props를 사용할 때 (명시적 props 외의 것들)
</script>

<div class="my-custom-input">
  <!-- 명시적 props : value, color -->
  <input
    bind:value={value}
    {...$$restProps}
    style="color : {color}" />
</div>

<style>
  .my-custom-input {
    border-radius: 100px;
    padding: 10px 20px;
  }
</style>