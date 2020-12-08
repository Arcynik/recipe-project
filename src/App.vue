<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
    <img class="logo" max-height="20" max-width="100" src="./assets/logo.png"/>
    <h2>{{ projectTitle }}</h2>
    <h5>{{ name }} / {{ date }}</h5>
    </v-app-bar>
    <v-main>
      <Search/>
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',

  components: {
    Search,
  },

  data() {
    return {
      name: 'Léa Fontaine',
      projectTitle: 'Vue Recipe Project',
      date: 'december 2020'
    }
  }
};
</script>
<style>
    .v-toolbar__content {
      display: flex;
      justify-content: space-between;
    }
    .logo {
      max-width: 150px;
      height: auto;
    }
</style>