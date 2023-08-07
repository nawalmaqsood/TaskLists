import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../components/LoginView.vue';
import SignupView from '../components/SignupView.vue';
import TaskCreated from '../components/TaskCreated.vue';
import TaskList from '../components/TaskList.vue';
import TaskDeleted from '../components/TaskDeleted.vue';

const routes = [
  { 
    path: '/', 
    component: LoginView 
  },
  { 
    path: '/signup', 
    component: SignupView 
  },
  { 
    path: '/task-created',
    component: TaskCreated,
  },
  {
    path: '/task-list',
    component: TaskList,
  },
  {
    path: '/task-deleted',
    component: TaskDeleted
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
