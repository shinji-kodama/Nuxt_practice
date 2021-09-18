<template>
  <div>
    <div class="m-2">
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
        my-2
        p-3"
        aria-label="Let's search other teams!"
        placeholder="さあ、試合相手を見つけよう！"
      />
      <div class="flex flex-wrap">
        <ul v-for="team in TeamList" :key="team.id" class="w-1/2 text-center">
          <li class="mt-3">{{ team.name }}</li>
        </ul>
      </div>
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
    sorted(e){
      this.selectName(e.target.value);
    },
  },
};
</script>
