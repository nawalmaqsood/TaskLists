<template>
  <div id="app">
    <HeaderView />
    <router-view />
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
  },
};
</script>
