<template>
  <div class="home w-full h-full">
    <Header />
    <Feed />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Feed from '../components/Feed.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Feed,
    Footer,
  },
};
</script>
