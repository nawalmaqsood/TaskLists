<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="elevation-3">
          <v-card-title class="text-center" custom-font>
            <h1>LogIn</h1>
            <br />
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field label="Username" v-model="username" type="text" variant="outlined" required></v-text-field>
              <v-text-field label="Password" v-model="password" type="password" variant="outlined" required></v-text-field>
              <v-btn block color="black" type="submit">Login</v-btn>
              <br />
              <router-link to="/signup">
                <v-btn block color="black" text>Create an account</v-btn>
              </router-link>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    ...mapActions({ createUser: 'registerUser' }),
    login() {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const user = storedUsers.find(
        (user) => user.username === this.username && user.password === this.password);

      if (user) {
        this.$emit("login-success", { username: this.username });
        this.$router.push('/task-created');

      } 
      else {
        alert("Invalid username or password");
      }
    },
  },
}
</script>
