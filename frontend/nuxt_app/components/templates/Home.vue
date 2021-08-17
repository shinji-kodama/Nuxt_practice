<template>
    <div class="template">
        <div class="top organism">
            <div class="message">
                <p>from Olympics</p>
                <p>to</p>
                <p>THE WILD</p>
            </div>
        </div>

        <div class="filter-container">
            <div class="search-bar">
                <input type="text" v-model="category">
            </div>
            <div class="tags">
                <TagButton buttonTitle="ALL" buttonValue="" @click='category = ""'/>
                <TagButton v-for="climber in climbers" :key="climber.id" :buttonTitle="climber.name" :buttonValue="climber.name" @click="category = climber.name"/>
            </div>
        </div>
        
        <div class="container">
            <div class="content organism" v-for="movie in MoviesfilterByCategory" :key="movie.id">
                <iframe width="560" height="315" :src="movie.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="climber">{{ movie.title }}</p>
                <p class="problem">{{ movie.climber }}</p>
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
                climber:'Akiyo Noguchi',
                problem:'デルビヨ'
            },
            {
                id:7,
                title:'My next step -Climbing Journey HOKKAIDO- /Akiyo Noguchi',
                url:'https://www.youtube.com/embed/ORFbi9JsbKE',
                climber:'Akiyo Noguchi',
                problem:'日高源流エサオマン'
            },
            {
                id:8,
                title:'THE NORTH FACE Rock Trip #01 SHIKOKU',
                url:'https://www.youtube.com/embed/WjAmnLFlkbk',
                climber:'Tomoa Narasaki',
                problem:'Deadline'
            },
            {
                id:9,
                title:'Jakob Schubert - Off the Wagon UNCUT',
                url:'https://www.youtube.com/embed/5OFtEZXEw8E',
                climber:'Jakob Schubert',
                problem:'Off the Wagon'
            },
            {
                id:10,
                title:'Rotpunkt: Bibliographie | Alex Megos climbs his hardest project yet',
                url:'https://www.youtube.com/embed/SbWvFjUIt5k',
                climber:'Alex Megos',
                problem:'Perfecto Mundo'
            },
            {
                id:11,
                title:'Silence',
                url:'https://www.youtube.com/embed/ZRTNHDd0gL8',
                climber:'Adam Ondra',
                problem:'Silence'
            },
            {
                id:12,
                title:'Climbing The Highest Chimney In Europe | w/ Janja Garnbret and Domen Škofic',
                url:'https://www.youtube.com/embed/bpDymGNQy_I',
                climber:'Janja Garnbret',
                problem:'Trbovlje Power Station'
            },
            ],
            climbers:[
                {
                    id:1,
                    name:'Alex Megos'
                },
                {
                    id:2,
                    name:'Jakob Schubert'
                },
                {
                    id:3,
                    name:'Adam Ondra'
                },
                {
                    id:4,
                    name:'Tomoa Narasaki'
                },
                {
                    id:5,
                    name:'Miho Nonaka'
                },
                {
                    id:6,
                    name:'Akiyo Noguchi'
                },
                {
                    id:7,
                    name:'Janja Garnbret'
                },

            ],
            category:'',
        }
    },
    computed:{
        MoviesfilterByCategory(){
            return this.movies.filter( movie => !movie.climber.indexOf(this.category))
        }
    }
}
</script>

<style lang="scss" scoped>

.top{
    height: 100vh;
    background-image: url("/image/top.jpeg");
    display: flex;
    justify-content: center;
    align-items: center;

    .message{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    p{
        color: $cPink;
        font-size: 80px;
        line-height: 84px;
    }
}

.filter-container {

    margin: 32px 48px;
    display: flex;
    flex-direction: column;

    .search-bar {
        margin: 16px;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 8px;
    }
}


.container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 32px;

    .content.organism {
        display: flex;
        flex-direction: column;
        margin: 16px;

        p.climber {
            margin-top: 16px;
            margin-bottom: 0px;
        }

        p.problem {
            margin-top: 8px;
        }
    }
}

</style>
