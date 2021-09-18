<template>
  <div>
    <div v-for="team in teams" :key="team.id">
      <img :src="team.image" alt="team image" />
      <h1>{{ team.name }}</h1>
    <button @click="add(team.user_id)">チャット申請</button>
    </div>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data(){
    return {
      uid: "",
    }
  },
  created: function() {
    this.$store.dispatch("init");

    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.uid = null;
      } else {
        this.uid = user.uid;
      }
    });
  },
  computed: {
    teams() {
      return this.$store.state.teams.filter(
        el => el.id === this.$route.params.id
      );
    }
  },
  methods: {
    add(id){
      this.$store.dispatch("chat/makeChatRoom", { uid: this.uid, other_id: id });
    }
  }
};
</script>
