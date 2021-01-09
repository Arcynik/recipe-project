<template>
    <v-dialog color="white" v-model="open">
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
                            <v-list-item-subtitle v-for="caution in recipe.cautions" :key="caution">{{ caution }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="recipe.dietLabels.length">
                        <v-list-item-content name="dLabel">
                            <v-list-item-title>Diet labels</v-list-item-title>
                            <v-list-item-subtitle v-for="dLabel in recipe.dietLabels" :key="dLabel">{{ dLabel }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="recipe.healthLabels.length">
                        <v-list-item-content name="hLabel">
                            <v-list-item-title> Health labels</v-list-item-title>
                            <v-list-item-subtitle v-for="hLabel in recipe.healthLabels" :key="hLabel">{{ hLabel }}</v-list-item-subtitle>
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
                    <div id="ingredient" class="ingredient-list">
                        <v-list-item-title class="ingredient-title">Ingredients</v-list-item-title>
                        <v-list-item-subtitle v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-line">
                            <v-img :aspect-ratio="16/9" contain max-height="80" max-width="115" :src="ingredient.image" class="ingredient-pic"></v-img>
                            {{ ingredient.text }}
                        </v-list-item-subtitle>
                    </div>
                </v-list-item>
            </div>

        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'RecipeModal',
  props: {
      recipe: {
          type: Object,
          required: true
      },
      open: {
          type: Boolean,
          required: true
      }
  },
  data() {
    return {
    }
  },
  methods: {
      closeRecipe() {
          this.$emit('close', false)
      }
  }
}
</script>

<style>
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