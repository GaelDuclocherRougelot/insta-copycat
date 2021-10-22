<template>
  <div class="header flex justify-center items-center border-b border-border-primary bg-white">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <img class="mt-2" src="../assets/logo.png" alt="instagram logo">
      </div>
      <div class="container-search">
        <input v-model="rechercherIsActive" type="text" 
        class="border border-border-primary w-full h-7 rounded-sm">
        <div class="search-span flex ml-2">
          <img class="img-search w-3 -top-5" src="../assets/svg\insta/search.svg" alt="search icon">
          <span v-if="rechercherIsActive == ''" class="absolute -top-7 text-sm mt-1 text-gray-400">Rechercher</span>
        </div>
      </div>
      <div class="container-nav flex justify-between">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      svg: 20,
      rechercherIsActive: '',
    };
  },
};
</script>
<style>
  .header{
    height: 54px;
    width: 100%;
    position: fixed;
    z-index: 20;
  }
  .container{
    max-width: 975px;
    min-width: auto;
  }
  .container-img{
    height: 36px;
    width: 228px;
  }
  .container-img img{
    display: block;
    height: 29px;
    width: 103px;
    min-height: auto;
    max-width: 100%;
    min-width: auto;
  }

  .container-search{
    width: 215px;
    background-color: #FAFAFA;
  }
  input {
    z-index: 15;
    position: relative;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 25px;
  }
  input:focus{
    outline: #FAFAFA;
  }

  input:focus + .search-span{
    margin-left: -43px;
  }
  .search-span{
    z-index: 14;
    position: relative;
  }
  .search-span span{
    margin-left: 70px;
    font-weight: lighter;
  }
  .img-search {
    transform: rotate(-20deg);
    position: absolute;
    margin-top: 1px;
    margin-left: 52px;
    visibility: block;
  }
  input:focus + .search-span>.img-search{
    visibility: hidden;
  }
  .container-nav{
    width: 222px;
    height: 22px;
    word-spacing: 0px;
    text-decoration: none;
    padding: 0 0 0 24px;
  }
</style>
