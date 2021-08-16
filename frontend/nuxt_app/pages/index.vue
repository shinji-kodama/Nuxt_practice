<template>
<div>
  <h1>Hello! Nuxt!</h1>
  <ul>
    <li v-for="message in messages">
      <div class="name">
        {{ message.name }}
      </div>
      <div class="msg">
        {{ message.message }}
      </div>
    </li>
  </ul>
  <input v-model="name" type="text">
  <input v-model="msg" type="text">
  <button v-on:click="submit">送信</button>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        name:'',
        msg:''
      }
    },
    computed:{
      messages(){
        return this.$store.state.chat.messages
      }
    },
    methods: {
      async submit(){
        await this.aafb.firestore().collection("messages").add({name:this.name,message:this.msg})
        // this.$store.commit('chat/ADD_MESSAGE',{name:this.name,message:this.msg})
      }
    },
    async mounted() {
     await this.$store.dispatch("chat/getMessages")
    },
  }
</script>

<style scoped>
li{
  display:flex;
  justify-content:center;
}
.name{
  font-size:12px;
  color:gray;
  margin-right: 16px
}
input{
  border:1px solid black;
  background-color: #eee;
}
button{
  width:32px;  
  height:24px;
  font-size:8px;

  border:1px solid black;
  background-color: #eee;
  border-radius: 5px;
}
</style>le