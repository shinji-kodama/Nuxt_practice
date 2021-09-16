<template>
<div :class="className">
    <div
    v-show="bool"
    class="grid grid-cols-2 gap-4">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: 'LayoutMovieList',
    props:{
    className:{
        type: String,
        default:'h-screen pt-4'
    },
    bool:{
        type: Boolean,
        default:true
    },
    }
}
</script>

<style scoped>

</style>