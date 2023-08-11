<template>
  <v-container>
    <h1 class="text-center">Update Task</h1>
    <v-form @submit.prevent="performUpdateTask">
      <v-text-field v-model="editedTask.title" label="Task Title"></v-text-field>
      <v-text-field v-model="editedTask.description" label="Task Description"></v-text-field>
      <v-text-field v-model="editedTask.price" label="Task price"></v-text-field>
      <v-btn type="submit" color="black">Update Task</v-btn>
    </v-form>
    <router-link to="/task-list">
      <v-btn block color="white" text>Back to Task List</v-btn>
    </router-link>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      editedTask: {
        title: '',
        description: '',
        price:'',
      },
    };
  },
  computed: {
    ...mapGetters(['getTasks']),
  },
  methods: {
    ...mapActions(['updateTask']),
    performUpdateTask() {
      if (!this.editedTask.title || !this.editedTask.description) {
        alert('Please provide a title and description for the task.');
        return;
      }

      const updatedTask = {
        index: this.$route.params.index,
        title: this.editedTask.title,
        description: this.editedTask.description,
        price: this.editedTask.price,
      };
      this.updateTask(updatedTask);
      this.$router.push('/task-list');
    },
  },
  created() {
    const taskIndex = parseInt(this.$route.params.index);
    const task = this.getTasks[taskIndex];
    if (task) {
      this.editedTask.title = task.title;
      this.editedTask.description = task.description;
      this.editedTask.price= task.price;
    }
  },
};
</script>
