<template>
  <div>

    <!-- マイページ表示 -->
    <div>＜＜ユーザー情報＞＞</div>
    <template v-if="isEdited">
      <div><img :src="profileImage" /></div>
      <div>ユーザー名：{{ userInfo.loginName }}</div>
      <div>メールアドレス：{{ userInfo.email }}</div>
      <button @click="edit">編集</button>
    </template>

    <!-- 編集画面 -->
    <template v-else>
      <img :src="profileImage" />
      <div><input type="file" @change="selectImage" /></div>

  <ValidationObserver v-slot="{ invalid }">
    <ValidationProvider name="ユーザー名" rules="required" v-slot="{errors}">
      <div><input type="text" v-model="userInfo.loginName" /></div>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider name="メールアドレス" rules="required" v-slot="{errors}">
      <div><input type="text" v-model="userInfo.email" /></div>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>


      <button @click="update" :disabled="invalid">更新</button>
      <button @click="cancel">キャンセル</button>
  </ValidationObserver>

    </template>
    <button><NuxtLink to="myPage">マイページ</NuxtLink></button>
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
        email: "",
        image: "",
      },

      profileImage: "",
      showImage: "",
      isEdited: true,
    };
  },
  created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.userInfo.loginName = null;
      } else {
        this.userInfo.user_id = user.uid;
        this.userInfo.loginName = user.displayName;
        this.userInfo.email = user.email;
        this.profileImage = `userProfileImages/${user.photoURL}`;
      }
      console.log(user);

      const storageRef = firebase.storage().ref();
      storageRef
        .child(this.profileImage)
        .getDownloadURL()
        .then((url) => {
          this.profileImage = url;
          console.log(user);
          console.log(this.profileImage);
        });
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
    selectImage(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.userInfo.image = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.profileImage = e.target.result;
      };
    },
  },
};
</script>