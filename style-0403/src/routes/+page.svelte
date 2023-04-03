<div class="box"></div>

<style>

	:global(.body) {
		padding: 60px;
	}
	.box {
		width: 100px;
		height: 100px;
		background: tomato;
		border-radius: 10px; 
		animation: zoom .4s infinite alternate;
	}
	/* @ At-rules */
	/* 마찬가지로 기본적으로는 해당 컴포넌트에만 유효하므로 -global- 키워드 사용 필요 */
	@keyframes -global-zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.5);
		}
	}

</style>