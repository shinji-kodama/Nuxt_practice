<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <!-- トップ動画ここから -->
    <div class="flex relative">
      <div class="absolute inset-0 transition duration-500 opacity-100">
        <video preload="none" autoplay loop muted playsinline webkit-playsinline="true">
          <source src="~/assets/video/short_sample_alex.mp4" type="video/mp4">
        </video>
      </div>
      <div class="z-10 flex-1 py-8 md:py-20 lg:py-32">
        <div class="transition duration-500 px-3 ">
          <p class="text-cBlack text-lg font-bold">
            Alex Megos Climbs "Lucid Dreaming" (8C/V15) In Bishop
          </p>
          <p class="text-cBlack text-lg font-bold">
            Alex Megos
          </p>
        </div>
        <div class="flex mt-6 ml-3">
          <button class="md:hidden bg-cWhite flex items-center justify-center rounded cursor-pointer px-3 py-1">
            <span class="text-sm">Watch Now</span>
            <div class="w-2 h-6 ml-1">
              <span class="text-sm">▶</span>
            </div>
          </button>
        </div>
      </div>
    </div> 
    <!-- {{ movies }} -->
    <!-- トップ動画ここまで -->
    <div class="bg-cWhite py-5">
      <base-heading>Latest videos</base-heading>
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
    <!-- Featuresここから -->
    <div class="bg-cWhite py-5">
      <base-heading>Features</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(feature, index) in features"
            :key='index'
            :title="feature.title"
            :url="feature.url"
            :id="feature.id"
          />
        </div>
    </div>
    <!-- Tagsここから -->
    <!-- <div class="bg-cWhite py-5">
      <base-heading>Tags</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card />
          <base-card />
          <base-card />
          <base-card />
          <base-card />
        </div>
    </div> -->
    <!-- Garallyここから -->
    <div class="bg-cWhite py-5">
      <base-heading>Garally</base-heading>
        <div class="grid grid-cols-3 gap-0.5">
          <base-tile
            v-for="(gallery, index) in garallies"
            :key='index'
            :title="gallery.title"
            :url="gallery.url"
            :id="gallery.id"
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
    const movies = await axios.get(`${$config.apiUrl}/movie`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })

    const features  = await axios.get(`${$config.apiUrl}/movie?filters=feature[equals]true`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })

    const garallies  = await axios.get(`${$config.apiUrl}/movie?filters=garally[equals]true`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })

    return {
      movies: movies.data.contents,
      features: features.data.contents,
      garallies: garallies.data.contents,
    }
  },
}
</script>