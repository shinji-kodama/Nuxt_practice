import { vuexfireMutations } from "vuexfire";
import firebase from "~/plugins/firebase";
import { auth } from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const teamRef = db.collection("teams");

export const state = () => ({
  teams: [],

  //検索フォームに入力された値を格納する
  teamName: "",

 user: {
   uid: '',
   email: '',
   // ログイン状態の真偽値を追加
   login: false,
 },
});

export const mutations = {
  ...vuexfireMutations,

  //検索フォームに入力された値をstateに代入する関数
  selectName(state, name) {
    state.teamName = name;
    console.log(state.teamName);
  },

  getData (state, payload) {
   state.user.uid = payload.uid;
   state.user.email = payload.email;
 }
};

export const actions = {
  login({ commit }, payload) {
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log("ログイン成功！");
        auth.onAuthStateChanged(user => {
          if (user) {
            commit("getData", { uid: user.uid, email: user.email });
          }
        });
        this.$router.push("/myPage");
      })
      .catch(error => {
        alert(error);
      });
  },
   logout ({ context }) {
   auth.signOut()
     .then(()=> {
       console.log('ログアウトしました')
     })
     .catch((error) => {
       console.log(error)
     })
 },
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("teams", teamRef);
  }),

  sort: firestoreAction(({ bindFirestoreRef }, payload) => {
    bindFirestoreRef("teams", teamRef.where("name", "==", payload.keyword));
  }),

  add: firestoreAction(name => {
    if (name.trim()) {
      teamRef.add({
        name: name,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }),

  remove: firestoreAction((context, id) => {
    teamRef.doc(id).delete();
  })
};

export const getters = {
  //@param: teamName（検索フォームへの入力値）
  //@return: 部分一致した検索結果
  filterdTeams: state => teamName => {
    return state.teams.filter(el => el.name.indexOf(teamName) > -1);
  },

  user: state => {
   return state.user
 }
};
