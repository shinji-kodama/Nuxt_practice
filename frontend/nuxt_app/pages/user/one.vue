<template>
  <div>
    <h2>oneだよ</h2>
    <p>{{ foobar }}</p>
  
  </div>
  
</template>

<script>
export default {
  props: {
    foobar :{
      type:Object,
      default:''
    }
  }
    // layout: 'blog'
}
</script>
