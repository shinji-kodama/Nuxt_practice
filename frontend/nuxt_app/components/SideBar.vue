<template>
  <div>
    <div>
      <input
        type="text"
        class="
        focus:border-light-blue-500
        focus:ring-1
        focus:ring-light-blue-500
        focus:outline-none
        w-11/12
        text-sm
        text-black
        placeholder-gray-500
        border
        border-gray-200
        rounded-md
        py-2 pl-4"
        aria-label="Let's search!"
        placeholder="Let's search!"
      />
    </div>
    <ul v-for="team in TeamList" :key="team.id" class="mt-2">
      <li class="mt-3 ml-2">{{ team.name }}</li>
    </ul>
    <!-- <div class="form">
          <form @submit.prevent="add">
            <input type="text" v-model="name" />
            <button>Add</button>
          </form>
        </div> -->
  </div>
</template>

<script>
export default {
  props: {
    TeamList: {
      type: Array,
      default: ""
    }
  }
};
</script>
