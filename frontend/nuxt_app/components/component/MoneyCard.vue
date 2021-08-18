<template>
  <div  class="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
    <div class="mb-6">
      <div class="flex items-center justify-between pb-6 mb-6 border-b">
        <div>
          <p class="text-3xl font-extrabold">{{ moneyList.title }}</p>
        </div>
      </div>
      <div>
        <p class="mb-2 font-bold tracking-wide">{{  }}</p>
        <ul class="space-y-2">
          <li class="flex items-center" v-for="infomation in moneyList.array" :key="infomation">
            <CheckIcon />
            <p class="font-medium text-gray-800">{{ infomation }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    moneyList:{
      type:Object
    }
  }

}
</script>
