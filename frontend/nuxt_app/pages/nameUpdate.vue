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

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    update () {
      this.$store.dispatch("update", this.name);
    },
  },
};
</script>
