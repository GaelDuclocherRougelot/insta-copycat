<template>
  <div>
    <div class="main-container">
      <div class="content-container">

        <div class="div_large_right">
          <div class="div1">
            <img src="" alt="" />
          </div>
          <div class="div2">
            <img src="" alt="" />
          </div>
          <div class="div3">
            <img src="" alt="" />
          </div>
        </div>

        <div class="div_small_images">
          <div class="div1">
            <img src="" alt="" />
          </div>
          <div class="div2">
            <img src="" alt="" />
          </div>
          <div class="div3">
            <img src="" alt="" />
          </div>
          <div class="div4">
            <img src="" alt="" />
          </div>
          <div class="div5">
            <img src="" alt="" />
          </div>
          <div class="div6">
            <img src="" alt="" />
          </div>
        </div>

        <div class="div_large_left">
          <div class="div1">
            <img src="" alt="" />
          </div>
          <div class="div2">
            <img src="" alt="" />
          </div>
          <div class="div3">
            <img src="" alt="" />
          </div>
        </div>

        <div class="div_small_images">
          <div class="div1">
            <img src="" alt="" />
          </div>
          <div class="div2">
            <img src="" alt="" />
          </div>
          <div class="div3">
            <img src="" alt="" />
          </div>
          <div class="div4">
            <img src="" alt="" />
          </div>
          <div class="div5">
            <img src="" alt="" />
          </div>
          <div class="div6">
            <img src="" alt="" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main-container {
  width: 100vw;
  height: 2500px;
  display: flex;
  justify-content: center;
  position: absolute;
}
.content-container {
  max-width: 975px;
  width: 100%;
  height: 100%;
  margin-top: 82px;
  display: flex;
  flex-direction: column;
}

/* IMAGE PROPERTIES */
.div_large_right {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
  width: 100%;
  height: 100%;
  max-height: 641.98px;
  max-width: 963px;
  margin-bottom: 28px;
}

.div_large_left {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
  width: 100%;
  height: 100%;
  max-height: 641.98px;
  max-width: 963px;
  margin-bottom: 28px;
}

.div_small_images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
  width: 100%;
  height: 100%;
  max-height: 641.98px;
  max-width: 963px;
  margin-bottom: 28px;
}

 /* DIV large at RIGHT */
.div_large_right .div1 {
  grid-area: 1 / 1 / 3 / 2;
  background: rgb(133, 133, 133);
}
.div_large_right .div2 {
  grid-area: 3 / 1 / 5 / 2;
  background: rgb(133, 133, 133);
}
.div_large_right .div3 {
  grid-area: 1 / 2 / 5 / 4;
  background: rgb(133, 133, 133);
}
 /*DIV large at LEFT */
.div_large_left .div1 {
  grid-area: 1 / 1 / 5 / 3;
  background: rgb(133, 133, 133);
}
.div_large_left .div2 {
  grid-area: 3 / 3 / 1 / 4;
  background: rgb(133, 133, 133);
}
.div_large_left .div3 {
  grid-area: 5 / 3 / 3 / 4 ;
  background: rgb(133, 133, 133);
}
  /* 6 cubes */
.div_small_images .div1 {
  grid-area: 1 / 1 / 3 / 2;
  background: rgb(133, 133, 133);
}
.div_small_images .div2 {
  grid-area: 1 / 3 / 3 / 2;
  background: rgb(133, 133, 133);
}
.div_small_images .div3 {
  grid-area: 1 / 3 / 3 / 3;
  background: rgb(133, 133, 133);
}
.div_small_images .div4 {
  grid-area: 3/ 1 / 5 / 2;
  background: rgb(133, 133, 133);
}
.div_small_images .div5 {
  grid-area: 3 / 3 / 5 / 2;
  background: rgb(133, 133, 133);
}
.div_small_images .div6 {
  grid-area: 3 / 3 / 5 / 3;
  background: rgb(133, 133, 133);
}

@media (max-width:768px) {
  .content-container{
    height: 2500px;
    margin-top: 60px;
  }
  .div_large_right{
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  margin-bottom: 2px;
  }
  .div_large_left{
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 2px;
  }
  .div_small_images{
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 2px;
  }
}
@media (max-width:425px) {
  .main-container{
    height: 1100px;
  }
  .content-container{
    height: 1000px;
    margin-top: 50px;
    width: 100%;
  }
  .div_large_right{
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  margin-bottom: 2px;
  }
  .div_large_left{
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 2px;
  }
  .div_small_images{
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 2px;
  }
}
</style>
