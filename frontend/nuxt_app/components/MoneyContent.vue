<template>
  <div>
    <LpTextArea lpTextTitle="Price"
                  subLpTextTitle="入場券はチケット売り場で身分証明書をご提示の上ご購入いただけます。
                                  任意入場券には企画展が含まれ、同日に限りThe Met 5番街本館、
                                  The Metクロイスターズ別館にもご入館いただけます。" />
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div class="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <MoneyCard v-for="moneyLists in moneyListArray" :key="moneyLists" :moneyList = "moneyLists" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      moneyListArray:[
        {
          title:"州外からの来館者",
          array:[
            "大人 	25ドル",
            "高齢者 (65歳以上)	17ドル",
            "学生	12ドル",
            "会員	入場無料",
            "子供 (12歳以下)	入場無料"
          ]
        },
        {
          title:"ニューヨーク州在住",
          array:[
            "大人 	25ドル",
            "高齢者 (65歳以上)	17ドル",
            "学生	12ドル",
            "会員	入場無料",
            "子供 (12歳以下)	入場無料"
          ]
        },
      ]
    }
  }
}
</script>
