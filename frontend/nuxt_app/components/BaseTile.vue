<template>
  <div>
    <NuxtLink :to="'/movie/' + id + '/'">
      <div>
        <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/${pictureNumber}.jpg`" :alt="title">
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
