<template>
  <div>
      <ul>
          <li v-for="team in teams" :key="team.id">
              {{ team.name }}
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data: function(){
        return{
        }
    },
    created: function() {
        this.$store.dispatch('teams/init')
    },
    computed: {
        teams(){
            return this.$store.state.teams.teams
        }
    }
  }
</script>