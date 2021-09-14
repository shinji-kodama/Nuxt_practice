<template>
  <div>
    <!-- ユーザー情報 -->
    <div>＜＜ユーザー情報＞＞</div>
    <div>ユーザー名：{{ userInfo.loginName }}</div>
    <button><NuxtLink to="profile">ユーザープロフィール</NuxtLink></button>

    <!-- チーム登録 -->
    <div>＜＜チーム登録＞＞</div>
    <button><NuxtLink to="forms/registration">チーム登録</NuxtLink></button>

    <!-- チーム情報 -->
    <div>＜＜チームセレクト＞＞</div>
    <div>セレクトチームID：{{ teamInfo.selectedTeamId }}</div>
    <select v-model="teamInfo.selectedTeamId" name="teams">
      <option v-for="team in teams" :value="team.id" :key="team.id">
        <div>{{ team.name }}</div>
      </option>
    </select>
    
    <!-- チーム表示画面（表示） -->
    <template v-if="isEdited">
      <ul v-for="one in oneTeam" :key="one.id">
        <li>
          <div><img :src="teamInfo.image" /></div>
          <div>{{ one.name }}</div>
          <div>{{ one.level }}</div>
          <div>{{ one.area }}</div>
          <button @click="edit">編集</button>
        </li>
      </ul>
    </template>

    <!-- チーム表示画面（編集操作） -->
    <template v-else>
      <ul v-for="one in oneTeam" :key="one.id">
        <li>
          <img :src="profileImage === '' ? teamInfo.image : profileImage" />
          <div><input type="file" @change="selectImage" /></div>

      <ValidationObserver v-slot="{ invalid }">
          <ValidationProvider name="チーム名" rules="required" v-slot="{errors}">
          <div><input type="text" v-model="teamInfo.name" /></div>
          <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="レベル" rules="required" v-slot="{errors}">
          <div><input type="text" v-model="teamInfo.level" /></div>
          <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="エリア" rules="required" v-slot="{errors}">
          <div><input type="text" v-model="teamInfo.area" /></div>
          <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <button @click="update" :disabled="invalid">更新</button>
          <button @click="cancel">キャンセル</button>
      </ValidationObserver>
        </li>
      </ul>
    </template>
    
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";
import firebase from "~/plugins/firebase";

import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";

//バリデーションルールをここで定義
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "必須入力項目です"
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
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
        image: "",
      },

      profileImage: "",
      updatedFile: "",
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
      const oneTeam = this.$store.state.teams.filter(
        (el) =>
          el.user_id === this.userInfo.user_id &&
          el.id === this.teamInfo.selectedTeamId
      );

      oneTeam.forEach((el) => {
        this.teamInfo.name = el.name;
        this.teamInfo.level = el.level;
        this.teamInfo.area = el.area;
        this.teamInfo.image = el.image;
      });

      return oneTeam;
    },
  },
  methods: {
    edit() {
      return (this.isEdited = false);
    },
    cancel() {
      return (this.isEdited = true);
    },
    update() {
      this.teamInfo.image = this.updatedFile === "" ? this.teamInfo.image : this.updatedFile;
      this.$store.dispatch("update", this.teamInfo);
      this.isEdited = true;
    },
    selectImage(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.updatedFile = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target.result);
        this.profileImage = e.target.result;
      };
    },
  },
};
</script>