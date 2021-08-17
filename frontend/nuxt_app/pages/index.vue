<template>
  <div>
    <div class="flex w-11/12 mx-auto">
      <div class="w-64 h-screen bg-white m-4 p-4 rounded-3xl">
        <SideBar :TeamList="teams" />
      </div>
      <div class="w-4/5 my-4">
                <ul class="flex mx-8">
                    <li @click="changeCard()" class="p-2 cursor-pointer">カード</li>
                    <li class="p-2">/</li>
                    <li @click="changeList()" class="p-2 cursor-pointer">リスト</li>
                </ul>
        <div class="bg-white m-4 rounded-3xl">
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
  layout: 'default',
  data: function() {
    return {
      viewMode: 'card',
    };
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
    },
  },
    created: function() {
    this.$store.dispatch("init");
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>
