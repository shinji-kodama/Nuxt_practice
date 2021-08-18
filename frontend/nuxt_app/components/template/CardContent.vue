<template>
  <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
    <LpTextArea lpTextTitle="About"
                subLpTextTitle="世界のあらゆる地域における5千年以上にわたる文化遺産を展示しています。
                                1880年にセントラルパークを拠点に開館して以来拡張を続け、
                                当館の美術品は展示やイベントを通して新しい息吹を与えられ、
                                時代や文化を超えた新しいアイディアや意外な関連性を見せてくれています。" />
    <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div v-for="content in contentView" :key="content.title">
        <LpCard :title="content.title" :imgaeURL="content.imgaeURL" > {{ content.description}} </LpCard>
      </div>
    </div>
  </div>
</template>

<script>

export default{
    data(){
      return{
        contents:[
          {
            title:"バーチュアルグループ・ツアー",
            imgaeURL: require('../assets/img/translated-tours-1.jpg'),
            description:"世界中の美術品と文化遺産を誇るメトロポリタン美術館のコレクションを美術館ガイドとオンライン・バーチュアル・ツアー で体験してみませんか?",
          },
          {
            title:"新しい光の中で見る名作",
            imgaeURL: require('../assets/img/skylightsproject_teaser.jpg'),
            description:"現在ヨーロッパ絵画の展示室では大規模な改修工事が行われています。この工事により、作品鑑賞に最適な自然光を取り込む天窓が新しくなり、管理上の問題も解決することができます。",
          },
          {
            title:"The Metストア",
            imgaeURL: require('../assets/img/store-promo_fifth-avenue.jpg'),
            description:"館内の7つのギフトショップでお買い物をお楽しみ下さい。ショップでは五千年にわたる世界中の芸術から着想を得て作られた品々を取り扱っています。",
          },
        ]
      }

    },
    computed:{
      contentView(){
        console.log(this.contents)
        return this.contents
      }
    }

}
</script>
