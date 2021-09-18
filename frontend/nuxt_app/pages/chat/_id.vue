<template>
  <div>
    {{ chats }}
    <ul>
      <li v-for="chat in chats" :key="chat.uid">
        <!-- <span v-if="chat.create_date"> -->
          {{ chat.uid }}
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

const db = firebase.firestore();
const chatsRef = db.collection("chats");

export default {
  data() {
    return {
      chatData: {
        message: "",
        docId: this.$route.params.id,
        uid: 2,
      },

      chats: [],
    };
  },
  created: function() {
    // this.$store.dispatch("chat/chatInit", { docId: this.chatData.docId });
    
    chatsRef.doc(this.$route.params.id).collection("message").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        this.chats.push(doc.data());
        console.log(doc.data());
      })
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
