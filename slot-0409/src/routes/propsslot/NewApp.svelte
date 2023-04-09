<script>
  import Wrap from "./Wrap.svelte";

  let fruits = {
    apple: {
      value: '',
      options: {
        readonly: false,
        disabled: false,
        placeholder: 'placeholder A'
      }
    },
    banana: {
      value: 'BANANA',
      options: {
        disabled: false,
        placeholder: 'placeholder A'
      }
    }
  }

  function add(name) {
    console.log(name)
  }

  function update(name) {
    console.log(name)
  }

  function remove(name) {
    console.log(name)
  }
</script>

<!-- fruits의 종류가 많아진다면 종류에 맞게 하드코딩을 해야한다 ㄷㄷ -->
<label
  class="fruits__apple"
  name="apple">
  <input
    bind:value={fruits.apple.value}
    readonly={fruits.apple.options.readonly}
    disabled={fruits.apple.options.disabled}
    placeholder={fruits.apple.options.placeholder}
    on:change={() => add('apple')}/>
</label>

<!-- slot을 사용하여 리팩토링 -->
<!-- name은 예약어라서 _name으로 지정-->
<Wrap
  scopeName="apple"
  let:_name>
  <label
    class="fruits__{_name}"
    name="{_name}">
    <input 
      bind:value={fruits[_name].value}
      readonly={fruits[_name].options.readonly}
      disabled={fruits[_name].options.disabled}
      placeholder={fruits[_name].options.placeholder}
      on:change={() => add(_name)}/>
  </label>
</Wrap>

<Wrap
  scopeName="banana"
  let:_name>
    <input 
      bind:value={fruits[_name].value}
      readonly={fruits[_name].options.readonly}
      disabled={fruits[_name].options.disabled}
      placeholder={fruits[_name].options.placeholder}
      on:change={() => add(_name)}/>
</Wrap>