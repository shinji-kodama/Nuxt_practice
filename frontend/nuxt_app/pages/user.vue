<template>
  <div>
    <!-- <NuxtChild :foobar="123" /> -->
    <one  class="btm" v-for="test in tests" :key="test.id" :foobar="test" />
    <NuxtChild v-for="test in tests" :key="test.id" :idxObj="test" />
    
    <p>{{ txt }}</p>
    <input v-model="txt" type="text">
    <button v-on:click="addTests()">送信</button>
    <NuxtLink class="nlink" to='/'><p> Home へ戻る</p></NuxtLink>
  </div>
</template>

<script>
import one from './user/one'

export default {
  components:{
    one,
  },
  data() {
    return {
      tests:[{
        name:'aaa',
        msg:'foooooo'
      },{
        name:'bbb',
        msg:'baaaaaar'
      },{
        name:'ccc',
        msg:'hogehogehoge'
      }],
      txt:''
    }
  },
  methods:{
    addTests(){
      const tst={
        // id:Math.floor(Math.ramdom*100),
        name:'a'.repeat(this.tests.length),
        msg:this.txt
      }
      this.tests.push(tst)
    }
  },
  layout: 'blog'
}
</script>

<style scoped>
div{
  font-size:12px;
}
input{
  border:1px solid black
}
button{
  width:30px;
  height:20px;
  border:1px solid black
}
p{
  margin-top:16px;
}
.nlink{
  margin-top:24px;
}
.btm{
  margin-bottom: 24px;
}
</style>