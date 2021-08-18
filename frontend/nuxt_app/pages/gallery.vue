<template>
<div>{{ posts }}</div>
</template>>

<script>
import axios from 'axios'

export default {
    data(){
    return {
      posts: []
    }
  },
  // mounted(){
  //   axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=tempera')
  //         .then(response => this.posts = response.data);
  // },
    mounted(){
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/192693')
          .then(response => this.posts = response.data);
  }


}
</script>
