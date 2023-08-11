<template>
  <v-container>
    <h1 class="text-center">Task List</h1>
    <v-list>
      <v-list-item v-for="(task, index) in tasks" :key="index">
        <v-list-item-content>
          <v-list-item-title>Title: {{ task.title }} </v-list-item-title>
          <v-list-item-title>Description: {{ task.description }}</v-list-item-title>
          <v-list-item-title>Price: {{ task.price }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <router-link :to="`/task-updated/${index}`">
            <v-btn block color="black" text>Update the task</v-btn>
          </router-link>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getTasks']),
    tasks() {
      return this.getTasks.filter(task => !task.completed);
    },
  },
  methods: {
    ...mapActions(['TaskStatus']),
    InProgress(index) {
      const task = this.tasks[index];
      task.inProgressColor = 'red'; 
      this.TaskStatus({ index, completed: false });
      alert('Task is now in progress.');
    },
    Completed(index) {
      const task = this.tasks[index];
      task.completedColor = 'green'; 
      this.TaskStatus({ index, completed: true });
      alert('Task is now completed.');
      this.tasks.splice(index, 1);
    },
  },
};
</script>
