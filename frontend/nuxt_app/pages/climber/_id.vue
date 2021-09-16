<template>
  <layout-wrapper>
    <layout-tab />
    <layout-movie-list-wrapper>
        <base-heading>{{ climber[0].name }}</base-heading>
        <layout-movie-list>
          <base-card 
            v-for="(movie, index) in movies"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
      </layout-movie-list>
    </layout-movie-list-wrapper>
  </layout-wrapper>
</template>

<script>

export default {
  async asyncData({ $microcms, params, error }) {
    try {

      const movies = await $microcms.get({
        endpoint: 'movie',
        queries: { filters: `climber[contains]${params.id}` },
      })

      const tag = await $microcms.get({
        endpoint: 'climber',
        queries: { filters: `id[equals]${params.id}` },
      })

      return {
        movies: movies.contents,
        climber: tag.contents
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