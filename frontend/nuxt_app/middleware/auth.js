import { auth } from "~/plugins/firebase";

export default ({ store }) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      store.dispatch("authData", user);
      console.log("user");
    } else {
      console.log("not user");
    }
  });
};
