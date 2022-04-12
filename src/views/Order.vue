<template>
  <div class="container">
    <div>
      <p id="textFillAll">Wypelnij wszystkie pola</p>
      <div class="row">
        <div class="col-25">
          <label class="fname">Imie</label>
        </div>
        <div class="col-75">
          <v-text-field v-model="name" :rules="nameRules" type="text" id="fname"
                        name="firstname"
                        placeholder="Twoje imie..">
          </v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label class="fname">Nazwisko</label>
        </div>
        <div class="col-75">
          <v-text-field v-model="lastName" :rules="nameRules" type="text"
                        id="secondName" name="secondname"
                        placeholder="Twoje nazwisko.." required></v-text-field>

        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label class="fname">Email</label>
        </div>
        <div class="col-75">
          <v-text-field v-model="email" :rules="emailRules" type="email" id="email"
                        name="email"
                        placeholder="Twój email.. " required></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label class="fname">Miasto</label>
        </div>
        <div class="col-75">
          <v-text-field v-model="city" :rules="nameRules" type="text" id="city"
                        name="city" placeholder="Twoje miasto..."
                        required></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label class="fname">Ulica</label>
        </div>
        <div class="col-75">
          <v-text-field v-model="street" :rules="nameRules" type="text" id="street"
                        name="street"
                        placeholder="Twoja ulica..." required></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-75">
          <button id="orderButton" @click="checkIfPossibleToOrder" name="firstname">zamow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Order",
  data() {
    return {
      valid: true,
      select: null,
      name: "",
      lastName: "",
      email: "",
      city: "",
      street: "",

      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 30 || "Name must be less than 10 characters"

      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    checkIfPossibleToOrder() {
      if (this.name.length > 0 && this.lastName.length > 0 && this.email.length > 0 && this.city.length > 0 && this.street.length > 0) {
        this.send();
      } else {
        alert("Wypelnij wszystkie pola")
      }
    },
    getOrders() {
      return this.$store.getters.getCart;
    },
    goHomePage() {
      return this.$router.push("/").catch(()=>{});
    },
    async send() {
      await axios.post("http://localhost:8080/orders", {
        client: {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          city: this.city,
          street: this.street
        },
        meals: this.getOrders()
      });
      this.goHomePage();
      alert("Zamowienie zostało zlozone")
      this.$forceUpdate();
      this.$store.state.cart.splice(0)
    }

  }

};
</script>

<style scoped>

* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

input[type=email], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}



label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {

  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

#textFillAll {
  color: white;
  font-size: 19px;
  font-family: italic;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  margin-top: 3%;
  background-color: rosybrown;
  border-radius: 5px;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

</style>