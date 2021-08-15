<template>
  <!-- <a href="#">test</a> -->
  <!-- <h1>hogehoge</h1> -->
  <p>{{ posts }}</p>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
    }
  },
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { posts }
  },
}
</script>

<style lang="scss" scoped>

h1{
  color: $colorDarkPink;
}

</style>