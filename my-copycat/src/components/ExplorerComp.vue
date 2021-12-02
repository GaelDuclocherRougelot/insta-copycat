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

        <!-- <div class="div_small_images">
          <div v-for="(img, index) in 6" :key="index" class="small_imgs left_small">
            <img src="" alt="">
          </div>
        </div>

        <div class="div_large_left">
          <div class="div_large_right_smalls_imgs">
            <div class="small_imgs right_small">
              <img src="" alt="">
            </div>
            <div class="small_imgs right_small">
              <img src="" alt="">
            </div>
          </div>
          <div class="large_imgs left_large">
            <img src="" alt="">
          </div>
        </div>

        <div class="div_small_images">
          <div v-for="(img, index) in 6" :key="index" class="small_imgs left_small">
            <img src="" alt="">
          </div>
        </div>

        <div class="div_large_right">
          <div class="div_large_right_smalls_imgs">
            <div class="small_imgs left_small">
              <img src="" alt="">
            </div>
            <div class="small_imgs left_small">
              <img src="" alt="">
            </div>
          </div>
          <div class="large_imgs right_large">
            <img src="" alt="">
          </div>
        </div>

        <div class="div_small_images">
          <div v-for="(img, index) in 6" :key="index" class="small_imgs left_small">
            <img src="" alt="">
          </div>
        </div> -->
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
  height: 4000px;
  display: flex;
  justify-content: center;
  position: absolute;
}
.content-container {
  max-width: 975px;
  width: 100%;
  margin-top: 85px;
  display: flex;
  flex-direction: column;
}

/* IMAGE CONTAINERS*/
.div_large_right {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
  width: 100%;
  max-height: 641.98px;
  max-width: 963px;
  height: 100%;
  margin-bottom: 28px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
  background: #000;
}
.div2 {
  grid-area: 3 / 1 / 5 / 2;
  background: #000;
}
.div3 {
  grid-area: 1 / 2 / 5 / 4;
  background: #000;
}

.div_large_left {
  width: 100%;
  max-height: 641.98px;
  max-width: 963px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
}
.div_large_right_smalls_imgs {
  max-width: 292.98px;
  width: 100%;
}
.div_small_images {
  width: 100%;
  max-height: 641.98px;
  max-width: 963px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

/* IMAGE PROPERTIES */
/* Base properties */
.small_imgs {
  max-width: 292.98px;
  max-height: 292.98px;
  height: 100%;
  width: 100%;
  background: rgb(189, 187, 187);
}
.large_imgs {
  max-width: 613.98px;
  max-height: 613.98px;
  height: 100%;
  width: 100%;
  background: rgb(189, 187, 187);
}
/* Modif large img left or Right */
.left_small {
  margin: 0 28px 28px 0;
}
.right_small {
  margin: 0 0 28px 28px;
}
.left_large {
  margin-right: 0px;
}
.right_large {
  margin-left: 28px;
}
</style>
