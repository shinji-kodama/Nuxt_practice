<template>
  <div>
    <div class="flex w-11/12 mx-auto">
      <div class="w-64 h-screen bg-white m-4 p-4 rounded-3xl">
        <div>
          <input type="text" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-11/12 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-4" aria-label="Let's search!" placeholder="Let's search!"  />
        </div>
        <ul class="mt-2">
          <li class="mt-3 ml-2">England</li>
          <li class="mt-3 ml-2">Spain</li>
          <li class="mt-3 ml-2">Japan</li>
          <li class="mt-3 ml-2">Italy</li>
        </ul>
        <!-- <div class="form">
          <form @submit.prevent="add">
            <input type="text" v-model="name" />
            <button>Add</button>
          </form>
        </div> -->
      </div>
      <div class="w-4/5 bg-white m-4 rounded-3xl">
        <ul class="m-2 flex flex-wrap">
          <li v-for="team in teams" :key="team.id" class="w-80 h-80 m-2 shadow">
            <div class="h-2/4 shadow-sm"><img src="/football_fan.jpg" alt="" class="h-full w-full object-cover"></div>
            <p class="p-2 overflow-hidden">{{ team.name }}</p>
            <!-- <button @click="remove(team.id)">X</button> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data: function() {
    return {
      name: ""
    };
  },
  created: function() {
    this.$store.dispatch("init");
  },
  methods: {
    add() {
      this.$store.dispatch("add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("remove", id);
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>
