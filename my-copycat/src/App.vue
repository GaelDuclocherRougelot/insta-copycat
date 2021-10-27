<template>
  <div class="flex flex-col">
    <Header />
    <Feed />
  </div>
</template>

<script>
import './assets/tailwind.css';
import Header from './components/Header.vue';
import Feed from './components/Feed.vue';

export default {
  name: 'App',
  components: {
    Header,
    Feed,
  },
};
</script>
<style>
  .test {
    position: relative;
    z-index: 0;
    background-color: #FAFAFA;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
