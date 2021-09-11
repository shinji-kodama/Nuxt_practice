<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />

    <div class="bg-cWhite py-5">
      <base-heading>LATEST</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(movie, index) in movies"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
        </div>
    </div>

  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {

  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/movie`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      movies: data.contents,
    }
  },
}
</script>