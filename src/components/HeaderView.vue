<template>
    <div class="flex-1 p-8">
        <v-toolbar color="blue-lighten-4">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>MyTasks</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/task-created">
            <v-btn block color="black">Add a task</v-btn>
          </router-link>
        </v-toolbar>
      </div>
</template>