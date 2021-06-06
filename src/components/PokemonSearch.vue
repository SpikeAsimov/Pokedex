<template>
    <div class="wrapper">
        <section class="container hvr-grow-shadow">
            <div class="searchbar item ">
                <form @submit.prevent="setPokemonUrl">
                    <input  type="text" v-model="searchvalue" class="hvr-underline-from-center"> <i class="fas fa-search" @click="setPokemonUrl"></i>
                </form>

            </div>
        </section>
    </div>

</template>

<script>
    export default {
        props: [
            'apiUrl'
        ],
        data: () => {
            return {
                searchvalue: '',
            }
        },
        methods: {
            setPokemonUrl(url) {
                this.pokemonUrl = url ;
                if(this.searchvalue !== '')
                    this.$emit('setPokemonUrl', this.apiUrl +'/'+ this.searchvalue);
            }
        }

    }
</script>

<style scoped>

    .wrapper{
        margin-top: 110px;
    }

    .container{
        display: inline-flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        background-color: rgba(242,86,72, 1);
        border-radius: 16px;
        border: 5px hsl(353, 91%, 12%) solid;
        font-family: 'Roboto', arial;
        font-size: 1rem;
        font-weight: normal;
        width: 100vh;
        margin: 10px;
        padding: 20px;
    }

    .item {
        text-align: center;
    }


    .searchbar {
        width: 100%;
    }
    .searchbar input {
        border-radius: 5px;
        font-size: 2rem;
    }
    .searchbar i {
        font-size: 2.25rem;
        cursor: pointer;
    }

    .hvr-grow-shadow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
    }
    .hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>