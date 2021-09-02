<template>
  <div>
    <div>{{ user }}</div>
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
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>