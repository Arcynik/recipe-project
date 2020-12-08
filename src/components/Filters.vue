<template>
  <div id="filters">
    <v-btn color="green" v-if="glutenActive" class="filter-btn" elevation="2" rounded text @click="filterGluten">Gluten free</v-btn>
    <v-btn color="red" v-else class="close filter-btn" elevation="2" rounded text @click="removeGlutenFilter(alcoholActive)">X Gluten free</v-btn>
    <v-btn color="green" v-if="alcoholActive" class="filter-btn" elevation="2" rounded text @click="filterAlcohol">Alcohol free</v-btn>
    <v-btn color="red" v-else class="close filter-btn" elevation="2" rounded text @click="removeAlcoholFilter(glutenActive)">X Alcohol free</v-btn>
  </div>
</template>

<script>
import EventBus from '../eventBus'
export default {
  name: 'Filters',
  props: ['recipes'],
  data() {
    return {
        glutenActive: true,
        alcoholActive: true,
    }
  },
  methods: {
    filterGluten() {
        this.glutenActive = !this.glutenActive
        EventBus.$emit('filterGluten')
    },
    filterAlcohol() {
        this.alcoholActive = !this.alcoholActive
        EventBus.$emit('filterAlcohol')
    },
    removeGlutenFilter(alcoholActive) {
        this.glutenActive = !this.glutenActive
        EventBus.$emit('removeFilterGluten', !alcoholActive)
    },
    removeAlcoholFilter(glutenActive) {
        this.alcoholActive = !this.alcoholActive
        EventBus.$emit('removeFilterAlcohol', !glutenActive)
    }
  },
}
</script>

<style>
    #filters {
        display: flex;
        justify-content: flex-end;
    }
    .filter-btn {
        margin-right: 25px;
        margin-bottom: 15px;
    }
</style>