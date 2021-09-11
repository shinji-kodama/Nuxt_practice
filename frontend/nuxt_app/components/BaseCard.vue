<template>
  <div class="flex-shrink-0 w-40 sm:w-47 mr-3">
    <a :href="'/movie/' + id + '/'">
        <div class="w-full">
          <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/0.jpg`" :alt="title">
        </div>
      <div>
        <h2>{{ title }}</h2>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props:{
    title:{
      type: String,
      required: true
    },
    url:{
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true,
    },
  }
}
</script>
