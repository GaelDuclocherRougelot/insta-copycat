<template lang="">
  <div>
    <Header/>
    <ExplorerComp/>
    <Footer id="footer"/>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ExplorerComp from '../components/ExplorerComp.vue';

export default {
  components: {
    Header,
    Footer,
    ExplorerComp,
  },
};
</script>
<style scoped>
  @media (max-width: 415px) {
    #footer {
      display: block;
    }
  }
</style>
