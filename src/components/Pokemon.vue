<template>
    <div class="container">

        <div class="item">
            <PokemonSearch
                    :apiUrl="apiUrl"
                    @setPokemonUrl="setPokemonUrl" />
        </div>

        <div class="item">
            <Description
                    :apiUrl="apiUrl"
                    :image-url="imageUrl"
                    @setPokemonUrl="setPokemonUrl"
            />
        </div>

        <div class="item">
            <PokemonDetail
                    v-if="showDetail"
                    :pokemon-url="pokemonUrl"
                    :image-retro-url="imageRetroUrl"
                    @closeDetail="closeDetail"
            />
        </div>


    </div>
</template>

<script>

    import PokemonSearch from "./PokemonSearch";
    import Description from "./Description";
    import PokemonDetail from "./PokemonDetail";




    export default {
        data: () => {
            return {
                imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
                imageRetroUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
                apiUrl: 'https://pokeapi.co/api/v2/pokemon',
                pokemonUrl: '',
                showDetail: false
            }
        },
        components: {
            PokemonSearch,
            PokemonDetail,
            Description
        },
        methods: {
            setPokemonUrl(url) {
                this.pokemonUrl = url;
                this.showDetail = true;
            },
            closeDetail() {
                this.pokemonUrl = '';
                this.showDetail = false;
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Acme');
    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: hsla(213, 20, 29, 1);
        font-family: 'Grandstander', cursive;
        font-size: 1rem;
        font-weight: normal;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .item {
        height: auto;
        margin-bottom: 10px;
    }
</style>