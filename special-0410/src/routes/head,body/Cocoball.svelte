<svelte:head>
  <link rel="stylesheet" href="./main.css"> <!--상대 경로 주의!-->
</svelte:head>

<h1>Cocoball!</h1>

<svelte:body on:mousemove={e => console.log(e.clientX, e.clientY)} /> <!-- 열고 닫히는 태그로 선언 X -->