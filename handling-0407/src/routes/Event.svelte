<script>
    import { prevent_default, stop_propagation } from "svelte/internal";

  function clickHandler(event) {
    // console.log(event.target)
    console.log(event.currentTarget)
  }

  function wheelHandler(event) {
    console.log(event)
  }

</script>

<section>
  <!-- 기본 동작 방지 -->
  <!-- el.addEventListener('click', e => e.preventDefault()) -->
  <h2>preventDefault</h2>
  <a href="https://naver.com"
     target="_blank"
     on:click|preventDefault={clickHandler}> <!-- 클릭 시 a 태그의 기본 동작을 방지하고 preventDefault 내 함수를 실행 -->
     Naver
  </a>
</section>

<section>
  <!-- 최초 실행 후 핸들러 삭제 -->
  <h2>Once</h2>
  <a href="https://naver.com"
     target="_blank"
     on:click|preventDefault|once={clickHandler}> <!-- 클릭 시 a 태그의 기본 동작을 방지하고 preventDefault 내 함수를 실행, 최초 1회만 사용 -->
     Naver
  </a>
</section>

<section>
  <!-- 이벤트 버블링 방지 -->
  <!-- 이벤트 버블링 예시 : child를 클릭했는데 child는 parent의 영역 내에도 있으므로 parent에서도 이벤트가 발생됨 -->
  <!-- el.addEventListener('click', e => e.stop_propagation()) -->
  <h2>stopPropagation</h2>
  <div class="parent"
       on:click={clickHandler}>
    <div class="child"
         on:click|stopPropagation={clickHandler}></div>
  </div>
</section>

<section>
  <!-- 캡처링에서 핸들러 실행 -->
  <!-- el.addEventListener('click', e => {}, true) -->
  <!-- el.addEventListener('click', e => {}, {capture: true}) -->
  <h2>capture</h2>
  <div class="parent"
       on:click|capture={clickHandler}>
    <div class="child"
         on:click={clickHandler}></div>
  </div>
</section>

<section>
  <!-- event의 target과 currentTarget이 일치하는 경우 핸들러 실행 -->
  <h2>self</h2>
  <div class="parent"
       on:click|self={clickHandler}>
    <div class="child"></div>
  </div>
</section>

<section>
  <!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤 -->
  <!-- el.addEventListener('wheel', e => {}, {passive:true}) -->
  <h2>passive</h2>
  <div class="parent wheel"
       on:wheel|passive={wheelHandler}>
    <div class="child"></div>
  </div>
</section>