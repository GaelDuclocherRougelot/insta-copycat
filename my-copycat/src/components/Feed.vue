<template>
  <div class="main-container flex w-full h-full">
    <div class="container-feed flex flex-col items-end">
      <div class="container-storys bg-white border border-border-primary mt-8">
        <div class="storys flex overflow-hidden">
          <div @click="story.animation = true" v-for="(story, index) in storys" :key="index" 
          class="story flex flex-col items-center cursor-pointer m-2">
            <div class="story-imgs flex flex-col items-center justify-center">
              <img class="rounded-full border border-border-primary" src="../assets/user.jpg" alt="Profile picture">
              <svg :class="{svgAnim : story.animation }" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="linear" x1="0%" y1="30%" x2="30%" y2="0%">
                    <stop offset="0%" stop-color="#FF9100"/>
                    <stop offset="100%" stop-color="#cd476b"/>
                  </linearGradient>
                </defs>
                <circle cx="35" cy="75" r="32" stroke="url(#linear)"/>
              </svg>
            </div>
            <span class="text-xs">{{story.username}}</span>
        </div>
        </div>
      </div>

      <div class="publications flex flex-col">
        <div v-for="(publi, index) in publications" :key="index" class="publication border border-border-primary flex flex-col mt-6">
          <div class="title flex items-center justify-between">
            <div class="profilePicture flex items-center text-sm">
              <img class="rounded-full border border-border-primary w-9 ml-3 cursor-pointer"  
              src="../assets/user.jpg" alt="Profile picture">
              <p class="ml-3 text-sm font-semibold text-gray-700">{{publi.username}}</p>
            </div>
            <img class="mr-5 cursor-pointer" src="../assets/svg/insta/svgexport-1.svg" alt="dots">
          </div>
          <div class="media flex justify-center items-center">
            <img src="../assets/costa-rica.jpg" alt="">
          </div>
          <div class="publication-buttons flex justify-between">
            <div class="like-com-fav flex w-full">
              <img src="../assets/svg/insta/svgexport-3.svg" alt="logo">
              <img src="../assets/svg/insta/svgexport-5.svg" alt="logo">
              <img src="../assets/svg/insta/svgexport-7.svg" alt="logo">
            </div>
            <img class="mr-3 cursor-pointer" src="../assets/svg/insta/svgexport-9.svg" alt="logo">
          </div>
          <span class="ml-3 text-sm font-semibold text-gray-800">{{publi.views}} J'aime</span>
          <div class="publi-title mt-2 flex">
            <span class="ml-3 text-sm font-semibold text-gray-800 hover:underline cursor-pointer">{{publi.username}}</span>
            <p class="ml-3 text-sm">{{publi.title}}</p>
          </div>
          <p v-if="publi.comments !== ''" class="ml-3 mt-1 text-sm text-gray-500 cursor-pointer">Afficher les {{publi.comments}} commentaires</p>
          <div class="comments flex items-center justify-between">
            <div class="flex items-center">
              <p class="ml-3 mr-2 mt-1 font-semibold text-sm text-gray-800 cursor-pointer hover:underline">user154651</p>
              <span class='text-sm mt-1'>Enjoy your vacation !</span>
            </div>
              <img class="w-3 mr-3 cursor-pointer" src="../assets/svg/insta/svgexport-3.svg" alt="logo">
          </div>
          <div class="comments flex items-center justify-between">
            <div class="flex items-center">
              <p class="ml-3 mr-2 mt-1 font-semibold text-sm text-gray-800 cursor-pointer hover:underline">user10651</p>
              <span class='text-sm mt-1'>Wow !</span>
            </div>
              <img class="w-3 mr-3 cursor-pointer" src="../assets/svg/insta/svgexport-3.svg" alt="logo">
          </div>
          <span class="time text-gray-400 my-2 ml-3">IL Y A 6 HEURES</span>
        </div>
      </div>
    </div>

    <div class="container-foryou">
      <div class="flex flex-col mt-14 ml-5">
        <div class="change-profile flex w-96 items-center">
          <img class="rounded-full w-14 cursor-pointer" src="../assets/user.jpg" alt="My picture">
          <div class="me flex flex-col ml-4 w-40">
            <p class="font-semibold text-sm text-gray-700 cursor-pointer">duclocherrougelot</p>
            <span class="text-gray-400">GaelRG</span>
          </div>
          <span class="foryou-blue-span text-xs cursor-pointer font-medium">Basculer</span>
        </div>
        <div class="foryou-title-container flex mt-4">
        <p class="text-gray-400 font-medium text-sm">Suggestion pour vous</p>
        <span class="ml-12 text-xs font-medium cursor-pointer text-gray-700">Voir tout</span>
        </div>

        <div v-for="(user, index) in usersForyou" :key="index" class="users-foryou flex w-96 h-8 items-center mt-5">
          <img class="rounded-full w-9 cursor-pointer" src="../assets/user.jpg" alt="My picture">
          <div class="me flex flex-col ml-4 w-44">
            <p class="font-semibold text-sm text-gray-700 cursor-pointer hover:underline">duclocherrougelot</p>
            <span class="text-gray-400 text-xs">Vous suit</span>
          </div>
          <span class="foryou-blue-span text-xs cursor-pointer font-medium">S'abonner</span>
        </div>
        <nav class="text-xs text-gray-300 mt-8 w-80 h-64">
          <ul class="flex">
            <li>À propos</li>
            <li>Aide</li>
            <li>Presse</li>
            <li>API</li>
            <li>Emplois</li>
            <li>Confidentialité</li>
            <li>Conditions</li>
            <li>Lieux</li>
            <li>Comptes principaux</li>
            <li>Hashtags</li>
            <li>Langue</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feed',
  data() {
    return {
      usersForyou: [
        {},
        {},
        {},
        {},
        {},
      ],
      storys: [
        {
          username: 'duclocherrougelot',
          img: 'user',
          storyId: 0,
          animation: false,
        }, 
        {
          username: 'User',
          img: 'user',
          storyId: 1,
          animation: false,
        }, 
      ],
      publications: [
        {
          username: 'duclocherrougelot',
          views: '1000',
          title: 'Amazing !',
          comments: '8',
        },
        {
          username: 'duclocherrougelot',
          views: '1000',
          title: 'Amazing !',
          comments: '',
        },
        {
          username: 'duclocherrougelot',
          views: '1000',
          title: 'Amazing !',
          comments: '',
        },
      ],
    };
  },

};
</script>
<style scoped>
  .main-container {
    background-color: #FAFAFA;
  }
  /* FEED */
  .container-feed {
    margin-top: 54px;
    width: 58%;
    height: 100%;
    background-color: #FAFAFA;
  }
  .publications {
    min-width: 614px;
    height: 100%;
  }
  .publication {
    max-height: 1777.5px;
  }
  .title {
    min-height: 60px;
    width: 614px;
    min-width: 614px;
    background: #fff;
  }

  .media {
    max-height: 767px;
    max-width: 614px;
    height: 100%;
    width: 100%;
  }

  .like-com-fav {
    min-height: 54px;
    width: 200px;
  }

  .like-com-fav img{
    margin-left: 15px;
    cursor: pointer;
  }

  .time{
    font-size: 10px;
  }

  /* FOR-YOU */
  .container-foryou {
    width: 42%;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0;
    background-color: #FAFAFA;
    margin-top: 54px;
  }
  .foryou-blue-span{
    color: #0099ff;
  }
  .foryou-title-container p {
    width: 184px;
  }
  li{
    list-style-type: disc;
    margin-left: 20px;
    cursor: pointer;
  }
  ul {
    flex-wrap: wrap;
  }
  /* STORYS */  
  .container-storys{
    width: 614px;
    min-width: 614px;
    height: 118px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .story-imgs {
  width:80px;
  height:80px;
  overflow:hidden;
  }
  .story-imgs img{
  width:56px;
}
  .story-imgs svg {
    position: absolute;
    width: 70px;
    fill: none;
    stroke-width: 2px;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }
  @keyframes loading {
    100%{
      stroke-dasharray: 10;
      transform:rotate(200deg);
    }
  }
  .svgAnim{
    animation:loading 3500ms ease-in-out 2 alternate;
  }
</style>
