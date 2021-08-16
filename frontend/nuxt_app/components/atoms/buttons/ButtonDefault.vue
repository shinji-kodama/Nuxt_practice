<template>
    <button class="button button-default">
        <p class="text">
            <slot>default</slot>
        </p>
    </button>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.button-default{
    background-color: black;
    color: white;
    border-radius: 8px;
}

</style>