<template>
  <div>
    フォーム番号：{{ formNumber }}
    {{ formVal }}
    <keep-alive>
      <form-list-input v-if="formNumber === 0" @update="updateForm" />
      <form-list-confirm v-if="formNumber === 1" :form="formVal" />
      <form-complate v-if="formNumber === 2" />
    </keep-alive>

    <button v-if="formNumber === 0" @click="plusNum">入力確認画面へ</button>

    <button v-if="formNumber === 1" @click="minusNum">戻る</button>
    <button v-if="formNumber === 1" @click="add">送信</button>
  </div>
</template>

<script>
import FormListInput from "../../components/FormListInput.vue";
import FormListConfirm from "../../components/FormListConfirm.vue";
import FormComplate from "../../components/FormComplate.vue";

import { auth } from "~/plugins/firebase";

export default {
  components: {
    FormListInput,
    FormListConfirm,
    FormComplate,
  },
  data() {
    return {
      formNumber: 0,
      formVal: {
        user_id: "",
        name: "",
        level: "",
        area: "",
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