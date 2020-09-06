<template>
  <main>

    <Header/>


    <section class="wrapper">
      <div class="content">
        <div class="title">
            <h1>Primera Generación</h1>
        </div>
        <section class="description-container">
          <div class="description">
              <Description :pokemon="pokemon"/>
          </div>
          <div class="picture">
              <ImagePokemon :imgUrl="pokemon.sprites.other.dream_world.front_default"/>
          </div>
        </section>
      </div>
    </section>

    <hr>

    <section class="wrapper">
      <div class="content">
        <div class="title">
          <h1>Segunda Generación</h1>
        </div>
        <section class="description-container">
          <div class="description">
            <Description :pokemon="pokemon2"/>
          </div>
          <div class="picture">
            <ImagePokemon :imgUrl="pokemon2.sprites.other.dream_world.front_default"/>
          </div>
        </section>
      </div>
    </section>


  </main>
</template>

<script>

import Header from './components/Header.vue'
import Description from './components/Description.vue'
import ImagePokemon from "./components/ImagePokemon";

export default {
  name: 'App',
  components: {
      Header,
      Description,
      ImagePokemon
  },
  data: () => {
    return {
      pokemon: {},
      pokemon2: {}
    }
  },
  created() {
    function numeroAleatorio(a, b) {
      return Math.round(Math.random()*(b-a)+parseInt(a));
    }
    var primeraGeneracion = numeroAleatorio(1, 150);


    console.log("Created... -  ID Pokemon: " + primeraGeneracion);

    fetch("https://pokeapi.co/api/v2/pokemon/"+ primeraGeneracion)
    .then(response => response.json())
    .then(data => (this.pokemon = data))
    .catch(error => console.error(error));


    var segGeneracion = numeroAleatorio(151, 300);

    console.log("Created... -  ID Pokemon: " + segGeneracion);

    fetch("https://pokeapi.co/api/v2/pokemon/"+ segGeneracion)
            .then(response => response.json())
            .then(data => (this.pokemon2 = data))
            .catch(error => console.error(error));

  }
}
</script>

<style scoped>

  .content {
    width: 70%;
    border: 5px hsl(353, 91%, 12%) solid;
    border-radius: 16px;
    padding: 18px;
    background: hsl(353, 81%, 61%);
    max-width: 850px;
    margin-top: 7%;
    margin-bottom: 22px;
  }

  .description-container {
    display: flex;
    flex-wrap: wrap-reverse;
  }

  .description {
    flex: 1;

  }

  .picture {
    flex: 1;

  }

  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  main {
    min-width: 100vw;
    min-height: 100vh;
    background: hsl(353, 90%, 90%);
  }

</style>
