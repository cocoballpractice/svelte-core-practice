<script>
  let domain = '@xyz.com' // 속성의 범위 저장
</script>

<div class="card">
  <slot name="name">!!</slot>
  <slot name="age">??</slot>
  <slot name="email" domain={domain} hello="world">&&</slot>
</div>