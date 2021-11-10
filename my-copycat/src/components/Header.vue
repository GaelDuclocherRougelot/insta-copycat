<template>
  <div class="header flex justify-center items-center border-b border-border-primary bg-white">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <router-link to="/">
          <!-- <img class="mt-2" src="../assets/logo2.png" alt="instagram logo"> -->
          <span class="text-xl">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓸𝓸𝓶</span>
        </router-link>
      </div>
      <div class="container-search flex flex-col items-center ml-10">
        <input @click="searchFocused = true, loaderAnimation()" @keydown="loaderAnimation()" v-model="rechercherIsActive" type="text" class="border border-border-primary w-full h-7 rounded-sm">
        <div class="search-span">
          <img :class="{searchImgActive : searchFocused}" class="img-search w-3" src="../assets/svg\insta/search.svg" alt="search icon">
          <span v-if="rechercherIsActive == ''" :class="{searchActive : searchFocused}" class="searchDesactive absolute text-sm mt-1 text-gray-400">Rechercher</span>
          <span v-if="searchFocused == false && rechercherIsActive !== ''" class="search-focusOff absolute text-sm mt-1 ml-20 text-gray-400">{{rechercherIsActive}}</span>
          <img v-if="loaderAnim && searchFocused" class="search-loader w-4 animate-spin absolute" src="../assets/svg\insta/svgexport-14.svg" alt="">
          <img v-if="loaderAnim == false" @click="deleteSearch" :class="{searchImgCrossActive : searchFocused}" class="img-cross w-3 rounded-md" src="../assets/svg\insta/search-cross.svg" alt="cross icon">
          </div>

          <div v-if="searchFocused" class="search-recent flex flex-col items-center bg-white mt-10">
            <span class="triangle"></span>
            <div class="w-full flex justify-start bg-white rounded-t-md pt-4">
            <p v-if="loaderAnim == false" class="ml-4 font-semibold">Récent</p>
            </div>
            <div class="w-full h-full justify-center items-center flex">
              <img v-if="loaderAnim" class="w-5 animate-spin" src="../assets/svg\insta/svgexport-14.svg" alt="">
              <p v-else class="text-sm text-gray-400 font-semibold">Aucune recherche récente.</p>
            </div>
          </div>

  <div v-if="searchFocused" @click="searchFocused = false" class="invisibleDiv"></div>
  <div v-if="notificationIco" @click="notificationIco = false" class="invisibleDiv"></div>
      </div>
      <div class="container-nav flex justify-between items-center">
        <router-link to="/">
          <img v-if="$route.name == 'Home' && notificationIco == false && addContentIco == false" :src="require(`../assets/svg/insta/svgexport-${15}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${20}.svg`)" alt="logo">
        </router-link>
        
        <router-link to="/message">
          <img v-if="$route.name == 'Message' && notificationIco == false && addContentIco == false" :src="require(`../assets/svg/insta/svgexport-${21}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${7}.svg`)" alt="logo">
        </router-link>
        
        <div @click="addContentIco = !addContentIco">
          <img v-if="addContentIco == false" :src="require(`../assets/svg/insta/svgexport-${24}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${26}.svg`)" alt="logo">
        </div>

        <router-link to="explorer">
          <img v-if="$route.name == 'Explorer' && notificationIco == false && addContentIco == false" :src="require(`../assets/svg/insta/svgexport-${23}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${17}.svg`)" alt="logo">
        </router-link>

        <div @click="notificationIco = !notificationIco, loaderAnimation()">
          <img v-if="notificationIco == false" :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${22}.svg`)" alt="logo">

          <div v-if="notificationIco" class="notificationTab flex flex-col items-center bg-white top-19 mt-3 -right-4 absolute">
            <span v-if="loaderAnim == false" class="triangle2"></span>
            <div class="flex flex-col items-center bg-white rounded-t-md z-11 relative">
              <img v-if="loaderAnim" class="w-10 my-10 animate-spin" src="../assets/svg\insta/svgexport-14.svg" alt="">
            <div v-else class="w-full h-full justify-center items-center flex flex-col pb-5">
              <svg class="w-20 mt-4" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="test" x1="0%" y1="35%" x2="35%" y2="0%">
                    <stop offset="0%" stop-color="#000"/>
                    <stop offset="100%" stop-color="#000"/>
                  </linearGradient>
                </defs>
                <circle cx="40" cy="75" r="39" fill="none" stroke="url(#test)"/>
              </svg>
              <img :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" class="absolute top-20">
              <p  class="text-sm -mt-5">Activité sur vos publications</p>
              <p  class="text-sm mt-3 pb-5">Lorsque quelqu’un aime ou commente une de vos publications, vous le voyez ici.</p>
            </div>
            </div>
          </div>
        </div>

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
      notificationIco: false,
      addContentIco: false,
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
  @import url(//db.onlinewebfonts.com/c/6d32b8e06f40fb7698cfb714b9e7975d?family=BillabongW00-Regular);

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

  .notificationTab{
    min-width: 500px;
    max-height: 250px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
    border-radius: 5px;
    z-index: 11;
  }
    .triangle2{
    position: absolute;
    z-index: -1;
    background: #fff;
    width: 14px;
    height: 14px;
    top: -5px;
    left: 422px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
    transform: rotate(45deg);
  }
</style>
