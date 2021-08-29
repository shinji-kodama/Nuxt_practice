<template>
  <div>
    <!-- <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="Name"
      v-model="name"
    /> -->
    <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="MailAddress"
      v-model="mail"
    />
    <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="Password"
      v-model="pass"
    />
    <button @click="signup">新規登録</button>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data() {
    return {
    //   name: "",
      mail: "",
      pass: "",
    };
  },
  methods: {
    signup() {
      // alert("Login")
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
