<template>
  <div>
    <div>{{ isLogin }}</div>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data() {
    return {
      isLogin: "",
    };
  },
  created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.isLogin = null;
      } else {
        this.isLogin = user.displayName;
        console.log(user);
      }
    });
  },
};
</script>