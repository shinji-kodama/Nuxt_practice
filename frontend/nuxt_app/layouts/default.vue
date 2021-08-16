<template>
  <main>
    <div>
       <NuxtLink to='/'>Home</NuxtLink>
       <NuxtLink to='/fun'>fun</NuxtLink>
       <NuxtLink to='/user'>user</NuxtLink>
       <NuxtLink to='/user/'>child</NuxtLink>
       <NuxtLink to='/user/one'>one</NuxtLink>
    </div>
    <Nuxt />
  </main>
</template>

<style scoped>
  Nuxtlink {
    color:red;
  }
</style>