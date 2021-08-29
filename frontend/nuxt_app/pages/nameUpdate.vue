<template>
  <div>
    <input
      type="text"
      class="border border-gray-200 m-5"
      placeholder="Name"
      v-model="name"
    />
    <button @click="update">登録</button>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

const user = auth.currentUser;

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    update() {
      user
        .updateProfile({
          displayName: this.name,
        })
        .then(() => {
          console.log("success");
          this.$router.push("/myPage");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
