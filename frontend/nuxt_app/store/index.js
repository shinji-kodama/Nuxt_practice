import { vuexfireMutations } from "vuexfire";
import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const teamRef = db.collection("teams");

export const state = () => ({
  teams: [],
  teamName: "",
});

export const mutations = {
  ...vuexfireMutations,
    
    selectName(state, name) {
      state.teamName = name;
      console.log(state.teamName);
    },
};

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("teams", teamRef);
  }),
  sort: firestoreAction(({ bindFirestoreRef }, payload) => {
    bindFirestoreRef("teams", teamRef.where("name", "==", payload.keyword));
  }),
  add: firestoreAction((name) => {
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
    filterdTeams: (state) => (teamName) => {
      //部分一致の検索条件に対応
      return state.teams.filter(el => el.name.indexOf(teamName) > -1);
    },
};