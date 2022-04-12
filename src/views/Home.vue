<template>
  <v-container class="fillItems">

      <div class="choosePanel">
        <h1 class="pizzeriaText">Pizzeria Amore</h1>
        <div class="buttonDIV">
          <v-btn id="button" name="button"
                 color="error" @click="goReservation">Zamów pizze </v-btn>
        </div>
      </div>
  </v-container>
</template>
<script>


export default {
  name: "Home",

  methods:{
    goReservation() {
      return this.$router.push('/meals').catch(()=>{});
    },
  }
};
</script>

<style>

.choosePanel {
  font-style: italic;
  padding: 15px;
  text-align: center;
}

.pizzeriaText{
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:160px;
  opacity: 65%;
  color: crimson;
}

</style>
