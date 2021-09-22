<template>
  <div>
    <div class="bg-gray-100 shadow m-2 p-2 flex rounded-lg">
      <span class="w-auto flex justify-end items-center text-gray-500 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        class="bg-gray-100 w-full rounded p-2"
        v-model="keyword"
        @input="sorted"
        type="text"
        placeholder="試合相手を見つけよう！'"
      />
              <nuxt-link to="/search" class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
        <button>
          <p class="font-semibold text-xs">Search</p>
        </button>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      keyword: ""
    };
  },
  props: {
    TeamList: {
      type: Array,
      default: ""
    }
  },
  methods: {
    ...mapMutations(["selectName"]),

    //検索フォームに入力された値をstoreに送る関数。
    sorted(e) {
      this.selectName(e.target.value);
    }
  }
};
</script>
