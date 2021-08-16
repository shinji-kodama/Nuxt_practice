export const state = () => {
  return {
    messages: [
      {
        name: "tanaka",
        message: "hello world!"
      },
      {
        name: "yamada",
        message: "hello world"
      }
    ]
  }
}

export const mutations = {
  ADD_MESSAGE(state,message){
    state.messages.push(message)
  },
  LOAD_MESSAGE(state,message){
    state.messages.push(message)
  }
}

export const actions = {
  async getMessages({commit}){
    const db = this.$fb.firestore()
    db.collection('messages').onSnapshot((querySnapshot)=>{
      querySnapshot.docChanges().forEach((change)=>{
        if(change.type == 'added' || change.type == 'modified'){
          // this.msgs.push(change.doc.data())
          console.log(change.doc.data())
          commit("LOAD_MESSAGE",change.doc.data())
        }else if(change.type == 'removed'){
            // const idx = this.msgs.findIndex(msg => msg.id === change.doc.data().id)
            // this.msgs.splice(idx,1)
        }
      })
    })
    // const result = await db.collection("messages").get()
    // commit("LOAD_MESSAGE",result.docs.map((d)=>d.data()))
  },
}