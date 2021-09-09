<template>
    <div>
        <div>プロフィール画像を設定しよう</div>
        <img :src="image">
        <form @input="submit">
            <input type="file" @change="selectImage">
        </form>
    </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
    data() {
        return {
            image: "",
        }
    },
    methods: {
        selectImage (e) {
            console.log(e.target.files[0]);
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                this.image = e.target.result
            }

            // refの中身が保存する場所のpathになる
            // const storageRef = firebase.storage().ref(`images/${ file.name }`);
            // storageRef.put(file)
        },
        submit(){
            this.$emit('upload',{
				image: this.image,
			});
        },
    }

}
</script>