<template>
    <div class="footer">
            <p>FooterDefault</p>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $cGray;

    p{
        font-size: 16px;
        color: $cWhite;
        padding-top: 16px;
    }
}
</style>
