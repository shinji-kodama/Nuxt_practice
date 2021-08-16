<template>
    <div class="template">
        <div class="top organism">
            <div class="message">
                <p>message</p>
            </div>
        </div>
        <div class="container">
            <div class="content organism" v-for="movie in movies" :key="movie.id">
                <iframe width="560" height="315" :src="movie.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{{ movie.climber }}</p>
                <p>{{ movie.problem }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movies: [
            {
                id:1,
                title:'Fight Club',
                url:'https://www.youtube.com/embed/N9H8gcpZhss',
                climber:'Alex Megos',
                problem:'Fight Club'
            },
            {
                id:2,
                title:'Jakob Schubert - Perfecto Mundo 9b+',
                url:'https://www.youtube.com/embed/nmYXe2u0juM',
                climber:'Jakob Schubert',
                problem:'Perfecto Mundo'
            },
            {
                id:3,
                title:'BD Athlete Adam Ondra: The Just Do It (5.14c) Onsight',
                url:'https://www.youtube.com/embed/krEwPAcQi9M',
                climber:'Adam Ondra',
                problem:'The Just Do It'
            },
            {
                id:4,
                title:'Uncut: Decided (8B+/V14) FLASH - Tomoa Narasaki',
                url:'https://www.youtube.com/embed/gBWjmjwpcc0',
                climber:'Tomoa Narasaki',
                problem:'Decided'
            },
            {
                id:5,
                title:'MihoNonaka EnjoyClimbing',
                url:'https://www.youtube.com/embed/fQ2N1htKs88',
                climber:'Miho Nonaka',
                problem:'KUMITE'
            },
            {
                id:6,
                title:'Team Sportiva Rock Tour in 九州 －後編－',
                url:'https://www.youtube.com/embed/R6paOK50RrU',
                climber:'AKIYO NOGUCHI',
                problem:'デルビヨ'
            },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
