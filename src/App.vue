<template>
  <div class="app">
    <main>
      <Header/>
      <Pokemon/>
    </main>
  </div>

</template>

<script>


  import Header from './components/Header.vue'
  import Pokemon from "./components/Pokemon";

export default {
  name: 'App',
  components: {
      Header,
      Pokemon
  }

}
</script>

<style >

  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

  body {
    margin: 0;
    padding: 0;
  }

  .app {
    margin: 0;
    padding: 0;
  }



  main {

  }



</style>
