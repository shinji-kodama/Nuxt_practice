<template>
  <div>
    <div v-for="team in teams" :key="team.id">
      <img :src="team.image" alt="team image" />
      <h1>{{ team.name }}</h1>
    </div>
    <button><NuxtLink to="/chat">チャット申請</NuxtLink></button>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$store.dispatch("init");
  },
  computed: {
    teams() {
      console.log(this.$route);
      return this.$store.state.teams.filter(
        el => el.id === this.$route.params.id
      );
    }
  }
};
</script>
