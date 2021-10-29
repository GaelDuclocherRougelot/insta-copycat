<template>
  <div class="main-container flex w-full h-screen">
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

      <div class="publications">
        
      </div>
    </div>

    <div class="container-foryou">
      <div class="flex flex-col mt-14 ml-5">
        <div class="change-profile flex w-96 items-center">
          <img class="rounded-full w-14 cursor-pointer" src="../assets/user.jpg" alt="My picture">
          <div class="me flex flex-col ml-4 w-40">
            <p class="font-semibold text-sm text-gray-800 cursor-pointer">duclocherrougelot</p>
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
            <p class="font-semibold text-sm text-gray-800 cursor-pointer hover:underline">duclocherrougelot</p>
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
          username: 'Gael',
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
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FAFAFA;
    
  }
  ::-webkit-scrollbar{
    /* width: 0px;
    background: transparent; */
  }
  /* FOR-YOU */
  .container-foryou {
    width: 42%;
    height: 100vh;
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
    position: absolute;
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
