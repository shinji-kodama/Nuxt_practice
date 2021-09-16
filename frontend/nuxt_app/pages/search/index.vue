<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />

    <div class="flex flex-col space-y-wrapper pt-wrapper">
      <!-- 検索 -->
      <div class="pt-4 md:pt-6">
        <form
          action="."
          @submit.prevent
        >
          <div class="box-x-wrapper">
            <label for="" class="py-2 fs-small-regular">Search</label>
            <div class="flex border-b border-element-divider-light">
                <input
                type="search"
                @keypress.enter="search"
                v-model="input"
                placeholder="Type it in"
                class="outline-none py-4 flex-1 min-w-0"
                >

            </div>
          </div>
        </form>
      </div>

      <div v-show="movies.length >= 1">
          <base-card 
            v-for="(movie, index) in movies[0]"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
        <div v-show="movies[0] == ''">
          <p>sorry... No Movies</p>
        </div>

      </div>

      <!-- タグの一覧 -->
      <div class="box-x-wrapper">
        <div class="mt-6">
          <div class="py-2 fs-small-regular">Boulder</div>
          <ul class="grid grid-cols-12 gap-4 my-4">
            <li class="flex flex-col col-span-6">
              <button class="transition-colors duration-100 ease-in bg-base-elevated-light hover:bg-base-push-light">
                <div class="flex items-center w-full h-12 p-3 space-x-2 fs-base-interface-bold">
                  <span>Tag</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      input:'',
      searchable: false,
      movies:[]
    };
  },

  methods: {

    search() {
      console.log(this.input)
      const apiUrl = this.$config.apiUrl
      const apiKey = this.$config.apiKey
      const endPoint = 'movie'

      this.movies = []
      axios.get(`${apiUrl}/${endPoint}?q=${this.input}`, {
        headers: { 'X-API-KEY': apiKey }
        }).then(response => {
          console.log('response')
          this.movies.push(response.data.contents)
        })
      },

    getClear(){
      this.input = ''
      this.movies = []
    }

  },
};

</script>