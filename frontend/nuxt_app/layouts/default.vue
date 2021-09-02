<template>
  <div class="bg-blue-200 text-gray-700 font-sans">
    <div v-if="isLogin">
      <HeaderWithLogin />
    </div>
    <div v-else>
      <Header />
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  middleware: 'auth',
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
        this.isLogin = user.uid;
      }
    });
  },
};
</script>