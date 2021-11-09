<template>
  <div class="main-container w-full h-screen flex flex-col">
    <Header />
    <h1 class="mt-36">Message</h1>
  </div>
</template>
<script>
import Header from '../components/Header.vue';

export default {
  name: 'Message',
  components: {
    Header,
  },
};
</script>
<style>
  .main-container {
    height: 100.1vh;
  }
</style>
