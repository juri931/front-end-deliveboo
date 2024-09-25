<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, FreeMode],
    };
  },
};
</script>

<template>
  <div class="container-fluid h-100">
    <h1 class="text-center">Dicono di noi</h1>
  <div class="mySlider">
  
        <swiper
          :breakpoints="{
            '0': {
              slidesPerView:1,
            },
            '550': {
              slidesPerView:2,
            },
            '820': {
              slidesPerView: 3,
            },
            '1150': {
              slidesPerView: 4,
            },
            '1400': {
              slidesPerView: 5,
            }
          }"
        
          :modules="modules"
          class="mySwiper"
          loop="true"
          :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
          speed="4000"
          freeMode="true"
          freeModeMomentum="false"
        >
          <swiper-slide>
            <div class="review-card position-relative" style="margin-left: 5%;">
              <h6>Fantastico servizio!</h6>
              <p>"Deliveboo è un servizio eccellente! Le consegne sono sempre puntuali e il personale è molto gentile. La varietà di ristoranti disponibili è incredibile"</p>
              <div class=" d-flex">
                <h6 class="card-subtitle mb-2 text-body-secondary position-absolute my-name">Alice</h6>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Veloce e affidabile</h6>
              <p>"Uso Deliveboo da qualche mese e non ho mai avuto problemi. Le consegne sono velocissime e gli ordini arrivano sempre caldi e ben confezionati.Consigliatissimo!"</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Luca</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Ottima esperienza</h6>
              <p>"Ho ordinato con Deliveboo diverse volte e ogni volta è stata un'ottima esperienza."</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Mario</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Cibo delizioso a portata di mano</h6>
              <p>"Grazie a Deliveboo posso gustare i miei piatti preferiti senza dover uscire di casa. La scelta è ampia e la qualità del cibo è sempre eccellente."</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Rosa</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Super consigliata</h6>
              <p>"Se vivi a Roma, devi assolutamente provare Deliveboo. Un vero salvavita per chi, come me, ha poco tempo per cucinare."</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Lara</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Varietà e qualità</h6>
              <p>"La cosa che più apprezzo di Deliveboo è la vasta scelta di ristoranti e cucine disponibili. Ogni volta posso provare qualcosa di nuovo e non sono mai rimasto deluso."</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Marta</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Perfetto per ogni occasione</h6>
              <p>"Che sia per una cena romantica, un pranzo veloce o una serata tra amici, Deliveboo è sempre la scelta giusta. Il cibo è ottimo."</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Paolo</h6>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card position-relative">
              <h6>Il meglio a domicilio</h6>
              <p>"Non ho mai avuto un'esperienza negativa con Deliveboo. Il cibo arriva sempre caldo e ben confezionato. "</p>
              <h6 class="card-subtitle mb-2 text-body-secondary text-end position-absolute my-name">Franca</h6>
            </div>
          </swiper-slide>

        </swiper>

    </div> 
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;




.mySlider {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 70px;
  
  .review-card {
    margin: 0 auto;
    width: 250px;
    height: 250px;
    background-color: white;
    color: black;
    padding: 30px 20px;
    border-radius: 20px;
    border: 3px solid rgb(232, 135, 53);

    .my-name {
      bottom: 5px;
      right: 20px;
    };

    p {
      font-size: 0.8rem;
      height: 145px;
      max-height: 145px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}
</style>

