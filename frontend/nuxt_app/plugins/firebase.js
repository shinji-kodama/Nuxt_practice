import Firebase from 'firebase/app'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyApIYJ-VOv5OIIgCorF5OrJngewgn85LQU",
    authDomain: "gslab11-aa564.firebaseapp.com",
    databaseURL: "https://gslab11-aa564-default-rtdb.firebaseio.com",
    projectId: "gslab11-aa564",
    storageBucket: "gslab11-aa564.appspot.com",
    messagingSenderId: "209017578737",
    appId: "1:209017578737:web:52d13f0f23763807a57550"
  });
}

export default (context, inject) => {
  const aafb = {
    app: Firebase.app,
    firestore: Firebase.firestore,
  }
  inject('fb',aafb)
}