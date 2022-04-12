<template>
  <v-container id="container" class="d-flex align-items-stretch flex-wrap">
    <v-btn icon v-on:click="goCarts">
      <v-badge  color="red"  :content="getCartsLength" :value="getCartsLength>0">
        <v-icon color="yellow">mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-row>
      <v-col cols="4" v-for="meal in meals" :key="meal.id">
        <meal-card :meal="meal" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import MealCard from "../components/MealCard";


export default {
  name: "Meals",
  components: {
    MealCard
  },
  computed: {
    meals() {
      return this.$store.getters.getMeals;
    },
    getCartsLength() {
      return this.$store.getters.getCart.length;
    }

  },
  methods:{
    goCarts(){
      return this.$router.push('/cart').catch(()=>{});
    }
  }


};


</script>


<style>
body {
  height: 100vh;
  background-color: black;
  font-style: italic;
}

#container {
  padding-top: 10px;
}

</style>