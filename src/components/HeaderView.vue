<template>
  <v-container>
    <v-toolbar color="blue-lighten-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>MyTasks</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/task-created">
        <v-btn block color="black">Add a task</v-btn>
      </router-link>
      <router-link to="/cart-list">
        <v-btn block color="black">Check cart</v-btn>
      </router-link>
    </v-toolbar>
  </v-container>
</template>
