<template>
  <div>
    <ul>
      <li v-for="chat in chats" :key="chat.uid">
        <!-- <span v-if="chat.create_date"> -->
          {{ chat.message }}
          <!-- {{ chat.created.toDate() }} -->
        <!-- </span> -->
        <button v-on:click="remove(chat.id)">X</button>
      </li>
    </ul>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input type="text" v-model="chatData.message" />
        <button>送信</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { auth } from "~/plugins/firebase";

const db = firebase.firestore();
const chatsRef = db.collection("chats");

export default {
  data() {
    return {
      chatData: {
        message: "",
        docId: this.$route.params.id,
        uid: "",
      },

      chats: [],
    };
  },
  created: function() {
    //サブコレクションからメッセージを取得する
    chatsRef.doc(this.$route.params.id).collection("message").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === "added"){
          this.chats.push(change.doc.data());
          console.log(change.doc.data());
        }
      })
    });

    //メッセージにuidを含める
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.chatData.uid = null;
      } else {
        this.chatData.uid = user.uid;
      }
    });
  },
  methods: {
    add() {
      this.$store.dispatch("chat/add", this.chatData);
      this.chatData.message = "";
    },
    remove() {
      this.$store.dispatch("chat/remove");
    }
  },
  computed: {
    // chats() {
      // const a = this.$store.state.chat.chats;
      // console.log(Object.entries(a));
      // return a;
      // return this.$store.state.chat.messages;
      // console.log(this.$route);
      // return this.$store.state.chat.chats.filter(
      //   el => el.id === this.$route.params.id);
    // }
  },
}
</script>

<style scoped>
li > span > span.done {
  text-decoration: line-through;
}
</style>
