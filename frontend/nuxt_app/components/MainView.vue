<template>
  <div>
    <ul class="m-2 flex flex-wrap">
      <li
        v-for="team in filterdTeams(getName)"
        :key="team.id"
        class="card-width bg-white h-200px m-2 shadow rounded-2xl"
      >
        <NuxtLink :to="'/teams/' + team.id">
          <div class="h-2/5 shadow-sm">
            <img
              :src="team.image"
              :alt="team.image"
              class="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <p class="px-2 py-4 overflow-hidden">{{ team.name }}</p>
          <div class="relative pt-1">
            <div class="flex m-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200"
                >
                  チームワーク
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.teamwork }}%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-blue-200"
            >
              <div
                :style="'width:' + team.teamwork + '%'"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
            <div class="flex m-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-200"
                >
                  技術力
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.skill }}%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-red-200"
            >
              <div
                :style="'width:' + team.skill + '%'"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
            </div>
            <div class="flex m-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200"
                >
                  戦術理解度
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.tactics }}%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-green-200"
            >
              <div
                :style="'width:' + team.tactics + '%'"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    //gettersを呼び出し。
    filterdTeams() {
      return this.$store.getters.filterdTeams;
    },
    //storeから検索フォームで入力された値を取得。
    getName() {
      return this.$store.state.teamName;
    },
  },
  mounted() {
    //画面上部にローディングバーを表示
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 300);
    });
  },
};
</script>

<style scoped>

@media screen and ( min-width:1px ){

.card-width{
  width: 45%;
}
}

@media screen and ( min-width:768px ){

.card-width{
  width: 45%;
}
}

@media screen and ( min-width:1070px ){

.card-width{
  width: 31%;
}

}

</style>
