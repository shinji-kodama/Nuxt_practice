<template>
    <div>
        <h1>チームを登録する</h1>
        <form @input="submit">
        <label for="チーム名">チーム名：</label><input type="text" v-model="name">
        <label for="チーム名">競技レベル：</label><input type="text" v-model="level">
        <label for="チーム名">活動場所：</label><input type="text" v-model="area">
        </form>
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
    methods: {
		submit: function(){
			this.$emit('update',{
				name: this.name,
				level: this.level,
                area: this.area,
			});
		}
	}
}
</script>