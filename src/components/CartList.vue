<template>
  <v-container>
    <h1 class="text-center">Cart</h1>
    <v-list>
      <v-list-item v-for="(item, index) in cart" :key="index">
        <v-list-item-content>
          <v-list-item-title>Title: {{ item.title }}</v-list-item-title>
          <v-list-item-title>Description: {{ item.description }}</v-list-item-title>
          <v-list-item-title>Price: {{ item.price }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="removeFromCart(index)" color="black">Remove</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <h3 class="text-right pr-8">Total Price: {{ calculateTotalPrice() }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCart']),
    cart() {
      return this.getCart;
    },
  },
  methods: {
    ...mapActions(['removeTaskFromCart']),
    removeFromCart(index) {
      this.removeTaskFromCart(index);
    },
    calculateTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
};
</script>
