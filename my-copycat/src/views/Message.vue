<template>
  <div class="main-container w-full h-screen flex justify-center items-center">
    <Header class="absolute top-0"/>
    <div class="container-content relative mt-10 border border-border-primary rounded-md">
      <div class="left border-r border-border-primary flex flex-col items-center">
        <div class="myUsername flex w-full justify-center items-center border-b">
          <h2 class="font-semibold">monpseudo</h2>
        </div>
        <div class="principal-general flex border-b border-primary w-full items-center">
          <div class="w-32 border-b border-black">
            <h2 class="ml-8 pb-3 mt-3 cursor-pointer">PRINCIPAL</h2>
          </div>
          <div class="w-32">
            <h2 class="ml-8 pb-3 mt-3 text-gray-300 cursor-pointer">GÉNÉRAL</h2>
          </div>
        </div>
        <div class="usersList flex flex-col w-full">
          <div class="user mt-4 w-full flex items-center hover:bg-gray-50 cursor-pointer">
            <img class="rounded-full w-14 ml-3" src="../assets/user.jpg" alt="profile picture">
            <div class="username-time flex flex-col">
              <p class="text-sm font-light ml-3">pseudoo5461</p>
              <p class="text-sm font-light ml-3 text-gray-400">En ligne il y a 12min</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';

export default {
  name: 'Message',
  components: {
    Header,
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
    width: 350px;
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
</style>
