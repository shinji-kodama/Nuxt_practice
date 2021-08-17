<template>
  <div>
    <ul class="m-2 flex flex-wrap">
      <li v-for="team in TeamList" :key="team.id" class="w-80 h-4/6 m-2 shadow rounded-2xl">
        <div class="h-2/4 shadow-sm">
          <img :src="team.img" alt="team image" class="h-full w-full object-cover rounded-2xl"/>
        </div>
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

        <!-- <button @click="remove(team.id)">X</button> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    TeamList: {
      type: Array,
      default: "",
    },
  },

};
</script>
