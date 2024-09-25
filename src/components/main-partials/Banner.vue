<script>
export default {};
</script>
<template>
  <div class="container-fluid my-5 d-flex justify-content-center">

   
    <div class="card mb-3 rounded-4 my-card" style="max-width: 1400px;">
      <div class="row g-0">
        <div class="col-md-5">
          <img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5feb2c2f49aff.jpeg" style="object-fit: cover !important; height: 100% !important;" class="img-fluid rounded-start-4 " alt="...">
          <!--src="https://www.foodserviceweb.it/wp-content/uploads/sites/4/2020/06/delivery-consegna.jpg" -->
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h2 class="card-title" style="font-size: 40px;">Hai paurosamente fame?? Ordina con Deliveboo!</h2>
            <p class="card-text mt-3 fs-5" style="font-size: 20px;">Hai voglia del tuo piatto preferito, ma senza uscire di casa? Con Deliveboo, puoi ordinare cibo delizioso dai migliori ristoranti locali e riceverlo direttamente a domicilio in modo rapido e conveniente. Ma c'è di più: noi di Deliveboo ci preoccupiamo dell'ambiente! Utilizziamo confezioni eco-friendly e promuoviamo l'uso di mezzi di trasporto a basso impatto ambientale, come biciclette elettriche e veicoli ibridi. Ogni ordine con Deliveboo non solo soddisfa il tuo palato, ma contribuisce anche a un futuro più verde. Scegli Deliveboo per un'esperienza di consegna che fa bene a te e al pianeta!</p>
            <p class="card-text"><small class="text-body-secondary fs-6">Deliveboo pensa all'ambiente</small> <i class="fa-solid fa-leaf" style="color: green;"></i> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  <div class="container-fluid d-flex justify-content-center">
    <div class="card text-bg-dark my-card bs-dark" style="border-radius: 0!important;" >
      <img src="https://image-tc.galaxy.tf/wijpeg-1lcrqdyl91lsdkomcnet6276l/magazine-detail-page-it_og-image.jpg" class="card-img" style="border-radius: 0!important;" alt="...">
      <div class="card-img-overlay bg-black opacity-50 d-flex align-content-center flex-column flex-wrap" style="border-radius: 0!important;">
        <h2 class="card-title text-center">Facciamo consegne su tutta Roma!</h2>
        <p class="card-text text-center" style="max-width: 1000px">Le consegne a domicilio su Roma con Deliveboo ti aprono le porte a un'ampia varietà di ristoranti locali, dalle rinomate catene in franchising alle accoglienti trattorie di quartiere. Puoi ordinare cibo a domicilio a Roma in qualsiasi momento della giornata, dall'alba al tramonto, garantendo sempre freschezza e qualità direttamente sulla tua tavola.</p>
        <!-- <p class="card-text"><small>Last updated 3 mins ago</small></p> -->
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$btn-bg-color: #16181e;
$btn-text-color: #e88735;
$banner-bg-color: #e88735;
$banner-text-color: #16181e;

.card-body {
  color: #16181e;
 }

.my-card {
  border: none !important;
}

.card-img-overlay p {
  font-size: 2rem;
  margin-top: 60px;
}

@media (max-width: 1200px) {
    .card-img-overlay p { 
        font-size: 1.8rem;
        margin-top: 60px;
    }
    .card-img-overlay h2 {
        font-size: 2rem;
    }
}

@media (max-width: 992px) {
    .card-img-overlay p { 
        font-size: 1.1rem;
        margin-top: 60px;
    }
    .card-img-overlay h2 {
        font-size: 1.7rem;
    }
}

@media (max-width: 768px) {
    .rounded-start-4 {
        border-bottom-left-radius: 0 !important;
        border-top-right-radius: 3% !important;
    } 
    .card-img-overlay p {
        font-size: 1rem;
        margin-top: 40px;
    }
    .card-img-overlay h2 {
        font-size: 1.4rem;
    }
}

@media (max-width: 576px) {
    .card-img-overlay p { 
        font-size: 0.9rem;
        margin-top: 20px;
    }
    .card-img-overlay h2 {
        font-size: 1.1rem;
    }
}


</style>
