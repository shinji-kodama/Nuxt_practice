<template>
  <layout-wrapper>
    <layout-tab />
      <div class="video">
        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${movie.url}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="flex flex-col bg-cWhite p-4">
        <div class="flex flex-col xl:px-10 xl:pt-2">
          <!-- タイトルと国名 -->
          <div class="">
            <div class="mb-1">
              <div>
                <h1 class="mb-2 font-semibold">{{ movie.title }}</h1>
                <div>
                  <NuxtLink class="text-sm" to="/">{{ movie.area.name }}</NuxtLink>
                  ,
                  <NuxtLink class="text-sm" to="/">{{ movie.country.name }}</NuxtLink>
                </div>
              </div>
            </div>
            <div class="border-b"></div>
          </div>
          <!-- 基本情報、タグ情報 -->
          <div class="py-5 grid grid-cols-2 gap-2 border-b">
            <!-- 1ユニット -->
            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Climber</h2>
              </div>
              <div>
                <NuxtLink class="text-sm border-b-2" to="/">{{ movie.climber[0].name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Editor</h2>
              </div>
              <div>
                <NuxtLink class="text-sm border-b-2" to="/">{{ movie.editor[0].name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Problem</h2>
              </div>
              <div>
                <NuxtLink class="text-sm border-b-2" to="/">{{ movie.problem[0].name }}({{ movie.problem[0].grade }})</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2 class="font-semibold">Year</h2>
              </div>
              <div>
                <NuxtLink class="text-sm border-b-2" to="/">{{ movie.year }}</NuxtLink>
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
          <div>

          </div>
        </div>
        <div>
          <p>Related Videos</p>       
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
      return {
        movie: movie,
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