<template>
  <div>
    <ul>
      <li v-for="chat in chats" :key="chat.id">
        <nuxt-link :to="'/chat/' + chat.id">
            <span v-if="chat.create_date">
            {{ chat.id }}
            <!-- {{ chat.created.toDate() }} -->
            </span>
        </nuxt-link>
        <button v-on:click="remove(chat.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sendMessage: "",
    };
  },
  created: function() {
    this.$store.dispatch("chat/init");
  },
  methods: {
    add() {
      this.$store.dispatch("chat/add", this.sendMessage);
      this.sendMessage = "";
    },
    remove() {
      this.$store.dispatch("chat/remove");
    }
  },
  computed: {
    chats() {
      return this.$store.state.chat.chats.filter(el => el.member.uid === 2);
    }
   },
};

</script>

<style scoped>
li > span > span.done {
  text-decoration: line-through;
}
</style>
