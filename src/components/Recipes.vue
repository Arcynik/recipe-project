<template>
  <div id="recipes">
    <v-container class="recipe-container">
        <filters :recipes="recipes" v-show="recipes.length"></filters>
        <v-row wrap>
            <v-col md="3" v-for="recipe in recipes" :key="recipe.label">
                <v-card color="#8fcc9f">
                    <v-card-title class="recipe-card-title">{{ recipe.recipe.label.substring(0, 40) }}</v-card-title>
                    <v-img contain :src="recipe.recipe.image" @click="openRecipe(recipe)"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <recipe-modal :recipe=recipe :open=open @close="closeRecipe"></recipe-modal>
  </div>
</template>

<script>
import Filters from '../components/Filters'
import RecipeModal from '../components/RecipeModal'

export default {
  name: 'Recipes',
  components: {
    Filters,
    RecipeModal,
  },
  props: {
      recipes: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
        open: false,
        recipe: {
            name: '',
            calories: '',
            cautions: [],
            dietLabels: [],
            healthLabels: [],
            image: '',
            ingredients: [],
            dailyIntake: ''
        }
    }
  },
  methods: {
      openRecipe(recipe) {
        this.open = true
        this.recipe.name = recipe.recipe.label
        this.recipe.calories = recipe.recipe.calories
        this.recipe.cautions = recipe.recipe.cautions
        this.recipe.dietLabels = recipe.recipe.dietLabels
        this.recipe.healthLabels = recipe.recipe.healthLabels
        this.recipe.image = recipe.recipe.image
        this.recipe.ingredients = recipe.recipe.ingredients
        this.recipe.dailyIntake = recipe.recipe.totalDaily
      },
      closeRecipe() {
          this.open = false
      }
  },
  filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }
}
</script>

<style>
    .recipe-container {
        flex-direction: column;
    }
</style>