<template>
  <div class="header flex justify-center items-center border-b border-border-primary bg-white">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <router-link to="/">
          <img class="mt-2" src="../assets/logo.png" alt="instagram logo">
        </router-link>
      </div>
      <div class="container-search flex flex-col items-center ml-10">
        <input @click="searchFocused = true, loaderAnimation()" @keydown="loaderAnimation()" v-model="rechercherIsActive" type="text" class="border border-border-primary w-full h-7 rounded-sm">
        <div class="search-span">
          <img :class="{searchImgActive : searchFocused}" class="img-search w-3" src="../assets/svg\insta/search.svg" alt="search icon">
          <span v-if="rechercherIsActive == ''" :class="{searchActive : searchFocused}" class="searchDesactive absolute text-sm mt-1 text-gray-400">Rechercher</span>
          <span v-if="searchFocused == false && rechercherIsActive !== ''" class="search-focusOff absolute text-sm mt-1 ml-20 text-gray-400">{{rechercherIsActive}}</span>
          <img v-if="loaderAnim" class="search-loader w-4 animate-spin absolute" src="../assets/svg\insta/svgexport-14.svg" alt="">
          <img v-if="loaderAnim == false" @click="deleteSearch" :class="{searchImgCrossActive : searchFocused}" class="img-cross w-3 rounded-md" src="../assets/svg\insta/search-cross.svg" alt="cross icon">
          </div>

          <div v-if="searchFocused" class="search-recent flex flex-col items-center bg-white mt-10">
            <span class="triangle"></span>
            <div class="w-full flex justify-start bg-white rounded-t-md pt-4">
            <p v-if="loaderAnim == false" class="ml-4 font-semibold">Récent</p>
            </div>
            <div class="results w-full h-full justify-center items-center flex">
              <img v-if="loaderAnim" class="w-5 animate-spin" src="../assets/svg\insta/svgexport-14.svg" alt="">
              <p v-else class="text-sm text-gray-400 font-semibold">Aucune recherche récente.</p>
            </div>
          </div>

  <div v-if="searchFocused" @click="searchFocused = false" class="invisibleDiv"></div>
      </div>
      <div class="container-nav flex justify-between items-center">
        <router-link to="/">
          <img :src="require(`../assets/svg/insta/svgexport-${15}.svg`)" alt="logo">
        </router-link>
        
        <router-link to="/message">
          <!-- <img :src="require(`../assets/svg/insta/svgexport-${21}.svg`)" alt="logo"> -->
          <img :src="require(`../assets/svg/insta/svgexport-${7}.svg`)" alt="logo">
        </router-link>
        
        <router-link to="#">
          <img :src="require(`../assets/svg/insta/svgexport-${24}.svg`)" alt="logo">
        </router-link>

        <router-link to="#">
          <img :src="require(`../assets/svg/insta/svgexport-${17}.svg`)" alt="logo">
        </router-link>

        <router-link to="#">
          <img :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" alt="logo">
        </router-link>

        <router-link to="#">
          <img class="rounded-full" :src="require(`../assets/user.jpg`)" alt="logo">
        </router-link>
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
      loaderAnim: false,
    };
  },
  methods: {
    deleteSearch() {
      this.rechercherIsActive = '';
      this.searchFocused = false;
      return (this.searchFocused, this.rechercherIsActive);
    },
    loaderAnimation() {
      this.loaderAnim = true;
      setTimeout(() => {
        this.loaderAnim = false;
        return this.loaderAnim;
      }, 500);
      return this.loaderAnim;
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
    color: #fafafa00;
  }
  .search-span{
    position: absolute;
    width: 215px;
    height: 28px;
  }
  .search-span span{
    z-index: 14;
    font-weight: lighter;
  }
  .img-search {
    transform: rotate(-20deg);
    position: absolute;
    margin-top: 1px;
    visibility: block;
    margin-top: 9px;
    margin-left: 57px;
  }
  .searchImgActive{
    visibility: hidden;
  }
  .img-cross {
    position: absolute;
    margin-left: 195px;
    width: 13px;
    z-index: 16;
    visibility: hidden;
    cursor: pointer;
    margin-top: 8px;
  }
  .searchImgCrossActive{
    visibility: visible;
  }
  .search-focusOff{
    overflow-x: hidden;
    max-width: 120px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    width: 22px;
    height: 22px;
  }
  .container-nav a{
    cursor: pointer;
  }

  a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .search-loader{
    margin-left: 192px;
    margin-top: 6px;
  }

  .router-link-exact-active{
    
  }

  .searchDesactive{
    margin-left: 75px;
  }
  .searchActive{
    margin-left: 27px;
  }
    
  .search-recent{
    position: relative;
    z-index: 15;
    min-width: 362px;
    min-height: 375px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
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
