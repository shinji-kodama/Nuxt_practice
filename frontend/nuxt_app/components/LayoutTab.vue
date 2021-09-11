<template>
    <div class="h-12 md:h-14 flex bg-cWhite border-b">
        <ul class="flex items-center overflow-x-scroll md:justify-center w-full h-full">
            <li class="mx-4 lg:mx-6">
                <a href="#">Boulder</a>
            </li>
            <li class="mx-4 lg:mx-6">
                <a href="#">Sport</a>
            </li>
            <li class="mx-4 lg:mx-6">
                <a href="#">Trad</a>
            </li>
            <li class="mx-4 lg:mx-6">
                <a href="#">BigWall</a>
            </li>
        </ul>
        <button class="flex items-center justify-center right-0 w-16 h-full md:hidden">
            <span class="text-xl">▶</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'LayoutTab',
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>