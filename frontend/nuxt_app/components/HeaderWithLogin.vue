<template>
    <div>
        <div class="bg-white shadow">
            <div class="text-center md:flex justify-between mx-20 py-2">
                <div class="p-2"><NuxtLink to="/">Football DB</NuxtLink></div>
                <ul class="md:flex justify-between">
                    <li class="md:ml-8 p-2"><NuxtLink to="/chat">チャット</NuxtLink></li>
                    <li class="md:ml-8 p-2" @click="logout"><NuxtLink to="/">ログアウト</NuxtLink></li>
                    <li class="md:ml-8 p-2 bg-red-400 text-white rounded-2xl"><NuxtLink to="/myPage">マイページ</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        logout () {
            this.$store.dispatch("logout")
        },
    }
}
</script>