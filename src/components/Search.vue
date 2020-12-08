<template>
  <div id="search">
    <v-container>
      <v-form onSubmit="return false;">
        <v-text-field v-model="inputSearch"
        label="I would love to eat..."
        color="success"
        required>
        </v-text-field>
        <v-btn
          :disabled="!inputSearch"
          color="success"
          @click="search(inputSearch)"
        >Look for it
        </v-btn>
      </v-form>
    </v-container>
    <recipes :recipes="recipes"></recipes>
  </div>
</template>

<script>
import EventBus from '../eventBus'
import RecipesService from '../services/RecipesService'
import Recipes from '../components/Recipes'

export default {
  name: 'Search',
  components: {
    Recipes,
  },
  data() {
    return {
      recipes: [],
      inputSearch: '',
    }
  },
  methods: {
    search(input) {
        RecipesService.getRecipes(input)
            .then(response => {
              this.recipes = response.data.hits
            })
            .catch(error => {
                console.log(`There was a problem fetching events: ${error.message}`)
            })
    },
    filteredGlutenRecipes() {
      this.recipes = this.recipes.filter((recipe) => {
          return !recipe.recipe.cautions.includes('Gluten')
      })
    },
    filteredAlcoholRecipes() {
        this.recipes = this.recipes.filter((recipe) => {
            return recipe.recipe.healthLabels.includes('Alcohol-Free')
        })
    }
  },
  mounted() {
    EventBus.$on('filterGluten', () => {
        this.filteredGlutenRecipes()
    })
    EventBus.$on('filterAlcohol', () => {
        this.filteredAlcoholRecipes()
    })
    EventBus.$on('removeFilterGluten', (alcoholActive) => {
        this.search(this.inputSearch)
        if (alcoholActive === true) {
          this.filteredAlcoholRecipes()
        }
    })
    EventBus.$on('removeFilterAlcohol', (glutenActive) => {
        this.search(this.inputSearch)
        if (glutenActive === true) {
          this.filteredGlutenRecipes()
        }
    })

  }
}
</script>

<style>
  .container {
    display:flex;
    justify-content: center;
  }
  .v-form {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .v-text-field, input {
    min-width: 25em;
  }
  .v-input {
    margin-right: 15px;
  }
</style>