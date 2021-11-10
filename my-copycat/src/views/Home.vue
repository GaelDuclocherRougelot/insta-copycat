<template>
  <div class="home w-full h-full">
    <Header />
    <Feed />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Feed from '../components/Feed.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Feed,
  },
};
</script>
