<template>
  <div>
    <div class="flex w-11/12 mx-auto">
      <div class="w-64 h-screen bg-white my-20 p-4 rounded-3xl">
        <SideBar :TeamList="lists" />
      </div>
      <div class="w-4/5 my-4">
        <ul class="flex mx-8">
          <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
          <li class="p-2">/</li>
          <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
        </ul>
        <div class="m-4 rounded-3xl">
          <div v-if="viewMode === 'card'">
            <MainView :TeamList="lists" />
          </div>
          <div v-else>
            <ListView :TeamList="lists" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data: function() {
    return {
      lists: [],
      viewMode: "card"
    };
  },
  created: function() {
    this.$store.dispatch("init");
    //computedの代わりに記載
    this.lists = this.$store.state.teams;
  },
  methods: {
    add() {
      this.$store.dispatch("add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("remove", id);
    },
    changeList() {
      this.viewMode = "list";
    },
    changeCard() {
      this.viewMode = "card";
    }
  },
  // computed: {
  //   teams() {
  //     return this.$store.state.teams;
  //   }
  // }
};
</script>
