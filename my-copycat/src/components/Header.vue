<template>
  <div class="header flex justify-center items-center border-b border-border-primary">
    <div class="container flex justify-between items-center px-5 w-full">
      <div class="container-img flex justify-between items-center">
        <img class="mt-2" src="../assets/logo.png" alt="instagram logo">
      </div>
      <div class="container-search">
        <input type="text" class="border border-border-primary w-full">
      </div>
      <div class="container-nav flex justify-between">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
        <img :src="require(`../assets/svg/insta/svgexport-${svg}.svg`)" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      svg: 20,
    };
  },
};
</script>
<style>
  .header{
    height: 54px;
    width: 100%;
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
    min-width: auto;
  }

  .container-search{
    width: 215px;
  }

  .container-nav{
    width: 222px;
    height: 22px;
    word-spacing: 0px;
    text-decoration: none;
    padding: 0 0 0 24px;
  }
</style>
