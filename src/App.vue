<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
    <h2>{{ projectTitle }}</h2>
    <h3>{{ name }} / {{ date }}</h3>
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
      projectTitle: 'Aqsone Vue Project',
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
</style>