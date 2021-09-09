<template>
  <div>
      <div>＜＜ユーザー情報＞＞</div>
    <div>ユーザー名：{{ userInfo.loginName }}</div>
    <button><NuxtLink to="profile">ユーザープロフィール</NuxtLink></button>
    <div>＜＜チーム登録＞＞</div>
    <button><NuxtLink to="forms/registration">チーム登録</NuxtLink></button>
    <div>＜＜チームセレクト＞＞</div>
    <div>セレクトチームID：{{ teamInfo.selectedTeamId }}</div>
    <select v-model="teamInfo.selectedTeamId" name="teams">
      <option v-for="team in teams" :value="team.id" :key="team.id">
        <div>{{ team.name }}</div>
      </option>
    </select>
    <!-- チーム表示画面 -->
    <template v-if="isEdited">
      <ul v-for="one in oneTeam" :key="one.id">
        <li>
          <div>{{ one.name }}</div>
          <div>{{ one.level }}</div>
          <div>{{ one.area }}</div>
          <button @click="edit">編集</button>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul v-for="one in oneTeam" :key="one.id">
        <li>
          <div><input type="text" :value="one.name" @input="nameChange" /></div>
          <div>
            <input type="text" :value="one.level" @input="levelChange" />
          </div>
          <div><input type="text" :value="one.area" @input="areaChange" /></div>
          <button @click="update">更新</button>
          <button @click="cancel">キャンセル</button>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data() {
    return {
        userInfo: {
            user_id: "",
            loginName: "",
        },

      teamInfo: {
        selectedTeamId: "",
        name: "",
        level: "",
        area: "",
      },

      isEdited: true,
    };
  },
  created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.userInfo.loginName = null;
      } else {
        this.userInfo.loginName = user.displayName;
        this.userInfo.user_id = user.uid;
      }
    });
    this.$store.dispatch("init");
  },
  computed: {
    teams() {
      return this.$store.state.teams.filter(
        (el) => el.user_id === this.userInfo.user_id
      );
    },
    oneTeam() {
      return this.$store.state.teams.filter(
        (el) => el.user_id === this.userInfo.user_id && el.id === this.teamInfo.selectedTeamId
      );
    },
  },
  methods: {
    edit() {
      return this.isEdited = false;
    },
        cancel() {
      return this.isEdited = true;
    },
    update() {
      this.$store.dispatch("update", this.teamInfo);
      this.isEdited = true;
    },
    nameChange: function (val) {
      this.teamInfo.name = val.target.value;
      console.log(this.teamInfo.name);
    },
    levelChange: function (val) {
      this.teamInfo.level = val.target.value;
      console.log(this.teamInfo.level);
    },
    areaChange: function (val) {
      this.teamInfo.area = val.target.value;
      console.log(this.teamInfo.area);
    },
  },
};
</script>