<script>
  import Btn from "./Btn.svelte";
</script>

<Btn />
<Btn>Submit!</Btn> <!-- 컴포넌트 태그 내 content (submit) 넣기 -->
<Btn block={true}>Submit!</Btn>
<Btn color="royalblue">Submit!</Btn>
<Btn block color="red">Danger!</Btn>