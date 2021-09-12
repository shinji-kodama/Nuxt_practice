<template>
  <div>

<ValidationObserver v-slot="{ invalid }">
  <!-- メールアドレス入力フォーム -->
  <ValidationProvider name="メールアドレス" rules="required" v-slot="v">
    <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="メールアドレス"
      v-model="mail"
    />
  <span>{{ v.errors[0] }}</span>
  </ValidationProvider>

  <!-- パスワード入力フォーム -->
  <ValidationProvider name="パスワード" rules="required" v-slot="v">
    <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="パスワード"
      v-model="pass"
    />
  <span>{{ v.errors[0] }}</span>
  </ValidationProvider>

  <button @click="signup" :disabled="invalid">新規登録</button>
</ValidationObserver>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

import { ValidationObserver } from 'vee-validate';
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
    ValidationProvider
  },
  data() {
    return {
    //   name: "",
      mail: "",
      pass: "",
    };
  },
  methods: {
    signup() {
      auth
        .createUserWithEmailAndPassword(this.mail, this.pass)
        .then((user) => {
          console.log(user.user.uid);
          this.$router.push("/nameUpdate");
        })
        .catch((e) => console.log(e.message));
    },
  },
};
</script>
