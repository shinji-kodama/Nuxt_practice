<template>
    <div>
        フォーム番号：{{ formNumber }}
        <keep-alive>
            <form-list-input v-if="formNumber === 0" />
            <form-list-confirm v-if="formNumber === 1" />
        </keep-alive>
        <button v-if="formNumber === 0" @click="plusNum">次へ</button>
        <button v-if="formNumber === 1" @click="minusNum">戻る</button>
    </div>
</template>

<script>
import FormListInput from '../../components/FormListInput.vue'
import FormListConfirm from '../../components/FormListConfirm.vue'

export default {
  components: {
      FormListInput,
      FormListConfirm,
  },
  data(){
      return {
          formNumber: 0,
      }
  },
  methods: {
      plusNum() {
          this.formNumber ++;
      },
      minusNum() {
          this.formNumber --;
      }
  }

}
</script>