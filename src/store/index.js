import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    TaskStatus(state, { index, completed }) {
      state.tasks[index].completed = completed;
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    updateTask(state, updatedTask) {
      const taskIndex = updatedTask.index;
      if (state.tasks[taskIndex]) {
        state.tasks[taskIndex].title = updatedTask.title;
        state.tasks[taskIndex].description = updatedTask.description;
        state.tasks[taskIndex].price=updatedTask.price;
      }
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    TaskStatus({ commit }, { index, completed }) {
      commit('TaskStatus', { index, completed });
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index);
    },
    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    },
  },
  getters: {
    getTasks: state => state.tasks,
  },
});
