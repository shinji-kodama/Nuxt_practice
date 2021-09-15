<template>
  <div>
    <h1>チームを登録する</h1>
    <form @input="submit">
      <img :src="teamInfo.showImage" />
      <input type="file" @change="selectImage" />
<br>
      <ValidationProvider name="チーム名" rules="required|blank" v-slot="v">
        <label for="チーム名">チーム名</label>
        <input type="text" v-model.trim="teamInfo.name" />
        <span>{{ v.errors[0] }}</span>
      </ValidationProvider>
<br>
      <ValidationProvider name="競技レベル" rules="required" v-slot="v">
        <label for="競技レベル：">競技レベル</label>
        <select v-model="teamInfo.level" name="競技レベル">
          <option>競技志向（ハイレベル）</option>
          <option>競技志向（シリアス）</option>
          <option>競技志向（ジェネラル）</option>
          <option>エンジョイ（シリアス）</option>
          <option>エンジョイ（ジェネラル）</option>
          <option>エンジョイ（ファン）</option>
        </select>
        <span>{{ v.errors[0] }}</span>
      </ValidationProvider>
<br>
      <ValidationProvider name="活動場所" rules="required|blank" v-slot="v">
        <label for="活動場所：">活動場所</label>
        <input type="text" v-model.trim="teamInfo.area" />
        <span>{{ v.errors[0] }}</span>
      </ValidationProvider>
    </form>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

//バリデーションルールをここで定義
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "必須入力項目です"
});

extend('blank', value => {
  if(value.indexOf(" ") === -1 && value.indexOf("　") === -1){
    return true;
  };
  return "空白は入力できません"
});

export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      teamInfo: {
        name: "",
        level: "",
        area: "",
        image: "",
        showImage: ""
      },

    };
  },
  methods: {
    submit: function() {
      this.$emit("update", {
        name: this.teamInfo.name,
        level: this.teamInfo.level,
        area: this.teamInfo.area,
        image: this.teamInfo.image,
        showImage: this.teamInfo.showImage,
      });
    },
    selectImage(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.teamInfo.image = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        console.log(e.target.result);
        this.teamInfo.showImage = e.target.result;
      };
    }
  }
};
</script>
