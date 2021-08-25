<template>
<div>
    <div v-for="team in oneteam" :key="team.id">
            <img :src="team.img" alt="team image" />
        <h1>{{ team.name }}</h1>
    </div>
    <button><NuxtLink to="/chat">チャット申請</NuxtLink></button>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["teams"]),
    oneteam() {
        return this.teams.filter(el => el.id === this.$route.params.id);
    }
  }
};
</script>

<style>
[v-cloak]{
  display: none;
}
</style>