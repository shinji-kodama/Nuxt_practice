<template>
  <div>
    <h1 v-if="error.statusCode === 404">404エラーだよ！</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Back to Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // エラーページ用のカスタムレイアウトを指定できます
  }
</script>