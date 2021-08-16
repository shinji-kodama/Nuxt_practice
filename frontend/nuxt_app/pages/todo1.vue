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
            <button v-on:click="remove(todo.id)"
             class = "delete group relative w-full py-1 px-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-100"
             >X</button>
            </span>
          </li>
      </ul>
      <div class="form">
          <form v-on:submit.prevent="add">
                <input type="text" v-model="name" class="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded" />
                <button class="add group relative w-full  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Add</button>
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
input[type="text"]{
  width: 200px;
  height: 37.5px;
  border: 1px solid gray;
  margin: 3px
}
.delete{
  margin-top: 20px;
  width:30px;
  height: 30px;
  border-radius: 50%;
}
.add{
  width:80px;
  height: auto;
  text-align: center;
}
li + li {
  margin-top: 10px;
}
ul{
  margin-left : 3px;
}
ul + div {
  margin-top: 30px;
}
li > span > span.done{
    text-decoration: line-through;
}
</style>
