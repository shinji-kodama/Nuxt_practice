<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />

    <div class="flex flex-col space-y-wrapper pt-wrapper">
      <!-- 検索 -->
      <div class="pt-4 md:pt-6">
        <form action="">
          <div class="box-x-wrapper">
            <label for="" class="py-2 fs-small-regular">Seaech</label>
            <div class="flex border-b border-element-divider-light">
              <input 
               @keypress="setSearchable"
               @keypress.enter="search"
              type="search" placeholder="Type it in" class="outline-none py-4 flex-1 min-w-0">
            </div>
          </div>
        </form>
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
      searchable: false,
    };
  },
  methods: {
    setSearchable() {
      this.searchable = true;
    },
    search(e) {
      if (!e.target.value.trim() || !this.searchable) {
        return;
      }
      this.$router.push({ path: '/search', query: { q: e.target.value } });
    },
  },
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