<template>
    <div>
        <div class="bg-white shadow">
            <div class="text-center flex justify-between mx-2 py-2">
                <div class="p-2"><NuxtLink to="/">Football DB</NuxtLink></div>
                <ul class="flex justify-between text-xs">
                    <li class="md:ml-8 p-3"><NuxtLink to="/chat">チャット</NuxtLink></li>
                    <li class="md:ml-8 p-3" @click="logout"><NuxtLink to="/">ログアウト</NuxtLink></li>
                    <li class="md:ml-8 p-3 bg-red-400 text-white rounded-2xl"><NuxtLink to="/myPage">マイページ</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "~/plugins/firebase";

export default {
    methods: {
        logout() {
            auth.signOut().then(() => {
                console.log("logoutしました");
            })
        }
    }
}
</script>