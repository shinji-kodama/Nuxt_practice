import { vuexfireMutations } from "vuexfire"
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const teamRef = db.collection('teams')

export const state = () => ({
    teams: []
})

export const mutations = {
    ...vuexfireMutations
}

export const actions = {

    init: firestoreAction(({ bindFirestoreRef })=>{
        bindFirestoreRef('teams', teamRef)
    }),
    add: firestoreAction((context, name)=>{
        if(name.trim()){
            teamRef.add({
                name: name,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    remove: firestoreAction((context, id) =>{
        teamRef.doc(id).delete()
    }),
}