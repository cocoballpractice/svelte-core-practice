<script>
  import axios from 'axios'

  let promise = Promise.resolve([]) // 받아올 데이터가 배열이므로 빈 배열 초기화
  let address = ''
  
  function searchPlaces() {
    // try ~ finally까지 이행된 결과를 Promise에 넣어서 반환 (resolve 혹은 reject)
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`http://dateplanner.ykstyle.info:81/api/v1/places?address=${address}&categories=CE7`)
        resolve(res.data.data.content) // 내 api의 스펙임
      } catch (err) {
        reject(err)
      } finally {
        console.log('done')
      }
    })
  }
	
</script>

<input bind:value={address} />
<button on:click={() => {
  promise = searchPlaces() // searchPlaces의 결과를 promise에 할당
}}>검색하기</button>

{#await promise}
  <p>Loading...</p>
{:then places}
  <ul>
    {#each places as place}
      <li>{place.place_name}</li>
        <div>
          <h6>{place.place_id}</h6>
        </div>
    {/each}
  </ul>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!--
{#if loading}
  <p style="color: red">Loading...</p>
{:else if places}
  <ul>
    {#each places as place}
      <li>{place.place_name}</li>
        <div>
          <h6>{place.place_id}</h6>
        </div>
    {/each}
  </ul>
{:else if error}
  <p style="color: red">{error.message}</p>
{/if}
-->