<script>
export default {};
</script>
<template>
  <div class="filter-container filter mx-5">
    <nav>
      <ul>
        <li class="my-3">Antipasti</li>
        <li class="my-3">Primi</li>
        <li class="my-3">Secondi</li>
        <li class="my-3">Dolci</li>
        <li class="my-3">Stuzzicherie</li>
        <li class="my-3">Bevande</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$filter-card-bg-color: #ececec;
$filter-card-text-color: #b2adbe;

.filter {
  background-color: $filter-card-bg-color;
  color: $filter-card-text-color;

  padding: 20px;
  margin: 10px;
  border-radius: 15px;

  li {
    list-style: none;
    cursor: pointer;
  }
}

.filter-container {
  width: 60%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
