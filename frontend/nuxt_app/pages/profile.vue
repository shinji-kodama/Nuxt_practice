<template>
  <div>
    <div>＜＜ユーザー情報＞＞</div>
    <template v-if="isEdited">
      <div>ユーザー名：{{ userInfo.loginName }}</div>
      <div>メールアドレス：{{ userInfo.email }}</div>
      <button @click="edit">編集</button>
    </template>
    <template v-else>
      <img :src="showImage">
      <div><input type="file" @change="selectImage"></div>
      <div><input type="text" :value="userInfo.loginName" @input="nameChange" /></div>
      <div><input type="text" :value="userInfo.email" @input="emailChange" /></div>
      <button @click="update">更新</button>
      <button @click="cancel">キャンセル</button>
    </template>
    <button><NuxtLink to="myPage">マイページ</NuxtLink></button>
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
        email: "",
        image: "",
      },

      showImage: "",
      isEdited: true,
    };
  },
  created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.userInfo.loginName = null;
      } else {
        this.userInfo.loginName = user.displayName;
        this.userInfo.email = user.email;
        this.userInfo.user_id = user.uid;
      }
      console.log(user);
    });
  },

  methods: {
    edit() {
      return (this.isEdited = false);
    },
    cancel() {
      return (this.isEdited = true);
    },
    update() {
      this.$store.dispatch("updateUser", this.userInfo);
      this.isEdited = true;
    },
    nameChange: function (val) {
      this.userInfo.loginName = val.target.value;
    },
    emailChange: function (val) {
      this.userInfo.email = val.target.value;
    },
            selectImage (e) {
            console.log(e.target.files[0]);
            const file = e.target.files[0];
            this.userInfo.image = file;

            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                this.showImage = e.target.result
            }
        },
  },
};
</script>