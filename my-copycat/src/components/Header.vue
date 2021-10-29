<template>
  <div class="header flex justify-center items-center border-b border-border-primary bg-white">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <router-link to="/">
          <img class="mt-2" src="../assets/logo.png" alt="instagram logo">
        </router-link>
      </div>
      <div class="container-search">
        <input @click="focusIsActive = true" v-model="rechercherIsActive" 
        :class="{inputVisibility : rechercherIsActive !== ''}" type="text" 
        class="border border-border-primary w-full h-7 rounded-sm"
        >
        <div class="search-span flex ml-2">
          <img class="img-search w-3 -top-5" src="../assets/svg\insta/search.svg" alt="search icon">
          <span v-if="rechercherIsActive == ''" class="absolute -top-7 text-sm mt-1 text-gray-400">Rechercher</span>
          <span v-if="rechercherIsActive !== ''" 
          class="search-focusOff absolute -top-7 text-sm mt-1 text-gray-400">{{rechercherIsActive}}</span>

          <img @click="deleteSearch" class="img-cross w-3 -top-5 rounded-md" src="../assets/svg\insta/search-cross.svg" alt="cross icon">
          </div>
      </div>
      <div class="container-nav flex">
        <img :src="require(`../assets/svg/insta/svgexport-${15}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${7}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${24}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${17}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" alt="logo">
        <img class="rounded-full" :src="require(`../assets/user.jpg`)" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      svg: 15,
      rechercherIsActive: '',
      focusIsActive: false,
    };
  },
  methods: {
    deleteSearch() {
      this.rechercherIsActive = '';
      return this.rechercherIsActive;
    },
  },
};
</script>
<style scoped>
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
    min-width: 103px;
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
    min-width: 215px;
    max-width: 215px;
    font-size: 14px;
    font-weight: 200;
    overflow: hidden;
  }
  input:focus{
    outline: #FAFAFA;

  }
  input:not(:focus){
    color: #fafafa00;
  }

  input:focus + .search-span{
    margin-left: -43px;
  }
  .search-span{
    position: relative;
  }
  .search-span span{
    z-index: 14;
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
  .img-cross {
    position: absolute;
    margin-left: 233px;
    width: 13px;
    z-index: 16;
  }
  input:focus + .search-span>.img-search{
    visibility: hidden;
  }

  .search-focusOff {
    overflow: hidden;
    max-width: 120px;
  }
  .container-nav{
    width: 270px;
    min-width: 222px;
    height: 42px;
    word-spacing: 0px;
    text-decoration: none;
    padding: 0 0 0 24px;
  }
  .container-nav img {
    margin: 10px;
    cursor: pointer;
  }
</style>
