<template>
  <div>
    <v-container>
      <h1 class="text-center">Delete a Task</h1>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item-content>
            <v-list-item-title>Title: {{ task.title }}</v-list-item-title>
            <v-list-item-subtitle>Description: {{ task.description }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn color="black" @click="deleteTask(index)">Delete</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTasks']),
    tasks() {
      return this.getTasks;
    },
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
