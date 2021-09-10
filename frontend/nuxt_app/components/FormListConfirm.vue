<template>
    <div>
        <h1>登録内容を確認する</h1>
        <div><img :src="form.image"></div>
        <div>{{ form.name }}</div>
        <div>{{ form.level }}</div>
        <div>{{ form.area }}</div>
    </div>
</template>

<script>
export default {
    props: {
		form: Object,
	},
}
</script>