<template>
  <v-container color="error">
    <v-btn id="orderButton" v-on:click="goOrder">Zamow<v-icon large color="orange darken-2">
      mdi-arrow-up-bold-box-outline
    </v-icon>
    </v-btn>
    <v-row class="justify-center">
      <v-col cols="4" v-for="product in products" :key="product.id" class="displayCartProducts">
        <v-card color="error">
          <v-card-text class="white--text justify-center">{{ product.name}} Ilosc: {{ product.quantity}}</v-card-text>
          <v-card-text class="white--text justify-center">{{ product.ingredients }}</v-card-text>
          <v-card-text class="white--text justify-center"> Cena: {{ product.price }}Zł </v-card-text>
          <v-btn v-on:click="deleteMealFromCart(product)">Usun produkt</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: []
    };
  },
  computed: {
    products() {
      return this.$store.getters.getCart;
    }
  },
  methods: {
    deleteMealFromCart(product) {
      this.$store.commit("deleteFromCart", product);

    }, goOrder() {
      return this.$router.push('/order');

    }
  }


};
</script>

<style scoped>
.displayCartProducts {
  border: yellow;
  width: 30%;
  height: 30%;
  padding-top: 70px;
}
#orderButton{
  background-color: #000;
  color: white;
}

</style>