<template>
  <div>
    <!-- 検索エリア -->
    <div class="mx-3">
    <div class="md:absolute md:bg-gray-200 w-full md:w-1/3 md:m-10 md:p-5  rounded-lg">
      <div class="hidden md:block inset-12 text-2xl md:text-4xl">
        <span>もっと</span><br>
        <span class="bg-black text-white">わくわくする日常を</span><br>
        <span class="text-xs md:text-sm">we need football more.</span>
      </div>
      <SideBar :TeamList="teams" />
    </div>
    </div>
    <!-- トップビューを表示 -->
    <div class="bg-top-image bg-cover bg-center h-screen/3 md:h-screen/1.25 md:w-full"></div>

    <!-- メインエリア -->
    <div class="bg-gray-200 relative backdrop-opacity-50">

    <!-- カード・リスト切り替えバー -->
    <div class="md:flex md:w-11/12 mx-auto">
    </div>
      <div class="md:w-4/5 mx-auto">
        <!-- <ul class="hidden md:flex md:mx-8">
          <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
          <li class="p-2">/</li>
          <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
        </ul> -->

        <!-- メインコンテンツ -->
        <div class="rounded-3xl md:m-4">
          <div v-if="viewMode === 'card'">
            <MainView/>
          </div>
          <div v-else>
            <ListView :TeamList="teams" />
          </div>
        </div>
        
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
      const teams = this.$store.state.teams;
      return teams;
    },
  },
};
</script>