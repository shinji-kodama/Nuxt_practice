import { vuexfireMutations } from "vuexfire";
import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const teamRef = db.collection("teams");

export const state = () => ({
  teams: [],

  //検索フォームに入力された値を格納する
  teamName: ""
});

export const mutations = {
  ...vuexfireMutations,

  //検索フォームに入力された値をstateに代入する関数
  selectName(state, name) {
    state.teamName = name;
    console.log(state.teamName);
  }
};

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("teams", teamRef);
  }),

  sort: firestoreAction(({ bindFirestoreRef }, payload) => {
    bindFirestoreRef("teams", teamRef.where("name", "==", payload.keyword));
  }),

  add: firestoreAction((context, { name, level, area }) => {
    if (name.trim()) {
      teamRef.add({
        name: name,
        level: level,
        area: area,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log("チーム登録完了")
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
  }
};
