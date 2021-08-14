<template>
  <div>
      <!-- {{ todos }} -->
      <ul>
          <li v-for="todo in todos" :key="todo.id">
              <!-- {{ todo }} -->
            <span v-if="todo.created">
            <input 
            type="checkbox"
            v-bind:checked="todo.done"
            @change="toggle(todo)">
            <span v-bind:class="{ done: todo.done }">
                {{ todo.name }} {{ todo.created.toDate() }}
            </span>
            <button v-on:click="remove(todo.id)">X</button>
            </span>
          </li>
      </ul>
      <div class="form">
          <form v-on:submit.prevent="add">
                <input type="text" v-model="name">
                <button>Add</button>
          </form>
      </div>
  </div>
</template>

<script>
  export default {
    data: function(){
        return{
            name: '',
            done: false,
        }
    },
    created: function() {
        this.$store.dispatch('todos/init')
    },
    methods:{
        add(){
            this.$store.dispatch('todos/add', this.name)
            this.name = ''
        },
        remove(id){
            this.$store.dispatch('todos/remove', id)
        },
        toggle(todo){
            this.$store.dispatch('todos/toggle', todo)
        }

    },
    computed: {
        todos(){
            return this.$store.state.todos.todos
        }
    }
  }
</script>

<style scoped>

li > span > span.done{
    text-decoration: line-through;
}
</style>