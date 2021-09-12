<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
    <keep-alive>
      <form-list-input v-if="formNumber === 0" @update="updateForm" />
      <form-list-confirm v-if="formNumber === 1" :form="formVal" />
      <form-complate v-if="formNumber === 2" />
    </keep-alive>

    <button v-if="formNumber === 0" @click="plusNum" :disabled="invalid">入力確認画面へ</button>

    <button v-if="formNumber === 1" @click="minusNum">戻る</button>
    <button v-if="formNumber === 1" @click="add">送信</button>
    </ValidationObserver>
  </div>
</template>

<script>
import FormListInput from "../../components/FormListInput.vue";
import FormListConfirm from "../../components/FormListConfirm.vue";
import FormComplate from "../../components/FormComplate.vue";

import { auth } from "~/plugins/firebase";

import { ValidationObserver } from 'vee-validate';

//バリデーションルールをここで定義
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "必須入力項目です"
});

export default {
  components: {
    FormListInput,
    FormListConfirm,
    FormComplate,
    ValidationObserver,
  },
  data() {
    return {
      formNumber: 0,
      formVal: {
        user_id: "",
        name: "",
        level: "",
        area: "",
        image: "",
        showImage: "",
      },
    };
  },
    created: function () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.user_id = null;
      } else {
        this.formVal.user_id = user.uid;
        console.log("uidをフォームに追加")
      }
    });
  },
  methods: {
    updateForm: function (formData) {
      Object.assign(this.formVal, formData);
    },
    plusNum() {
      this.formNumber++;
    },
    minusNum() {
      this.formNumber--;
    },
    add(){
        this.$store.dispatch("add", this.formVal);
        this.formNumber++;
    }
  },
};
</script>