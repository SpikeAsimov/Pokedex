<template>
    <section class="wrapper">
            <div class="container">
                <div class="title-container ">
                    <section class="description-container item hvr-grow" v-for="(pokemon, index) in pokemons"
                             :key="'poke'+index"
                             @click="setPokemonUrl(pokemon.url)" >

                        <h1>#{{pokemon.id}}</h1>

                        <div class="picture">
                            <img :src="imageUrl + pokemon.id + '.svg'" width="126" height="126" alt="">
                        </div>

                        <h1>{{pokemon.name}}</h1>

                    </section>

                    <div id="scroll-trigger" ref="infinitescrolltrigger">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>

                </div>
            </div>
    </section>
</template>


<script>
    export default {

        props: [
            'apiUrl',
            'imageUrl',
            'pokemonUrl'

        ],
        data: () => {
            return {
                pokemons: [],
                nextUrl: '',
                currentUrl: '',
                pokemon: {}
            }
        },
        methods: {
            fetchData() {
                let req = new Request(this.currentUrl);
                fetch(req)
                    .then((resp) => {
                        if (resp.status === 200)
                            return resp.json();
                    })
                    .then((data) => {
                        this.nextUrl = data.next;
                        data.results.forEach(pokemon => {
                            pokemon.id = pokemon.url.split('/')
                                .filter(function(part) { return !!part }).pop();
                            this.pokemons.push(pokemon);
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            fecthDataPokemon() {
                let req = new Request(this.pokemonUrl);
                fetch(req)
                .then((resp) => {
                    if (resp.status === 200)
                        return resp.json();
                })
                .then((data) => {
                    this.pokemon = data;
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            scrollTrigger() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if(entry.intersectionRatio > 0 && this.nextUrl) {
                            this.next();
                        }
                    });
                });
                observer.observe(this.$refs.infinitescrolltrigger);
            },
            next() {
                this.currentUrl = this.nextUrl;
                this.fetchData();
            },
            setPokemonUrl(url) {
                this.$emit('setPokemonUrl', url);
            }
        },
        created() {
            this.currentUrl = this.apiUrl;
            this.fetchData();
            this.fecthDataPokemon();
        },
        mounted() {
            this.scrollTrigger();
        }

    }

</script>


<style scoped>

   .container {
        background:#3B4859;
        border-radius: 15px;
        padding: 20px;
    }

   .item {
       text-align: center;
       margin-bottom: 2%;
   }

   .item > h1 {
       color: #3B4859;
       text-transform: capitalize;
   }

   .title-container {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }

    .description-container {
        flex: 0 150px;
        padding-top: 20px;
        margin: 20px;
        border-radius: 25px;
        cursor: pointer;
        background-color: #F2F2F0;
        height: 250px;
    }

    .description-container:hover {
        background-color: rgba(58,187,216, 1);
        -webkit-box-shadow: inset 9px -6px 109px -27px rgba(58,187,216,0.46);
        -moz-box-shadow: inset 9px -6px 109px -27px rgba(58,187,216,0.46);
        box-shadow: inset 9px -6px 109px -27px rgba(58,187,216,0.46)
    }

    .description-container:hover h1{
        color: #F2F2F0;
    }

   /* Grow */
   .hvr-grow {
       display: inline-block;
       vertical-align: middle;
       transform: translateZ(0);
       box-shadow: 0 0 1px rgba(0, 0, 0, 0);
       backface-visibility: hidden;
       -moz-osx-font-smoothing: grayscale;
       transition-duration: 0.3s;
       transition-property: transform;
   }

   .hvr-grow:hover,
   .hvr-grow:focus,
   .hvr-grow:active {
       transform: scale(1.1);
   }

    #scroll-trigger {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1050px;
        font-size: 2rem;
        color: #efefef;
    }

</style>