<template>
    <div>
      <v-container>
        <h1 class="text-center">Delete a Task</h1>
        <v-list>
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-content>
                <v-list-item-title>Title:{{ task.title }}</v-list-item-title>
                <v-list-item-title>Description:{{ task.description }}</v-list-item-title>
            </v-list-item-content>
            <v-list>
                  <v-btn v-on="on" color="Black">Delete</v-btn>
            </v-list>
          </v-list-item>
        </v-list>
      </v-container>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        dialog: false,
      };
    },
    computed: {
      ...mapGetters(['getTasks']),
      tasks() {
        return this.getTasks;
      },
    },
    methods: {
      ...mapActions(['deleteTask']),
      deleteTask(index) {
        this.deleteTask(index);
        this.dialog = false;
        alert('Task has been deleted.');
      },
    },
  };
  </script>
  
  