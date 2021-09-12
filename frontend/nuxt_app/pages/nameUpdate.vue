<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <!-- メールアドレス入力フォーム -->
      <ValidationProvider name="メールアドレス" rules="required" v-slot="v">
        <input
          type="text"
          class="border border-gray-200 m-5"
          placeholder="Name"
          v-model.trim="name"
        />
        <span>{{ v.errors[0] }}</span>
      </ValidationProvider>

      <button @click="update" :disabled="invalid">登録</button>
    </ValidationObserver>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";
const user = auth.currentUser;

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
    ValidationProvider
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    update() {
      user
        .updateProfile({
          displayName: this.name
        })
        .then(() => {
          console.log("success");
          this.$router.push("/myPage");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
