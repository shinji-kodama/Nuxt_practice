<template>
  <div class="max-w-xl mb-10 md:mx-auto  lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans sm:text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <span class="relative">{{ lpTextTitle }}</span>
        </span>
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        {{ subLpTextTitle }}
      </p>
    </div>
</template>

<script>
export default {
  props:{
    lpTextTitle:{
      type:String,
      defalut:""
    },
    subLpTextTitle:{
      type:String,
      defalut:""
    },
  }
}
</script>
