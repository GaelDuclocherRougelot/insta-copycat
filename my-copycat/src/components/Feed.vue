<template>
  <div class="main-container flex w-full h-screen">
    <div class="container-feed flex flex-col">
      <div class="container-storys bg-white border border-border-primary mt-8">
        <div class="storys">
          <div class="story">
            <div class="story-img">
              <img src="" alt="Circle">
              <img src="" alt="Profile picture">
            </div>
            <span>pseudo</span>
        </div>
        </div>
      </div>

      <div class="publications">
        
      </div>
    </div>

    <div class="container-foryou">
      <div class="foryou flex">
        <img src="" alt="My picture">
        <div class="pseudo flex flex-col">
          <p>duclocherrougelot</p>
          <span>Mon Pseudo insta</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feed',

};
</script>
<style scoped>
  .main-container {
    background-color: #FAFAFA;
  }
  .container-feed {
    margin-top: 54px;
    width: 58%;
    height: 2000px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #FAFAFA;
    
  }
  .container-foryou {
    width: 42%;
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: #FAFAFA;
  }
  ::-webkit-scrollbar{
    width: 0px;
    background: transparent;
  }
  .container-storys{
    width: 614px;
    height: 118px;
    display: flex;
    margin-left: 480px;
  }
  .container-foryou{
    margin-top: 54px;
  }
</style>
