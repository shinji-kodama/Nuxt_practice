<template>
  <div>
    <!-- 検索エリア -->
    <div class="mx-3">
      <div
        class="
          md:absolute
          md:bg-gray-200
          w-full
          md:w-1/3
          md:m-10
          md:p-5
          rounded-lg
        "
      >
        <div class="hidden md:block inset-12 text-2xl md:text-4xl">
          <span>もっと</span><br />
          <span class="bg-black text-white">わくわくする日常を</span><br />
          <span class="text-xs md:text-sm">we need football more.</span>
        </div>
        <SideBar :TeamList="teams" />
      </div>
    </div>
    <!-- トップビューを表示 -->
    <div
      class="
        bg-top-image bg-cover bg-center
        h-screen/3
        md:h-screen/1.25
        md:w-full
      "
    >
      <div class="md:hidden block inset-12 text-2xl p-10">
        <span class="text-white">もっと</span><br />
        <span class="bg-black text-white">わくわくする日常を</span><br />
        <span class="text-xs text-white">we need football more.</span>
      </div>
    </div>

    <!-- メインエリア -->
    <div class="bg-gray-200 relative backdrop-opacity-50">
      <!-- カード・リスト切り替えバー -->
      <div class="md:flex md:w-11/12 mx-auto"></div>
      <div class="md:w-4/5 mx-auto">
        <!-- <ul class="hidden md:flex md:mx-8">
          <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
          <li class="p-2">/</li>
          <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
        </ul> -->

        <!-- メインコンテンツ -->
        <!-- <div class="rounded-3xl md:m-4">
          <div v-if="viewMode === 'card'">
            <MainView/>
          </div>
          <div v-else>
            <ListView :TeamList="teams" />
          </div>
        </div> -->

        <!-- カテゴリー別表示 -->
        <div>
          <h1 class="text-xl text-white bg-black my-2 px-3 py-4">活動場所の近いチーム</h1>
          <div>
            <!-- メイン画面全体の枠 -->
            <ul class="flex flex-wrap">
              <!-- メイン画面カード -->
              <li
                v-for="team in filterArea"
                :key="team.id"
                class="card-width h-1/2 bg-white m-2 shadow rounded-lg"
              >
                <!-- 画像 -->
                <NuxtLink :to="'/teams/' + team.id">
                  <div class="h-2/5 shadow-sm">
                    <img
                      :src="team.image"
                      :alt="team.image"
                      class="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>

                  <!-- チーム名 -->
                  <p class="px-1 py-2 overflow-hidden">{{ team.name }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- ここまでカテゴリー別表示 -->

        <!-- カテゴリー別表示 -->
        <div>
          <h1 class="text-xl text-white bg-black my-2 px-3 py-4">レベルの近いチーム</h1>
          <div>
            <!-- メイン画面全体の枠 -->
            <ul class="flex flex-wrap">
              <!-- メイン画面カード -->
              <li
                v-for="team in filterLevel"
                :key="team.id"
                class="card-width h-1/2 bg-white m-2 shadow rounded-lg"
              >
                <!-- 画像 -->
                <NuxtLink :to="'/teams/' + team.id">
                  <div class="h-2/5 shadow-sm">
                    <img
                      :src="team.image"
                      :alt="team.image"
                      class="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>

                  <!-- チーム名 -->
                  <p class="px-1 py-2 overflow-hidden">{{ team.name }}</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- ここまでカテゴリー別表示 -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      viewMode: "card",
      teamImage: "",
    };
  },
  created: function () {
    this.$store.dispatch("init");
  },
  methods: {
    changeList() {
      this.viewMode = "list";
    },
    changeCard() {
      this.viewMode = "card";
    },
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },

    // カテゴリー別表示
    filterArea() {
      return this.$store.state.teams.filter(el => el.area === "渋谷区");
    },

    // カテゴリー別表示
    filterLevel() {
      return this.$store.state.teams.filter(el => el.level.indexOf("ハイレベル") > -1);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1px) {
  .card-width {
    width: 45%;
  }
}

@media screen and (min-width: 768px) {
  .card-width {
    width: 45%;
  }
}

@media screen and (min-width: 1070px) {
  .card-width {
    width: 31%;
  }
}
</style>
