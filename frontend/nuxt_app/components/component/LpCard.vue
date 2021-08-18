<template>
  <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
    <img :src="imgaeURL" class="object-cover w-full h-64 " alt="image" />
    <div class="p-5 border border-t-0">
      <p
          aria-label="Category"
          title="Simple is better"
          class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200">
          {{title}}
      </p>
      <p class="mb-2 text-gray-700">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imgaeURL:{
        type: String,
      },
      title:{
        type: String,
      }
    },
  }
  //truncate 文字の切り離し
  //h-96
</script>
