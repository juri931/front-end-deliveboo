<script>
export default {};
</script>
<template>
  <div class="container-fluid mt-5">
    <h3 class="text-center">I più richiesti</h3>

    <div class="row row-cols-4 my-5">
      <div id="box-1" class="col">Most 1</div>
      <div id="box-2" class="col">Most 2</div>
      <div id="box-3" class="col">Most 3</div>
      <div id="box-4" class="col">Most 4</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

#box-1,
#box-2,
#box-3,
#box-4 {
  color: white;
  aspect-ratio: 1.4;
}
#box-1 {
  background-color: red;
}
#box-2 {
  background-color: blue;
}
#box-3 {
  background-color: violet;
}
#box-4 {
  background-color: green;
}
</style>
