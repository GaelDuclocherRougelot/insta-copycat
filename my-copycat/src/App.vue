<template>
  <div>
    <Header />
    <div class="h-screen"></div>
  </div>
</template>

<script>
import './assets/tailwind.css';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
