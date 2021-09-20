<template>
  <div>
    <div
      class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800"
    >
      <!-- Component Start -->
      <div
        class="relative flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden overscroll-auto"
      >
        <div id="top" class="flex flex-col flex-grow h-0 mb-20 p-4 overflow-auto">
          <!-- 灰色テキスト -->
          <div
            class="flex w-full mt-2 space-x-3 max-w-xs"
            v-for="chat in chats"
            :key="chat.id"
          >
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">
                  {{ chat.message }}
                </p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>

          <!-- 青色テキスト -->
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p class="text-sm">
                  青色テキスト
                </p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <!-- 送信フォーム -->
        <div class="fixed w-full bottom-0 bg-gray-300 p-4">
          <form v-on:submit.prevent="add">
            <input
              type="text"
              class="flex items-center h-10 w-full rounded px-3 text-sm"
              placeholder="Type your message…"
              v-model="chatData.message"
            />
            <!-- <button>送信</button> -->
          </form>
        </div>
      </div>
      <!-- Component End  -->
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
        read: false
      },

      chats: []
    };
  },
  created: function() {
    //サブコレクションからメッセージを取得する
    chatsRef
      .doc(this.$route.params.id)
      .collection("message").orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.chats.push(change.doc.data());
            //チャットルームを開くと既読フラグ(read)をtrueにする
            // if (change.doc.data().read === false) {
            //   console.log("aaa");
            //   this.$store.dispatch("chat/setReadFlag", { docId: this.$route.params.id, subDocId: change.doc.id });
            // };
          };
        });
      });

    //メッセージにuidを含める
    auth.onAuthStateChanged(user => {
      if (!user) {
        this.chatData.uid = null;
      } else {
        this.chatData.uid = user.uid;
      }
    });
  },
  methods: {
      scrollToEnd(){
      this.$nextTick(() => {
        const chatLog = document.getElementById('top');
        console.log(chatLog)
        if (!chatLog) return
        chatLog.scrollTop = chatLog.scrollHeight;
        })
      },

    add() {
      this.$store.dispatch("chat/add", this.chatData);
      this.chatData.message = "";
    }
  },
  updated(){
    this.scrollToEnd();
  },
};
</script>
