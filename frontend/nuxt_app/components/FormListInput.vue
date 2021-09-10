<template>
  <div>
    <h1>チームを登録する</h1>
    <form @input="submit">
      <img :src="showImage" />
      <input type="file" @change="selectImage" />
      <label for="チーム名">チーム名：</label
      ><input type="text" v-model="name" />
      <label for="チーム名">競技レベル：</label
      ><input type="text" v-model="level" />
      <label for="チーム名">活動場所：</label
      ><input type="text" v-model="area" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      level: "",
      area: "",

      showImage: "",
    };
  },
  methods: {
    submit: function () {
      this.$emit("update", {
        name: this.name,
        level: this.level,
        area: this.area,
        image: this.showImage,
      });
    },
    selectImage(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
      this.showImage = e.target.result;
      };
    },
  },
};
</script>