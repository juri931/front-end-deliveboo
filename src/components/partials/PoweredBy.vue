<script></script>

<template>
  <div class="tech-slideshow">
    <div class="mover-1">
      Powered By: Benedetto &centerdot; Elena &centerdot; Enrico &centerdot; Eugenio
      &centerdot; Juri &centerdot; Mirco
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.tech-slideshow {
  height: 1.5rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  background-color: #1a1a1a;
  color: #666;
}

.tech-slideshow > div {
  width: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.tech-slideshow .mover-1 {
  animation: moveSlideshow 15s linear infinite;
}

@keyframes moveSlideshow {
  100% {
    transform: translateX(-140%);
  }
}
</style>
