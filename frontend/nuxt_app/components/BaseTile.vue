<template>
  <div>
    <a :href="'/movie/' + id + '/'">
      <div>
        <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/${pictureNumber}.jpg`" :alt="title">
      </div>
    </a>
  </div>
  <!-- <div class="flex-shrink-0 w-32 sm:w-47 mr-3">
    <a :href="'/movie/' + id + '/'">
      <div class="w-full">
        <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/0.jpg`" :alt="title">
      </div>
    </a>
  </div> -->
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
