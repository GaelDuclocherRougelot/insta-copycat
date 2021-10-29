<template>
<transition name="fade" mode="out-in">
  <router-view/>
</transition>
</template>

<style>
  html {
    background: #FAFAFA;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
    transform: translateX(-30%);
  }
</style>
