<template>
    <nav id="navbar" class="menu-fixed">
        <section class="container">
            <div class="item title">
                <a href="#" class="hvr-grow" name="title">Pokedex</a>
            </div>
            <div class="item description">
                <p>
                    Enciclopedia portátil para los entrenadores Pokémon llevan consigo para registrar las fichas de todas las diversas especies Pokémon
                </p>
            </div>
        </section>
    </nav>

</template>

<style scoped>

    #navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(242,86,72, 1);
        position: fixed;
        top: 0;
        width: 100%;
        height: auto;
        z-index:1000;
        box-shadow:0px 4px 3px rgba(0,0,0,.5);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;


        font-family: 'Roboto', sans-serif;
    }

    .item {

        margin: 0px 100px;
    }

    .title {
        text-align: center;
        color: cornsilk;
        font-size: xx-large;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        margin-top: 0px;
    }

    .title > a {
        color: cornsilk;
        text-decoration: none;
    }

    .description {
        text-align: center;
        color: cornsilk;
        font-size: large;
        margin-bottom: 0px;
    }

    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }
    .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>