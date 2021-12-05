<template>
  <div class="container">
    <Header class="header"/>
    <ExplorerComp/>
    <Footer id="footer"/>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import ExplorerComp from '../components/ExplorerComp.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Explorer',
  components: {
    Header,
    ExplorerComp,
    Footer,
  },
};
</script>
<style scoped>
  @media (max-width: 415px) {
    #footer {
      display: block;
    }
  }
  @media (max-width: 640px) {
    .header {
      display: none;
    }
  }
  .container{
    width: 100%;
    height: 100%;
  }
</style>
