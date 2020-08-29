<template>
    <div class="container">
        <div class="title-container">
            <div class="title">
                <h1>
                    {{pokemon.name}}
                    <span class="type">
                    <br>
                        - {{pokemon.types[0].type.name}}
                </span>
                </h1>
            </div>
        </div>

        <div>
            <ul class="tags-container">
                <li>Peso: {{pokemon.weight}} Kg</li>
                <li>Altura: {{pokemon.height}} cent.</li>
            </ul>
        </div>
        <h2>Movimientos: </h2>
        <ul>
            <li class="movements">
                {{pokemon.moves[0].move.name}}
            </li>
        </ul>
    </div>



</template>


<script>

    export default {
        props: ["pokemon"]
    }

</script>


<style scoped>
    .tags-container {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .tags-container > li {
        background: hsl(353, 61%, 90%);
        padding: 6px 12px;
        margin-right: 12px;
        border-radius: 12px;
        color: hsl(353, 60%, 40%);
    }
    .title-container {
        margin: 22px 0 11px 0;
        display: flex;
    }

    .movements {
        margin-bottom: 8px;
    }


    .title > h1 {
        padding: 0;
        margin: 0;
        font-size: 30px;
        text-transform: capitalize;
    }

    .type {
        font-size: 22px;
        font-weight: normal;
        font-style: italic;
        text-transform: capitalize;
    }

    .container {
        font-family: 'Roboto', sans-serif;
    }

</style>