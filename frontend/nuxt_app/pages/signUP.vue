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

export default {
  data() {
    return {
      mail: "",
      pass: "",
    };
  },
  methods: {
        signup() {
            this.$store.dispatch('signup', {email: this.mail, password: this.pass})
        },
  },
};
</script>
