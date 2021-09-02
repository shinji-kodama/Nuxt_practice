<template>
  <div>
    <div>{{ user }}</div>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>