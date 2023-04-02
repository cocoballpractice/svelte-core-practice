<script>
	let name = 'mrcocoball'
	let index = 0
</script>

{@debug index, name} <!--보간에 작성되어 있는 데이터가 변경될 때마다 콘솔에 변경된 내용을 출력-->
<h1 on:click={() => {index += 1}}>Hello {name}!</h1>
