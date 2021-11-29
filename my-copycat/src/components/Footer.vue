<template>
  <div class="footer flex bg-white">
    <div class="container flex justify-center items-center px-5 w-full">
      <div class="container-search flex items-center ml-10">
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
  <div v-if="profileIco" @click="profileIco = false" class="invisibleDiv"></div>

  <div v-if="addContentIco" @click="addContentIco = false" class="modalDiv">
    <svg aria-label="Fermer" class="_8-yf5 absolute top-4 right-4 cursor-pointer" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
    <div class="modalDiv-content flex flex-col">
      <h2 class="text-center py-2 font-semibold border-b">Créer une nouvelle publication</h2>
      <div class="modaldiv-dropzone w-full h-full flex flex-col items-center justify-center">
        <img src="../assets/svg\insta/svgexport-27.svg" alt="">
        <h2 class="py-4 font-thin text-gray-900">Faites glisser les photos et les vidéos ici</h2>
        <button class="font-semibold px-3 py-1">Sélectionner sur l'ordinateur</button>
      </div>
    </div>
  </div>
      </div>

      <div class="container-nav flex justify-around items-center">
        <router-link to="/">
          <img v-if="$route.name == 'Home' && notificationIco == false && addContentIco == false && profileIco == false" :src="require(`../assets/svg/insta/svgexport-${15}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${20}.svg`)" alt="logo">
        </router-link>
        
        <router-link to="explorer">
          <img v-if="$route.name == 'Explorer' && notificationIco == false && addContentIco == false && profileIco == false" :src="require(`../assets/svg/insta/footer-search-bold.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/footer-search.svg`)" alt="logo">
        </router-link>

        <div class="cursor-pointer" @click="addContentIco = !addContentIco">
          <img v-if="addContentIco == false" :src="require(`../assets/svg/insta/svgexport-${24}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${26}.svg`)" alt="logo">
        </div>

        <div @click="notificationIco = !notificationIco, loaderAnimation()" class="cursor-pointer">
          <img v-if="notificationIco == false" :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" alt="logo">
          <img v-else :src="require(`../assets/svg/insta/svgexport-${22}.svg`)" alt="logo">
        </div>

        <div @click="profileIco = !profileIco" class="cursor-pointer">
          <svg v-if="profileIco" class="w-20 absolute top-0 -right-10" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="test" x1="0%" y1="50%" x2="50%" y2="0%">
                    <stop offset="0%" stop-color="#000"/>
                    <stop offset="100%" stop-color="#000"/>
                  </linearGradient>
                </defs>
                <circle cx="29" cy="21" r="14" fill="none" stroke="url(#test)"/>
              </svg>
          <img class="rounded-full" :src="require(`../assets/user.jpg`)" alt="logo">
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      rechercherIsActive: '',
      searchFocused: false,
      loaderAnim: false,
      notificationIco: false,
      addContentIco: false,
      profileIco: false,
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

  .footer{
    height: 45px;
    width: 100%;
    position: fixed;
    z-index: 20;
    bottom: -1px;
    display: none;
    border-top: 1px solid rgb(226, 225, 225);
  }
  .container{
    max-width: 975px;
    min-width: auto;
  }
  .container-img{
    height: 50px;
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
    width: 100%;
    min-width: 222px;
    height: 42px;
    word-spacing: 0px;
    text-decoration: none;
    padding: 0 0 0 24px;
    z-index: 5;
    position: relative;
  }
  .container-nav img {
    width: 25px;
    height: 25px;
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
  .profileTab{
      width: 230px;
      height: 194px;
      box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
      border-radius: 5px;
  }

  .profileTab img {
    width: 15px;
  }
  .profileTab p {
    font-size: 14px;
    color: rgb(49, 49, 49);
    font-weight: 400;
  }
  .triangle3{
    position: absolute;
    background: #fff;
    width: 14px;
    height: 14px;
    top: -5px;
    left: 192px;
    /* box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975); */
    transform: rotate(45deg);
    z-index: 10;
  }

  .modalDiv{
    width: 100%;
    height: 100vh;
    position: absolute;
    right: 0px;
    top: 0;
    z-index: 16;
    background: rgba(0, 0, 0, 0.842);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .modalDiv-content{
    position: relative;
    max-width: 756px;
    max-height: 799px;
    width: 756px;
    height: 799px;
    background: #fff;
    border-radius: 15px;
    z-index: 17;
  }

  @media  (max-width: 1100px){
    .modalDiv-content{
      width: 500px;
      height: 550px;
    }
  }

  @media  (max-width:590px) {
    .container-search{
      display: none;
    }
  }

  .modaldiv-dropzone button{
    background-color: #0095F6;
    color: white;
    border-radius: 5px;
    font-size: 14px;
  }
  .modaldiv-dropzone h2{
    font-size: 22px;
  }

  .photo-icon{
    display: none;
  }

  @media (max-width: 541px){
    .footer{
      display: block;
    }
    .container{
      justify-content: center;
    }
    .container-nav{
      min-width: 50px;
      justify-content: space-between;
      padding: 0;
    }
    .container-img{
      justify-content: center;
      margin-left: 33px;
      margin-right: 30px;
    }
    .header{
      width: 100vw;
    }
    .photo-icon{
      display: block;
    }
  }
</style>
