<template>
  <v-container>
    <h1 class="text-center">Add The New Task</h1>
    <v-form @submit.prevent="addNewTask">
      <v-text-field v-model="newTask.title" label="Task Title"></v-text-field>
      <v-text-field v-model="newTask.description" label="Task Description"></v-text-field>
      <v-text-field v-model="newTask.price" label="Task price"></v-text-field>
      <v-btn type="submit" color="black">Add Task</v-btn>
    </v-form>
    <router-link to="/task-list">
      <v-btn block color="white" text>See all tasks</v-btn>
    </router-link>
    <router-link to="/task-deleted">
      <v-btn block color="white" text>Delete a task</v-btn>
    </router-link>
    <router-view></router-view>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        completed: false,
        price:null,
      },
    };
  },
  methods: {
    ...mapActions(['addTask']),
    addNewTask() {
      if (this.newTask.title.trim() === '') return;
      this.addTask({ ...this.newTask });
      this.newTask.title = '';
      this.newTask.description = '';
      this.newTask.price='';
},
  },
};
</script>

