<template>
  <v-container>
    <v-card color="error">
      <v-card-title class="white--text justify-center">{{  meal.name }}</v-card-title>
      <v-card-subtitle class="white--text justify-center">{{meal.ingredients }}</v-card-subtitle>
      <v-card-text class="white--text justify-center"> Cena: {{ meal.price }} zł</v-card-text>
      <v-btn v-on:click="addMealToCart" class="black--text align">Dodaj do koszyka</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MealCard",
  props: ["meal"],

  methods: {
    addMealToCart() {
      this.$store.commit("addToCart", this.meal);
    },



  }
};
</script>

<style scoped>


</style>