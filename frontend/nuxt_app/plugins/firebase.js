import firebase from 'firebase'

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    apiKey: process.env.FIREBASE_PROJECT_API,
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

export default firebase
export const auth = firebase.auth();