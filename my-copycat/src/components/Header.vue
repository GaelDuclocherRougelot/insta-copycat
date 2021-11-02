<template>
  <div class="header flex justify-center items-center border-b border-border-primary bg-white">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <router-link to="/">
          <img class="mt-2" src="../assets/logo.png" alt="instagram logo">
        </router-link>
      </div>
      <div class="container-search flex flex-col items-center">
        <input @click="searchFocused = true" v-model="rechercherIsActive" type="text" class="border border-border-primary w-full h-7 rounded-sm">
        <div class="search-span flex">
          <img :class="{searchImgActive : searchFocused}" class="img-search w-3 -top-5" src="../assets/svg\insta/search.svg" alt="search icon">
          <span v-if="rechercherIsActive == ''" :class="{searchActive : searchFocused}" class="absolute -top-7 text-sm mt-1 text-gray-400 -left-6">Rechercher</span>
          <span v-if="rechercherIsActive !== ''" class="search-focusOff absolute -top-7 text-sm mt-1 ml-20 text-gray-400">{{rechercherIsActive}}</span>
          <img @click="deleteSearch" :class="{searchImgCrossActive : searchFocused}" class="img-cross w-3 -top-5 rounded-md" src="../assets/svg\insta/search-cross.svg" alt="cross icon">
          </div>

          <div v-if="searchFocused" class="search-recent flex flex-col items-center bg-white mt-10">
            <span class="triangle"></span>
            <div class="w-full flex justify-start bg-white pt-4">
            <p>Récent</p>
            </div>
            <div class="results">
              <p>Aucune recherche récente.</p>
            </div>
          </div>

  <div v-if="searchFocused" @click="searchFocused = false" class="invisibleDiv"></div>
      </div>
      <div class="container-nav flex">
        <router-link to="/">
          <img :src="require(`../assets/svg/insta/svgexport-${15}.svg`)" alt="logo">
        </router-link>
        
        <router-link to="/message">
          <!-- <img :src="require(`../assets/svg/insta/svgexport-${21}.svg`)" alt="logo"> -->
          <img :src="require(`../assets/svg/insta/svgexport-${7}.svg`)" alt="logo">
        </router-link>
        
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
      rechercherIsActive: '',
      searchFocused: false,
    };
  },
  methods: {
    deleteSearch() {
      this.rechercherIsActive = '';
      this.searchFocused = false;
      return (this.searchFocused, this.rechercherIsActive);
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
    height: 28px;
    background-color: #FAFAFA;
  }
  input {
    z-index: 15;
    position: absolute;
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
    color: #fafafad8;
  }
  .search-span{
    position: absolute;
    margin-top: 28px;
  }
  .search-span span{
    z-index: 14;
    font-weight: lighter;
  }
  .img-search {
    transform: rotate(-20deg);
    position: absolute;
    margin-top: 1px;
    margin-left: -20px;
    visibility: block;
  }
  .searchImgActive{
    visibility: hidden;
  }
  .img-cross {
    position: absolute;
    margin-left: 185px;
    width: 13px;
    z-index: 16;
    visibility: hidden;
    cursor: pointer;
  }
  .searchImgCrossActive{
    visibility: visible;
  }
  .search-focusOff{
    overflow: hidden;
    max-width: 120px;
  }
  /* NAV */
  .container-nav{
    width: 270px;
    min-width: 222px;
    height: 42px;
    word-spacing: 0px;
    text-decoration: none;
    padding: 0 0 0 24px;
    z-index: 5;
    position: relative;
  }
  .container-nav img {
    margin: 10px;
    cursor: pointer;
  }

  a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .router-link-exact-active{
    
  }

  .searchActive{
    left: -75px;
  }
    
  .search-recent{
    position: relative;
    z-index: 15;
    min-width: 362px;
    min-height: 375px;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
  }
  .triangle{
    position: absolute;
    z-index: -1;
    background: #fff;
    width: 14px;
    height: 14px;
    top: -5px;
    left: 175px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
    transform: rotate(45deg);
  }

  .invisibleDiv{
    width: 200vh;
    height: 100vh;
    position: absolute;
    right: 50px;
    top: 0;
    z-index: 10;
  }
</style>
