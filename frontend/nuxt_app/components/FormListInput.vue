<template>
    <div>
        <h1>チームを登録する</h1>
        <label for="チーム名">チーム名：</label><input type="text" v-model="name">
        <label for="チーム名">競技レベル：</label><input type="text" v-model="level">
        <label for="チーム名">活動場所：</label><input type="text" v-model="area">
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            level: "",
            area: "",
        }
    },
}
</script>