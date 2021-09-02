<template>
  <div>
    <!-- <form> -->
        <input type="text" class="border border-gray-200 m-5" placeholder="MailAddress" v-model="mail" />
        <input type="text" class="border border-gray-200 m-5" placeholder="Password" v-model="pass" />
        <button @click="login">ログイン</button>
    <!-- </form> -->
  </div>
</template>

<script>

export default {
    data(){
        return {
            mail: "",
            pass: "",
        }
    },
    methods: {
        login () {
            this.$store.dispatch('login', {email: this.mail, password: this.pass})
        },
    }
};
</script>
