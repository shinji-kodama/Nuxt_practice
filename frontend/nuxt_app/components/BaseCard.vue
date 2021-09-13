<template>
  <div class="flex-shrink-0 w-40 sm:w-47 mr-3">
    <NuxtLink :to="'/movie/' + id + '/'">
        <div class="w-full">
          <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/${pictureNumber}.jpg`" :alt="title">
        </div>
      <div>
        <h2>{{ title }}</h2>
      </div>
    </NuxtLink>
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
    pictureNumber:{
      type: Number,
      default: 0,
    }
  }
}
</script>
