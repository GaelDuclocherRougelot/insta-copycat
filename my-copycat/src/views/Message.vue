<template>
  <div class="main-container w-full h-screen flex justify-center items-center">
    <Header class="absolute top-0"/>
    <div class="container-content flex relative mt-40 border border-border-primary rounded-md">

      <div class="left border-r border-border-primary flex flex-col items-center">
        <div class="myUsername flex w-full justify-between items-center border-b">
          <div class="flex ml-28 cursor-pointer">
          <h2 class="font-semibold">monpseudo</h2>
          <svg aria-label="Icône chevron vers le bas" class="rotateSvg ml-2" color="#262626" fill="#262626" height="20" role="img" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
          </div>
          <svg aria-label="Nouveau message" class="mr-5 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
        </div>

        <div class="principal-general flex border-b border-primary w-full items-center">
          <div @click="principal = true" :class="{principalGeneralActive : principal}" class="w-32 cursor-pointer text-gray-300">
            <h2 class="ml-8 pb-3 mt-3">PRINCIPAL</h2>
          </div>
          <div @click="principal = false" :class="{principalGeneralActive : principal == false}" class="w-32 cursor-pointer text-gray-300">
            <h2 class="ml-8 pb-3 mt-3">GÉNÉRAL</h2>
          </div>
        </div>

        <div v-if="principal" class="usersList-principal flex flex-col w-full">
          <div v-for="(user, index) in this.users" :key="index" class="user mt-4 w-full flex items-center hover:bg-gray-50 cursor-pointer">
            <img class="rounded-full w-14 ml-3" src="../assets/user.jpg" alt="profile picture">
            <span class="" :class="{online : user.isOnline}"></span>
            <div class="username-time flex flex-col">
              <p class="text-sm font-light ml-3">{{user.username}}</p>
              <p v-if="user.isOnline" class="text-sm font-light ml-3 text-gray-400">En ligne</p>
              <p v-else class="text-sm font-light ml-3 text-gray-400">{{user.wasOnline}}</p>
            </div>
          </div>
        </div>
        <div v-else class="usersList-general flex flex-col w-full">
          <div class="user mt-4 w-full flex items-center hover:bg-gray-50 cursor-pointer">
            <img class="rounded-full w-14 ml-3" src="../assets/user.jpg" alt="profile picture">
            <span class="online"></span>
            <div class="username-time flex flex-col">
              <p class="text-sm font-light ml-3">trololo</p>
              <p class="text-sm font-light ml-3 text-gray-400">En ligne</p>
            </div>
          </div>
        </div>
      </div>

      <div  class="right w-full flex justify-center items-center">
        <Conversation v-if="false"/>
        <div v-if="principal" class="principal flex flex-col justify-center items-center">
          <svg class="w-32 absolute h-32" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="test" x1="0%" y1="35%" x2="35%" y2="0%">
                    <stop offset="0%" stop-color="#000"/>
                    <stop offset="100%" stop-color="#000"/>
                  </linearGradient>
                </defs>
                <circle cx="64" cy="75" r="50" fill="none" stroke="url(#test)"/>
              </svg>
        <img class="absolute" src="../assets/svg/insta/svgexport-7.svg" alt="">
        <h1 class="font-light mt-24">Vos messages</h1>
        <p class="text-sm text-gray-400 mt-1">Envoyez des photos et des messages privés à un(e) ami(e) ou à un groupe.</p>
        <button class="font-semibold mt-6">Envoyer un message</button>
        </div>

        <div v-if="principal == false" class="flex flex-col w-full justify-center items-center">
          <svg class="w-32 absolute h-32" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="test" x1="0%" y1="35%" x2="35%" y2="0%">
                    <stop offset="0%" stop-color="#000"/>
                    <stop offset="100%" stop-color="#000"/>
                  </linearGradient>
                </defs>
                <circle cx="64" cy="75" r="50" fill="none" stroke="url(#test)"/>
              </svg>
        <img class="absolute" src="../assets/svg/insta/svgexport-7.svg" alt="">
        <h1 class="font-light mt-32">Vos messages généraux</h1>
        <p class="text-sm text-gray-400 mt-1 text-center px-5">Les notifications sont désactivées pour les messages que vous déplacez ici, mais vous pouvez les réactiver à tout moment.</p>
        <button class="font-semibold mt-6">Ouvrir les paramètres de notification</button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Conversation from '../components/Conversation.vue';

export default {
  name: 'Message',
  components: {
    Header,
    Conversation,
  },
  data() {
    return {
      principal: true,
      users: [
        {
          username: 'Doe248752',
          isOnline: true,
          wasOnline: 'En ligne il y a 5 min',
          picture: '',
        },
        {
          username: 'victor3563',
          isOnline: false,
          wasOnline: 'En ligne il y a 3 min',
          picture: '',
        },
        {
          username: 'mark.zukerberg',
          isOnline: false,
          wasOnline: 'En ligne il y a 4 heures',
          picture: '',
        },
      ],
    };
  },
};
</script>
<style scoped>
  .main-container {
    height: 100.1vh;
  }
  .container-content {
    width: 935px;
    max-width: 935px;
    height: 881px;
    background: white;
  }
  .left{
    min-width: 350px;
    height: 881px;
  }
  .left .myUsername{
    height: 60px;
  }
  .left .principal-general{
    height: 43px;
    font-size: 14px;
    font-weight: 600;
  }
  .left .user {
    height: 72px;
  }
  .left .rotateSvg{
    transform: rotate(-180deg)
  }

  .left .principalGeneralActive {
    border-bottom: 1px solid #000;
    color: black;
    transition: all 0.5s linear;
  }

  .left .online {
    width: 20px;
    height: 20px;
    border: solid 3px white;
    border-radius: 50%;
    background-color: rgb(94, 222, 2);
    position: absolute;
    margin-left: 50px;
    margin-top: 30px;
  }

  .right {
    max-width: 583px;
    height: 879px;
  }

  .right h1 {
    font-size: 22px;
  }

  .right button {
    background-color: #0095F6;
    padding: 5px 9px 6px 9px;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
  }

  .right img {
    top: 355px;
    width: 50px;
  }

  .right svg {
    top: 300px;
  }

  .right .principal {
    max-width: 583px;
  }
  .principal p {
    width: 100%;
    text-align: center;
  } 
</style>
