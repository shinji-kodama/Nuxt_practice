import { vuexfireMutations } from "vuexfire";

export const mutations = {
  ...vuexfireMutations
};

import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const chatsRef = db.collection("chats");

export const state = () => ({
  chats: [],
});

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("chats", chatsRef);
  }),
  chatInit: firestoreAction((context, { docId }) => {
    console.log(docId);
    // chatsRef.doc(docId).collection("message").onSnapshot(snapshot => snapshot.forEach(doc => state.messages = doc.data()));
    // console.log(state.messages)
  }),
  add: firestoreAction((context, { docId, message, uid}) => {
    console.log(docId, message, uid);
    if (message.trim()) {
      chatsRef.doc(docId).collection("message").doc().set({
          message: message,
          uid: uid,
          creat_date: firebase.firestore.FieldValue.serverTimestamp(),
        // message: {
        //     message: {
        //         uid: uid,
        //         text: message,
        //         create_date: firebase.firestore.FieldValue.serverTimestamp(),
        //     }
        // },
        // member: {
        //     uid: "user1",
        //     other_id: "user2",
        // },
        // create_date: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    chatsRef.doc(id).delete();
  }),
  toggle: firestoreAction((context, chat) => {
    chatsRef.doc(chat.id).update({
      done: !chat.done
    });
  })
};
