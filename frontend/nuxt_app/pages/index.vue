<template>
  <div>
      <div class="md:w-64 md:h-screen mx-2  my-3 md:my-20  rounded-3xl">
        <SideBar :TeamList="teams" />
      </div>
    <div class="bg-gray-200 relative backdrop-opacity-50">
      <img src="/topview.png" class="bg-gray-200 backdrop-opacity-50">
      <div class="absolute inset-12 text-2xl">
        <span class=" text-white">もっと</span><br>
        <span class="bg-black text-white">わくわくする日常を</span><br>
        <span class="text-xs text-white">we need football more.</span>
      </div>
    <div class="md:flex md:w-11/12 mx-auto">
    </div>
      <div class="md:w-4/5 mx-auto">
        <ul class="hidden md:flex md:mx-8">
          <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
          <li class="p-2">/</li>
          <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
        </ul>
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