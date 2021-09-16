<template>
  <div class="my-5">
    <div>
      <input
        v-model="keyword"
        @input="sorted"
        type="text"
        class="
        focus:border-light-blue-500
        focus:ring-1
        focus:ring-light-blue-500
        focus:outline-none
        w-full
        text-sm
        text-black
        placeholder-gray-500
        border
        border-gray-200
        rounded-lg
        p-2"
        aria-label="Let's search other teams!"
        placeholder="さあ、試合相手を見つけよう！"
      />
    </div>
    <ul v-for="team in TeamList" :key="team.id" class="hidden md:block mt-2">
      <li class="mt-3 ml-2">{{ team.name }}</li>
    </ul>
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
    sorted(e){
      this.selectName(e.target.value);
    },
  },
};
</script>
