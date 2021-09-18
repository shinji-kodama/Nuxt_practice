<template>
<div>
    <SideBar :TeamList="teams" />
    <MainView/>
</div>
</template>

<script>
export default {
    computed:{
    teams() {
      return this.$store.state.teams;
    },
    }
}
</script>