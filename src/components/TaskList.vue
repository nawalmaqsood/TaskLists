<template>
    <div>
      <v-container>
        <h1 class="text-center">Task List</h1>
        <v-list>
          <v-list-item v-for="(task, index) in tasks" :key="index" :class="{ 'completed-task': task.completed }">
            <v-list-item-content>
              <v-list-item-title>Title:{{ task.title }}</v-list-item-title>
              <v-list-item-title>Description:{{ task.description }}</v-list-item-title>
            </v-list-item-content>
            <v-list>
              <v-btn @click="InProgress(index)">Task In Progress</v-btn>
              <v-btn @click="Completed(index)">Task Completed</v-btn>
            </v-list>
          </v-list-item>
        </v-list>
      </v-container>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getTasks']),
      tasks() {
        return this.getTasks;
      },
    },
    methods: {
      ...mapActions(['updateTask']),
      InProgress(index) {
        this.updateTask({ index, completed: false });
        alert('Task is now in progress.');
      },
      Completed(index) {
        this.updateTask({ index, completed: true });
        alert('Task is now completed.');
      },
    },
  };
  </script>
