<script>
import Bento from "./Main-partials/Bento.vue";
import Most from "./Main-partials/Most.vue";
import Counter from "./Main-partials/Counter.vue";
import Banner from "./Main-partials/Banner.vue";
import Review from "./Main-partials/Review.vue";
import Partner from "./Main-partials/Partner.vue";
import PoweredBy from "./partials/PoweredBy.vue";
import { store } from "../data/store";

export default {
  components: {
    Bento,
    Most,
    Counter,
    Partner,
    Banner,
    Review,
    PoweredBy,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template >

    <Banner />
    <Bento />
    <Partner />
    <!-- <Most /> -->
    <!-- <Counter /> -->
    <Review />
 

</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
