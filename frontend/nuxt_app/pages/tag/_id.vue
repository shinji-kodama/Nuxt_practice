<template>
  <layout-wrapper>
    <layout-tab />
    <div class="bg-cWhite py-5">
      <base-heading>{{ tag[0].name }}</base-heading>
      <base-card 
            v-for="(movie, index) in movies"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
    </div>
  </layout-wrapper>
</template>

<script>

import axios from 'axios'
export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}/movie?filters=tag[contains]${params.id}`,{
          headers: { 'X-API-KEY': $config.apiKey },
      })
      const tag = await axios.get(
        // `${$config.apiUrl}/tag?filters=id[equals]${params.id}`,{
        `${$config.apiUrl}/tag?filters=id[equals]${params.id}`,{
          headers: { 'X-API-KEY': $config.apiKey },
      })
      return {
        movies: data.contents,
        tag: tag.data.contents
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  },
}
</script>

<style scoped>

.video {
position: relative;
height: 0;
padding: 30px 0 56.25%;
overflow: hidden;
}

.video iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

</style>