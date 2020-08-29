<template>
    <section class="header-container">
        <div class="title">
            <p>
                Pokedex
            </p>
        </div>
        <div class="description">
            <p>
                Enciclopedia portátil para los entrenadores Pokémon llevan consigo para registrar las fichas de todas las diversas especies Pokémon
            </p>
        </div>
    </section>
</template>

<style>
    .header-container {
        display: flex;
        flex-wrap: wrap;
        background: hsl(353, 60%, 50%);;
        padding: 0 20px;
        font-family: 'Roboto', sans-serif;
    }

    .description {
        flex: 8;
        display: flex;;
        min-width: 175px;
        justify-content: right;
        color: cornsilk;
        font-size: small;
        font-style: oblique;
    }

    .title {
        flex: 2;
        min-width: 80px;
        color: cornsilk;
        font-size: large;
        font-family: "Roboto", sans-serif;

    }
</style>