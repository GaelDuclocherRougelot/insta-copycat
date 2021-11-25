<template>
  <div class="main-container flex w-full h-full">
    <div class="container-feed flex flex-col items-end">

      <div class="container-storys bg-white border border-border-primary mt-8 rounded-sm">
        <button v-if="scrollStorys" @click="scrollStorys = false" class="text-gray-700 rotate absolute left-0 z-10 font-semibold text-2xl rounded-full mt-3"><span>></span></button>
        <button v-show="scrollStorys == false" @click="scrollStorys = true" class="text-gray-700 absolute rounded-full right-0 z-10 font-semibold text-2xl"><span>></span></button>
        <div class="storys flex" :class="{storysScroll:scrollStorys}">
          <div @click="story.animation = true" v-for="(story, index) in storys" :key="index" 
          class="story flex flex-col items-center cursor-pointer m-2">
            <div class="story-imgs flex flex-col items-center justify-center">
              <img class="rounded-full border border-border-primary" src="../assets/user.jpg" alt="Profile picture">
              <svg :class="{svgAnim : story.animation }" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="linear" x1="0%" y1="30%" x2="30%" y2="0%">
                    <stop offset="0%" stop-color="#FAAE6C"/>
                    <stop offset="100%" stop-color="#D358A5"/>
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
        <div v-for="(publi, index) in publications" :key="index" class="publication border border-border-primary rounded-sm flex flex-col mt-6">
          <div class="title flex items-center justify-between">
            <div class="profilePicture flex items-center text-sm">
              <img class="rounded-full border border-border-primary w-9 ml-3 cursor-pointer"  
              src="../assets/user.jpg" alt="Profile picture">
              <p class="ml-3 text-sm font-semibold text-gray-700 hover:underline">{{publi.username}}</p>
            </div>
            <img class="mr-5 cursor-pointer" src="../assets/svg/insta/svgexport-1.svg" alt="dots">
          </div>
          <div @dblclick="publi.liked = !publi.liked, publi.liked2 = !publi.liked2, publi.liked ? publi.likes++ : publi.likes--" class="media flex justify-center items-center">
            <img class="userPublication" :src="require(`../assets/${publi.source}.jpg`)" alt="image">
            <img v-if="publi.liked2" :class="{likeAnimation2 : publi.liked2}" class="opacity-0 absolute w-28 blur-lg" src="../assets/heart.png" alt="heart">
          </div>
          <div class="publication-buttons flex justify-between">
            <div class="like-com-fav flex w-full">
              <div @click="publi.liked = !publi.liked, publi.liked ? publi.likes++ : publi.likes--" class="flex justify-center">
                <img v-if="publi.liked == false" class="btns" src="../assets/svg/insta/svgexport-3.svg" alt="logo">
                <img v-else :class="{likeAnimation : publi.liked}" src="../assets/svg/insta/svgexport-25.svg" alt="logo">
              </div>
              <img class="w-6 btns" src="../assets/svg/insta/svgexport-5.svg" alt="logo">
              <img class="w-6 btns" src="../assets/svg/insta/svgexport-7.svg" alt="logo">
            </div>
            <div @click="publi.fav = !publi.fav" class="mr-3 mt-3">
              <img v-if="publi.fav" class="mr-3 cursor-pointer w-6" src="../assets/svg/insta/svgexport-32.svg" alt="logo">
              <img v-else class="btns mr-3 cursor-pointer w-6 " src="../assets/svg/insta/svgexport-9.svg" alt="logo">
            </div>

          </div>
          <span class="ml-3 text-sm font-semibold text-gray-800 cursor-pointer">{{publi.likes}} J'aime</span>
          
          <div class="publi-desc mt-2">
            <span class="ml-3 text-sm font-semibold text-gray-800 hover:underline cursor-pointer">{{publi.username}}</span>
            <p class="ml-2 text-sm">{{publi.title}}</p>
          </div>

          <p v-if="publi.comments !== ''" class="bg-white ml-3 mt-1 text-sm text-gray-500 cursor-pointer">Afficher les {{publi.comments}} commentaires</p>
          <div class="comments flex items-center justify-between">
            <div class="flex items-center">
              <p class="ml-3 mr-2 mt-1 font-semibold text-sm text-gray-800 cursor-pointer hover:underline">user154651</p>
              <span class='text-sm mt-1'>Enjoy your vacation !</span>
            </div>
            <div @click="publi.commentLiked = !publi.commentLiked">
              <img v-if="publi.commentLiked == false" class="w-3 mr-3 cursor-pointer btns" src="../assets/svg/insta/svgexport-3.svg" alt="logo">
              <img v-else :class="{likeAnimation : publi.commentLiked}" class="w-3 cursor-pointer mr-3" src="../assets/svg/insta/svgexport-25.svg" alt="logo">
            </div>
          </div>
          <span class="time text-gray-400 my-2 ml-3">IL Y A {{publi.time}} HEURES</span>

          <div class="add-comment flex py-4 border-t mt-2">
            <img class="ml-3" src="../assets/svg/insta/svgexport-12.svg" alt="">
            <input class="ml-3 w-full text-sm" type="text" v-model="publi.comment" placeholder="Ajouter un commentaire...">
            <span :class="{publishComment : publi.comment !== ''}" class="px-5 text-sm text-blue-200 font-semibold cursor-default">Publier</span>
          </div>
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

        <div v-for="(user, index) in this.usersForyou" :key="index" class="users-foryou flex w-96 h-8 items-center mt-5">
          <img class="rounded-full w-9 cursor-pointer" src="../assets/user.jpg" alt="My picture">
          <div class="me flex flex-col ml-4 w-44">
            <p class="font-semibold text-sm text-gray-700 cursor-pointer hover:underline">{{user.username}}</p>
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
      scrollStorys: false,
      usersForyou: [
        {
          username: 'ravenclawpilchard',
        },
        {
          username: 'rontulip',
        },
        {
          username: 'morganabasalt',
        },
        {
          username: 'krumtinkle',
        },
        {
          username: 'aurordisastrous',
        },
      ],
      storys: [
        {
          username: 'aurordisastrous',
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
        {
          username: 'User',
          img: 'user',
          storyId: 1,
          animation: false,
        }, 
        {
          username: 'User',
          img: 'user',
          storyId: 1,
          animation: false,
        }, 
        {
          username: 'User',
          img: 'user',
          storyId: 1,
          animation: false,
        }, 
        {
          username: 'User',
          img: 'user',
          storyId: 1,
          animation: false,
        }, 
        {
          username: 'User',
          img: 'user',
          storyId: 1,
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
          username: 'krumtinkle',
          likes: 353,
          title: 'This trip was insane !',
          comments: '8',
          time: '3',
          liked: false,
          liked2: false,
          comment: '',
          commentLiked: false,
          fav: false,
          source: 'montagne',
        },
        {
          username: 'ravenclawpilchard',
          likes: 54,
          title: 'Costa-rica ❤',
          comments: '5',
          time: '6',
          liked: false,
          liked2: false,
          comment: '',
          commentLiked: false,
          fav: false,
          source: 'costa-rica',
        },
        {
          username: 'rontulip',
          likes: 242,
          title: 'Amazing ! 😍',
          comments: '10',
          time: '12',
          liked: false,
          liked2: false,
          comment: '',
          commentLiked: false,
          fav: false,
          source: 'sea',
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
    max-width: 100%;
  }
  .publications {
    /* max-width: 614px; */
    height: 100%;
    max-width: 100%;
  }
  .publication {
    max-height: 1777.5px;
    background-color: #fff;
    max-width: 100%;
  }
  .title {
    min-height: 60px;
    width: 614px;
    max-width: 100%;
    background: #fff;
  }

  .publi-desc{
    white-space: nowrap;
    overflow: hidden;
    padding-bottom: 10px;
    text-overflow: ellipsis;
    display: flex;
  }

  .media {
    max-height: 767px;
    max-width: 614px;
    height: 100%;
    width: 100%;
  }
  .media .userPublication {
    max-height: 767px;
    max-width: 614px;
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

  .btns:hover{
filter: sepia(100%) brightness(200%) saturate(0%) contrast(106%) invert(6%);
-webkit-filter: sepia(100%) brightness(200%) saturate(0%) contrast(106%) invert(6%);
-moz-filter: sepia(100%) brightness(200%) saturate(0%) contrast(106%) invert(6%);
  }

  .time{
    font-size: 10px;
  }

  .likeAnimation{
    animation: like 0.3s 1;
  }
  .likeAnimation2{
    animation: like2 0.8s 1;
  }

  @keyframes like {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(0.95);
    }
  }
    @keyframes like2 {
    0%{
      transform: scale(0.5);
      opacity: 0;
    }
    50%{
      transform: scale(1.2);
      opacity: 0.9;
    }
    60%{
      transform: scale(1.2);
      opacity: 0.9;
    }
    100%{
      transform: scale(0.5);
      opacity: 0;
    }
  }

  .add-comment input:focus {
    outline: #fff;
  }
  .publishComment{
    color: #0099ff;
    cursor: pointer;
  }

  @media  (max-width: 1100px) {
    .container-foryou{
      display: none;
    }
    .main-container{
      justify-content: center;
      align-items: center;
    }
    .container-storys{
      margin-top: 60px;
    }
    .container-feed{
      width: auto;
    }
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
    min-height: 118px;
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100%;
    overflow: hidden;
  }
  .container-storys .rotate{
    transform: rotate(180deg)
  }
  .story{
    width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    display: block;

  }
  .storys{
    transition: all 0.5s ease;
  }
  .storysScroll{
    transform: translateX(-80px);
    transition: all 0.5s ease;
  }
  .story-imgs {
  width:70px;
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

  @media (max-width: 630px){
    .container-storys{
      margin-top: 0;
    }
    .publication{
      border-right: none;
      border-left: none;
    }
  }
</style>
