<template>
  <div class="flex flex-col">
    <Header />
    <div class="test h-screen w-full"></div>
    <div class="test h-screen w-full"></div>
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
<style>
  .test {
    position: relative;
    z-index: 0;
    background-color: #FAFAFA;
  }
</style>
