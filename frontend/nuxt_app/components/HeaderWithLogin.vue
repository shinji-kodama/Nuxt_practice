<template>
    <div>
        <div class="bg-white shadow">
            <div class=" flex justify-between mx-20 py-2">
                <div class="p-2"><NuxtLink to="/">Football DB</NuxtLink></div>
                <ul class="flex">
                    <li class="ml-8 p-2"><NuxtLink to="/chat">チャット</NuxtLink></li>
                    <li class="ml-8 p-2" @click="logout"><NuxtLink to="/">ログアウト</NuxtLink></li>
                    <li class="ml-8 p-2 bg-red-400 text-white rounded-2xl"><NuxtLink to="/myPage">マイページ</NuxtLink></li>
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