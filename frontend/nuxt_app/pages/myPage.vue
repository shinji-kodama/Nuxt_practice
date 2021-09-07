<template>
  <div>
    <div>{{ isLogin }}</div>
    <div>{{ user_id }}</div>
    <button><NuxtLink to="forms/registration">チーム登録</NuxtLink></button>
    <div>セレクトチームID：{{selectedTeam}}</div>
    <div>チームセレクト</div>
    <select v-model="selectedTeam" name="teams">
      <option v-for="team in teams" :value="team.id" :key="team.id">{{ team.name }}</option>
    </select>
    <ul v-for="one in oneTeam" :key="one.id">
      <li>
        <div>{{ one.name }}</div>
        <button>編集</button>
        <button>削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data() {
    return {
      user_id: "",
      isLogin: "",
      selectedTeam: "",
    };
  },
  created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.isLogin = null;
      } else {
        this.isLogin = user.displayName;
        this.user_id = user.uid;
        console.log(user);
      }
    });
    this.$store.dispatch("init");
  },
  computed: {
    teams() {
      return this.$store.state.teams.filter(
        (el) => el.user_id === this.user_id
      );
    },
    oneTeam() {
      return this.$store.state.teams.filter(
        (el) => el.user_id === this.user_id && el.id === this.selectedTeam
      );
    },
  },
};
</script>