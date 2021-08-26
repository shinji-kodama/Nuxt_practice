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
import firebase from "~/plugins/firebase";

// const auth = firebase.auth();

export default {
    data(){
        return {
            mail: "",
            pass: "",
        }
    },
    methods: {
        login(){
            // alert("Login")
            firebase.auth().signInWithEmailAndPassword(this.mail, this.pass)
            .then(user => {
                console.log(user.user.uid);
                this.$router.push("/")
            })
            .catch(e => console.log(e.message))
        }
    }
};
</script>
