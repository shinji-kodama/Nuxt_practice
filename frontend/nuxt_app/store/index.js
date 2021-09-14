import { vuexfireMutations } from "vuexfire";
import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const teamRef = db.collection("teams");

export const state = () => ({
  teams: [],

  //検索フォームに入力された値を格納する
  profileImage: "",
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

  // sort: firestoreAction(({ bindFirestoreRef }, payload) => {
  //   bindFirestoreRef("teams", teamRef.where("name", "==", payload.keyword));
  // }),

  add: firestoreAction(
    (context, { user_id, name, level, area, image, showImage }) => {
      console.log(user_id, level, area, image);

      // refの中身が保存する場所のpathになる
      const storageRef = firebase
        .storage()
        .ref(`teamProfileImages/${image.name}`);
      const uploadTask = storageRef.put(image);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        error => {
          console.log(error);
        },
        () => {
          storageRef.getDownloadURL().then(url => {
            console.log(url);
            if (name.trim()) {
              teamRef.add({
                user_id: user_id,
                name: name,
                level: level,
                area: area,
                image: url,
                created: firebase.firestore.FieldValue.serverTimestamp()
              });
            }
          });
        }
      );
    }
  ),

  update: firestoreAction(
    (context, { selectedTeamId, name, level, area, image }) => {
      console.log(selectedTeamId, name, level, area, image);
      // refの中身が保存する場所のpathになる
      const storageRef = firebase
        .storage()
        .ref(`teamProfileImages/${image.name}`);
      const uploadTask = storageRef.put(image);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        error => {
          console.log(error);
        },
        () => {
          storageRef.getDownloadURL().then(url => {
            console.log(url);
            if (name.trim()) {
                teamRef
                  .doc(selectedTeamId)
                  .update({
                    name: name,
                    level: level,
                    area: area,
                    image: url,
                    updated: firebase.firestore.FieldValue.serverTimestamp()
                  })
                  .then(() => {
                    console.log("チーム情報更新成功");
                  })
                  .catch(error => {
                    console.log("チーム情報更新エラー", error);
                  });
            }
          });
        }
      );
    }),

  updateUser: firestoreAction(
    ({ context, redirect }, { loginName, email, image }) => {
      const user = firebase.auth().currentUser;
      // const credential = promptForCredentials();
      console.log(loginName, email, image);
      user
        .updateProfile({
          displayName: loginName,
          photoURL: image.name
        })
        .then(() => {
          console.log("ユーザー情報更新成功");
        })
        .catch(error => {
          console.log("ユーザー情報更新エラー", error);
        });
      user
        .updateEmail(email)
        .then(() => {
          console.log("email更新成功");
        })
        .catch(error => {
          console.log("email更新失敗", error);
          return redirect("/login");
        });

      // refの中身が保存する場所のpathになる
      const storageRef = firebase
        .storage()
        .ref(`userProfileImages/${image.name}`);
      storageRef.put(image);
    }
  ),

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
