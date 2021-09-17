<template>
  <layout-wrapper>
    <layout-tab />
      <div class="video">
        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${movie.url}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="flex flex-col bg-cWhite p-4">
        <div class="flex flex-col xl:px-10 xl:pt-2">

          <div class="">
            <div class="mb-1">
              <div>
                <h1 class="mb-2 font-semibold">{{ movie.title }}</h1>
                <div>
                  <NuxtLink class="text-sm" :to="'/area/' + movie.area.id + '/'">{{ movie.area.name }}</NuxtLink>
                  ,
                  <NuxtLink class="text-sm" :to="'/country/' + movie.country.id + '/'">{{ movie.country.name }}</NuxtLink>
                </div>
              </div>
            </div>
            <div class="border-b"></div>
          </div>

          <div class="py-5 grid grid-cols-2 gap-2 border-b">
            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Climber</h2>
              </div>
              <div v-for="(climber, index) in movie.climber"
                  :key="index"
                >
                <NuxtLink class="text-sm border-b-2" :to="'/climber/' + climber.id + '/'">{{ climber.name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Editor</h2>
              </div>
              <div v-for="(editor, index) in movie.editor"
                  :key="index"
                >
                <NuxtLink class="text-sm border-b-2" :to="'/editor/' + editor.id + '/'">{{ editor.name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Problem</h2>
              </div>
              <div v-for="(problem, index) in movie.problem"
                  :key="index"
                >
                <NuxtLink class="text-sm border-b-2" :to="'/problem/' + problem.id + '/'">
                  {{ problem.name }}<span v-if="problem.hasOwnProperty('grade')">({{ problem.grade }})</span>
                </NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Published</h2>
              </div>
              <div>
                <NuxtLink class="text-sm border-b-2" :to="'/year/' + movie.year + '/'">{{ movie.year }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Tags</h2>
              </div>
              <div>
                <div v-for="(tag, index) in movie.tag"
                  :key="index"
                >
                  <NuxtLink class="text-sm border-b-2" :to="'/tag/' + tag.id + '/'">{{ tag.name }}</NuxtLink>
                </div>
              </div>
            </div>

          </div>
          <!-- リンク先 -->
        </div>
      </div>
      <div class="bg-cWhite pl-4">
        <h2 class="font-semibold pb-2">Related Videos</h2>
        <div class="overflow-x-scroll scrollbar-hide flex">
          <base-card 
            v-for="(relatedMovie, index) in relatedMovies"
            :key='index'
            :title="relatedMovie.title"
            :url="relatedMovie.url"
            :id="relatedMovie.id"
          />
        </div>
      </div>
  </layout-wrapper>
</template>

<script>

export default {

  async asyncData({ $microcms, params, error }) {
    try {
      const movie = await $microcms.get({
        endpoint: `movie/${params.id}`
      })
      const relatedMovies = await $microcms.get({
        endpoint: 'movie',
        queries: { filters: `relatedMovie[contains]${params.id}` },
      })
      return {
        movie: movie,
        relatedMovies: relatedMovies.contents
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  },
  head() {
    return {
      title: this.movie.title,
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