<template>
    <div>
        <TagButton buttonTitle="hoge" buttonValue="hogehoge" />
        <Foo />
        <nuxt-link to="/test">
            Go HOME!
        </nuxt-link>
        {{ date }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            date: this.$dayjs().format('YYYY-MM-DD')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>