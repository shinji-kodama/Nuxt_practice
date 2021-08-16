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
          <li v-for="team in teams" :key="team.id" class="w-80 h-4/6 m-2 shadow rounded-2xl">
            <div class="h-2/4 shadow-sm"><img src="/football_fan.jpg" alt="" class="h-full w-full object-cover rounded-2xl"></div>
            <p class="px-2 py-4 overflow-hidden">{{ team.name }}</p>
            <div class="relative pt-1">
            <div class="flex m-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200">
                  チームワーク
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.teamwork }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-blue-200">
              <div :style="('width:' + team.teamwork + '%')" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
            </div>
            <div class="flex m-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-200">
                  技術力
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.skill }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-red-200">
              <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
            </div>
                        <div class="flex m-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200">
                  戦術理解度
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block">
                  {{ team.tactics }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mx-3 mb-4 text-xs flex rounded bg-green-200">
              <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
            </div>
          </div>
          
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
