<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<template>
  <div class="container-xxl mt-5">
    <!-- <div class="row">
      <div class="col-8 row row-cols-2">
        <div class="col-6 bento box-cube mt-3">Pizza</div>
        <div class="col-6 bento box-cube mt-3">Sushi</div>
        <div class="col-12 bento box-wide mt-3">Hamburger</div>
      </div>
      <div class="col-4">
        <div class="bento box-long mt-3">kebab</div>
      </div>
      <div class="col-12 row mx-1">
        <div class="col-4 bento box-cube mt-3">Indiano</div>
        <div class="col-4 bento box-cube mt-3">Cinese</div>
        <div class="col-4 bento box-cube mt-3">Messicano</div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$box-border-color: #ddd;
$box-bg-color: #f9f9f9;
.row {
  --bs-gutter-x: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.bento {
  border: 1px solid $box-border-color;
  text-align: center;
  // margin: 2px;
}
.box-cube {
  // width: 200px;
  aspect-ratio: 1.2;
}

.box-wide {
  aspect-ratio: 2/0.8;
}

.box-long {
  height: calc(100% - 1rem);
}
</style>
