<template>
  <layout-wrapper>
    <layout-tab />
      <div class="video">
        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${movie.url}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="flex flex-col bg-cWhite">
        <div class="flex flex-col xl:px-10 xl:pt-2">
          <!-- タイトルと国名 -->
          <div>
            <div>
              <div>
                <h1>{{ movie.title }}</h1>
                <div>
                  <NuxtLink to="/">{{ movie.area.name }}</NuxtLink>
                  ,
                  <NuxtLink to="/">{{ movie.country.name }}</NuxtLink>
                </div>
              </div>
            </div>
            <div class="border-b"></div>
          </div>
          <!-- 基本情報、タグ情報 -->
          <div class="py-2 grid grid-cols-2 border-b">
            <!-- 1ユニット -->
            <div class="my-4 inline-block w-full">
              <div>
                <h2>Climber</h2>
              </div>
              <div>
                <NuxtLink to="/">{{ movie.climber[0].name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2>Editor</h2>
              </div>
              <div>
                <NuxtLink to="/">{{ movie.editor[0].name }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2>Problem</h2>
              </div>
              <div>
                <NuxtLink to="/">{{ movie.problem[0].name }}({{ movie.problem[0].grade }})</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2>Year</h2>
              </div>
              <div>
                <NuxtLink to="/">{{ movie.year }}</NuxtLink>
              </div>
            </div>

            <div class="my-4 inline-block w-full">
              <div>
                <h2>Tags</h2>
              </div>
              <div>
                <div v-for="(tag, index) in movie.tag"
                  :key="index"
                >
                  <NuxtLink :to="'/tag/' + tag.id + '/'">{{ tag.name }}</NuxtLink>
                  <!-- <a :href="'/tag/' + tag.id + '/'">{{ tag.name }}</a> -->
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