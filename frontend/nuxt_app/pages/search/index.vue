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
        <!-- <form action=""> -->
          <div class="box-x-wrapper">
            <label for="" class="py-2 fs-small-regular">Search</label>
            <div class="flex border-b border-element-divider-light">
              <!-- <form
              action="."
              @submit.prevent
              > -->
                <input
                type="search"
                @keypress.enter="search"
                v-model="input"
                placeholder="Type it in"
                class="outline-none py-4 flex-1 min-w-0"
                >
                <!-- <button @click="getClear">clear</button> -->
              <!-- </form> -->
              <!-- <input 
               @keypress.enter="search"
               v-model="input"
              type="text" placeholder="Type it in" class="outline-none py-4 flex-1 min-w-0"> -->
            </div>
          </div>
        </form>
        <button @click="getClear">clear</button>
      </div>

      <!-- <div>
        <p>{{ movies }}</p>
      </div> -->
      <div v-show="movies.length >= 1">
        <!-- <div v-for="(movie, index) in movies"
            :key='index'> -->
          <base-card 
            v-for="(movie, index) in movies[0]"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
        <!-- </div> -->
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
    // async search({ $config }) {

    //   console.log(this.input)
    //   const response = await axios.get(`https://r0ckandc0de.microcms.io/api/v1/movie?q=${this.input}`, {
    //     headers: { 'X-API-KEY': 'cb293607-01ce-43c6-8ab4-7cf59aadf40f' }
    //   }).then(response => {
    //     console.log(response)
    //   })
    //   // console.log('成功')
    //   // console.log(movies)
    //   // return{
    //   //   movies: movies.contents,
    //   // }

     search() {
        console.log(this.input)
        this.movies = []
        axios.get(`https://r0ckandc0de.microcms.io/api/v1/movie?q=${this.input}`, {
          headers: { 'X-API-KEY': 'cb293607-01ce-43c6-8ab4-7cf59aadf40f' }
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

    



  // async asyncData({ $config }) {
  //   const { data } = await axios.get(`${$config.apiUrl}/movie`, {
  //     headers: { 'X-API-KEY': $config.apiKey },
  //   })
  //   return {
  //     movies: data.contents,
  //   }
  // },


  // methods: {
  //   async search({ $microcms }) {
  //     console.log(this.input)
  //     const movies = await $microcms.get({
  //       endpoint: 'movie?q=James',
  //     })

  //     return{
  //       movies: movies.contents,
  //     }
  //   },
  // },

  // async asyncData({ $microcms }) {
  //   const movies = await $microcms.get({
  //     endpoint: 'movie?q=James',
  //   });

  //   return{
  //     movies: movies.contents,
  //   }
  // }

  
};


// export default {

//   async asyncData({ $config }) {
//     const { data } = await axios.get(`${$config.apiUrl}/movie`, {
//       headers: { 'X-API-KEY': $config.apiKey },
//     })
//     return {
//       movies: data.contents,
//     }
//   },
// }
</script>