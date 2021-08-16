<template>
      <div class="header">
        <ul>
            <li><nuxt-link to="/test">Home</nuxt-link></li>
            <li><nuxt-link to="/sample">Sample</nuxt-link></li>
        </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.header {
    margin: 4rem 3rem 4rem 3rem;
    position: absolute;
}

a {
    text-decoration: none;
    font-size: 1.4rem;
    color: $cGray;
    font-weight: 600;
}

a + a {
  margin-left: 16px;
}

ul {
    display: flex;
    justify-content: flex-start;
}

li {
    margin-left: 20px;
    list-style: none;
}
</style>
