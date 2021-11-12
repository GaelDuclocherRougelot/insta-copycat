<template>
  <div class="container overflow-hidden">
    <div class="top top-0 relative flex w-full justify-between border-b">
      <div class="username-status flex items-center ml-5">
        <img class="w-7 h-7 rounded-full" src="../assets/user.jpg" alt="">
        <div class="ml-3 text-sm">
          <p class="font-semibold">pseudoo5461</p>
          <p class="text-gray-400">En ligne il y a 12min</p>
        </div>

      </div>
      <img class="w-6 mr-5" src="../assets/svg\insta/svgexport-33.svg" alt="info icon">
    </div>
        <div class="conversation overflow-y-scroll">

        </div>
        <div class="input-container h-20 w-full">

        </div>
  </div>
</template>
<script>
export default {
  name: 'Conversation',
};
</script>
<style scoped>
.container {
  height: 881px;
}
  .top {
    max-width: 583px;
    height: 60px;
  }
  .conversation {
    width: 583px;
    
  }
</style>
