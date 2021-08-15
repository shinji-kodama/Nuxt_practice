import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const teamsRef = db.collection('teams')

export const state = () => ({
    teams: []
})

export const actions = {

    init: firestoreAction(({ bindFirestoreRef })=>{
        bindFirestoreRef('teams', teamsRef)
    }),
}