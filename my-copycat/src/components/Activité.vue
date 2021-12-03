<template>
  <div class="main-container">
    <div class="title">
      <h1>Activité</h1>
    </div>
    <div class="svg">
      <svg class="w-20 mt-4 h-16" viewbox="0 0 100 100">
              <defs>
                  <linearGradient id="test" x1="0%" y1="0%" x2="35%" y2="0%">
                    <stop offset="0%" stop-color="#000"/>
                    <stop offset="100%" stop-color="#000"/>
                  </linearGradient>
              </defs>
            <circle cx="40" cy="32" r="30" fill="none" stroke="url(#test)"/>
      </svg>
      <img :src="require(`../assets/svg/insta/svgexport-${3}.svg`)" class="absolute top-20">
    </div>
    <div class="texts">
      <h2>Activité sur vos publications</h2>
      <p>Lorsque quelqu’un aime ou commente une de vos publications, vous le voyez ici.</p>
      <p class="text-blue-400 font-semibold text-sm">Partager votre première photo</p>
    </div>
    <div class="suggestions">
      <h1 class="ml-3">Suggestion pour vous</h1>
      <div class="profiles mt-3">
        <div v-for="(user, index) in 12" :key="index" class="profile flex w-full">
          <img class="rounded-full w-10 h-10 cursor-pointer mt-3 ml-3" src="../assets/user.jpg" alt="My picture">
          <div class="me flex flex-col ml-4 w-full">
            <p class="font-semibold text-sm text-gray-700 cursor-pointer hover:underline">randomUser</p>
            <span class="text-gray-400 text-xs">Vous suit</span>
          </div>
          <button class="text-xs text-white rounded-md cursor-pointer font-medium mr-5 mt-3 px-2 h-8">S'abonner</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Activité',
};
</script>
<style scoped>
  .main-container{
    width: 100%; height: 100vh;
  }
  .title {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.123);
    background-color: #fafafa;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .svg{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .texts{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px;
  }
  h1{
    font-weight: 500;
    color: rgb(53, 53, 53);
  }
  h2{
    font-size: 23px;
  }
  p{
    margin-top: 15px;
  }
  .suggestions{
    margin-top: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .profiles{
    width: 100%; 
    height: 100%;
  }
  .profile{
    height: 65px;
  }
  button{
    background-color: #0095F6;
  }
  img{
    z-index: 0;
  }
</style>
