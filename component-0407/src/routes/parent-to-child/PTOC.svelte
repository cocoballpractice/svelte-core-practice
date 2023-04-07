<script>
  import User from "./User.svelte";

  let users = [
    {
      name: 'Neo',
      age: 85,
      email: 'neo@abc.com'
    },
    {
      name: 'Paul',
      age: 30,
      email: 'paul@abc.com'
    },
    {
      name: 'Evan',
      age: 25,
    }
  ]

</script>

<section>
  {#each users as user}
    <User
      name={user.name}
      age={user.age}
      email={user.email}
    />
  {/each}
</section>

<section>
  {#each users as {name, age, email}}
    <User {name} {age} {email}/>
  {/each}
</section>

<section>
  {#each users as user}
    <User {...user}/>
  {/each}
</section>