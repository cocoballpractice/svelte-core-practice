<script>
  import UserCard from "./UserCard.svelte";
</script>

<UserCard>
  <h2 slot="name">COCOBALL</h2>
  <div slot="age">30</div>
  <div slot="email">test@test.com</div>
</UserCard>

<UserCard>
  <h2 slot="name">COCOBALL-NEO</h2>
  <div slot="email">neotest@test.com</div>
</UserCard>

<UserCard>
  <h2 slot="name">COCOBALL-NEO2</h2>
</UserCard>