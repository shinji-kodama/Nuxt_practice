<template>
<label>
    <input type="radio" 
        :value="buttonValue"
        @click="$emit('click', $event.target.value)"
    />{{ buttonTitle }}
</label>
</template>
<script>

export default {
    name: "Button",
    props: {
        buttonTitle: {
            type: String,
            default: "",
            },
        buttonValue:{
            type: String,
            default: "",
        },
    },
    mounted() {
        console.log(this.$router);
    },
};


</script>
<style scoped>

label {
  background: #42b983;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
    border-radius: 17px
}

input[type="radio"] {
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

</style>