<template>
  <v-app id="app">
    <div>
    <div class="application">
      <v-btn class="link"  color="error" v-on:click="goMeals">Posilki</v-btn>
      <v-btn class="link"  color="error" v-on:click="goHomePage">Strona glowna</v-btn>
      <v-btn class="link"  color="error" v-on:click="goCartPage">Koszyk</v-btn>
    </div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),

  methods:{
    goMeals() {
      return this.$router.push('/meals').catch(()=>{});
    },
    goHomePage() {
      return this.$router.push('/').catch(()=>{});
    },
    goCartPage(){
      return this.$router.push('/cart').catch(()=>{});
    }
  },
  mounted() {
    this.$store.dispatch('fetchMeals').catch(error=> alert(error.response.data))
  }

};
</script>

<style>
body{

}

#app{
  background-image: url(./assets/bg1.jpg);
  height: 100%;
  width: 100%;
  margin:0;
}

.application{
  height: 10%;
  width: 100%;
  font-size: 30px;
  text-align: center;

}

.link{
  margin:15px;
}


</style>
