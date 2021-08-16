<template>
<div>
  <h2>userのindexだよ</h2>
  <p>{{ idxObj.msg }}</p>
</div>
</template>

<script>
export default {
  props:{
    idxObj:{
        type:Object,
        default:''
      }
    },
    layout: 'blog'
}
</script>
