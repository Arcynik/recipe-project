<template>
  <div id="recipes">
    <v-container class="recipe-container">
        <filters :recipes="recipes" v-show="recipes.length"></filters>
        <v-row wrap>
            <v-col md="3" v-for="recipe in recipes" v-bind:key="recipe.label">
                <v-card color="#8fcc9f">
                    <v-card-title class="recipe-card-title">{{ recipe.recipe.label.substring(0, 40) }}</v-card-title>
                    <v-img contain :src="recipe.recipe.image" @click="openRecipe(recipe)"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- End of recipes' list -->
    <!-- Start of one recipe's dialog modal  -->
    <v-dialog color="white" v-model="dialog">
        <v-card>
            <div class="close-dialog">
                <v-btn @click="closeRecipe()">X</v-btn>
            </div>
            <v-card-title class="recipe-dialog-title">{{ recipe.name }}</v-card-title>

            <div class="flex-dialog-header">
                <v-img :aspect-ratio="16/9" max-height="350" max-width="450" :src="recipe.image"></v-img>
                <div class="flex-diet-infos">

                    <v-list-item v-if="recipe.cautions.length">
                        <v-list-item-content name="cautions">
                            <v-list-item-title>Cautions</v-list-item-title>
                            <v-list-item-subtitle v-for="caution in recipe.cautions" v-bind:key="caution">{{ caution }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="recipe.dietLabels.length">
                        <v-list-item-content name="dLabel">
                            <v-list-item-title>Diet labels</v-list-item-title>
                            <v-list-item-subtitle v-for="dLabel in recipe.dietLabels" v-bind:key="dLabel">{{ dLabel }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="recipe.healthLabels.length">
                        <v-list-item-content name="hLabel">
                            <v-list-item-title> Health labels</v-list-item-title>
                            <v-list-item-subtitle v-for="hLabel in recipe.healthLabels" v-bind:key="hLabel">{{ hLabel }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content name="calories">
                            <v-list-item-title>Calories</v-list-item-title>
                            <v-list-item-subtitle>{{ recipe.calories }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                </div>
            </div>
            
            <div class="flex-ingredients-info">
                <v-list-item v-if="recipe.ingredients.length">
                    <div name="ingredient" class="ingredient-list">
                        <v-list-item-title class="ingredient-title">Ingredients</v-list-item-title>
                        <v-list-item-subtitle v-for="(ingredient, index) in recipe.ingredients" v-bind:key="index" class="ingredient-line">
                            <v-img :aspect-ratio="16/9" contain max-height="80" max-width="115" :src="ingredient.image" class="ingredient-pic"></v-img>
                            {{ ingredient.text }}
                        </v-list-item-subtitle>
                    </div>
                </v-list-item>
            </div>

        </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Filters from '../components/Filters'

export default {
  name: 'Recipes',
  components: {
    Filters,
  },
  props: ['recipes'],
  data() {
    return {
        dialog: false,
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
        this.dialog = true
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
          this.dialog = false
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
    .show-more-btn {
        width: 100%;
        background-color: white;
    }
    .recipe-card-title {
        color: white;
    }
    .v-dialog {
        background-color: white;
        max-width: 70%;
    }
    .close-dialog {
        display: flex;
        justify-content: flex-end;
        padding-top: 8px;
        padding-right: 8px;
    }
    .recipe-dialog-title {
        color: green;
    }
    .flex-dialog-header {
        display: flex;
        padding-left: 15px;
    }
    .flex-diet-infos {
        width: 50%;
        margin-left: 5vw;
        display: flex;
        align-items: baseline;
        margin-top: 45px;
    }
    .v-list-item__title {
        color: green;
        padding-bottom: 10px;
    }
    .v-list-item__content{
        flex-direction: column;
    }
    .flex-ingredients-info {
        margin-top: 25px;
    }
    .ingredient-title {
        padding-left: 10px;
    }
    .ingredient-list {
        width: 100%;
        margin-bottom: 25px;
    }
    .ingredient-line {
        display: flex;
        align-items: center;
    }
    .ingredient-pic {
        margin-right: 10px; 
    }
</style>