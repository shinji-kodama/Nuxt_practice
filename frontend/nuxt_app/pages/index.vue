<template>
  <div>
    <div class="md:flex md:w-11/12 mx-auto">
      <div class="md:w-64 md:h-screen bg-white my-3 md:my-20 p-4 rounded-3xl">
        <SideBar :TeamList="teams" />
      </div>
      <div class="md:w-4/5 mx-auto my-4">
        <ul class="hidden md:flex mx-8">
          <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
          <li class="p-2">/</li>
          <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
        </ul>
        <div class="md:m-4 rounded-3xl">
          <div v-if="viewMode === 'card'">
            <MainView :TeamList="teams" />
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
    };
  },
  created: function () {
    this.$store.dispatch("init");
    //storeからteamsの配列を取得してlistsに格納する。
    // this.lists = this.$store.state.teams;
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
  },
};
</script>