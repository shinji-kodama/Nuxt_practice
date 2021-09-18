<template>
  <div>
    <ul>
      <li v-for="chat in chats" :key="chat.id">
        <nuxt-link :to="'/chat/' + chat.id">
            <span v-for="user in users">
            {{ user.displayName }}
            </span>
        </nuxt-link>
        <button v-on:click="remove(chat.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
  data() {
    return {
        chatInfo: {
            uid: "",
            other_id: "",
        },
        sendMessage: "",
    };
  },
  created: function() {
    this.$store.dispatch("chat/init");
    this.$store.dispatch("user/userInit");

    //ログイン中のユーザーuidをdataに保存
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.chatInfo.uid = null;
      } else {
        this.chatInfo.uid = user.uid;
      }
    });
  },
  methods: {
    add() {
      this.$store.dispatch("chat/add", this.sendMessage);
      this.sendMessage = "";
    },
    remove() {
      this.$store.dispatch("chat/remove");
    }
  },
  computed: {
        chats() {
            const chats =  this.$store.state.chat.chats.filter(el => el.uid === this.chatInfo.uid);

            chats.forEach(el => {
                this.chatInfo.uid = el.uid;
                this.chatInfo.uid = el.other_id;
        });
            return chats;
        },

        users(){
            return this.$store.state.user.users.filter(el => el.uid === this.chatInfo.uid);
        },
   },
};

</script>

<style scoped>
li > span > span.done {
  text-decoration: line-through;
}
</style>
