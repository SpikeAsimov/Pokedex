<template>
  <main>

    <Header/>


    <section class="wrapper">
      <div class="content">
        <section class="description-container">
          <div class="description">
              <Description :pokemon="pokemon"/>
          </div>
          <div class="picture">
              <ImagePokemon :img-url="pokemon.sprites.front_shiny"/>
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
      pokemon: {}
    }
  },
  created() {
    console.log("Created...")

    fetch("https://pokeapi.co/api/v2/pokemon/6/")
    .then(response => response.json())
    .then(data => (this.pokemon = data))
    .catch(error => console.error(error));

  }
}
</script>

<style scoped>

  .content {
    width: 60%;
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
