<template>
  <div>
    <ul>
      <li v-for="team in teams" :key="team.id">
        {{ team.name }}
        <button @click="remove(team.id)">X</button>
      </li>
    </ul>
    <div class="form">
      <form @submit.prevent="add">
        <input type="text" v-model="name" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
