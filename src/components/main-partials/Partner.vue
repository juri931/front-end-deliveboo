<script>
export default {};
</script>
<template>
  <div class="container-xxl my-5">
    <div class="card mb-3">
      <div class="my-card-img">
        <img src="/img/home/partner.png" alt="partner.png" />
      </div>
      <div class="my-card-body m-3">
        <h2 class="card-title">
          Diventa un nostro Partner e scopri i vantaggi!
        </h2>
        <div class="card-text">
          <p>
            Scegliere Deliveboo significa ottenere
            <strong>maggiore visibilità</strong> per il tuo ristorante. Grazie
            alla nostra vasta rete di utenti, il tuo locale sarà visibile a
            migliaia di potenziali clienti ogni giorno, aumentando la tua
            presenza online. Offrendo ai tuoi clienti la comodità della consegna
            a domicilio, potrai incrementare le tue vendite in modo
            significativo. Con Deliveboo, gestire gli ordini diventa semplice e
            veloce, senza complicazioni.
          </p>

          <p>
            La nostra piattaforma è
            <strong>intuitiva e facile da usare</strong>. Potrai monitorare gli
            ordini in tempo reale, gestire il tuo menù e aggiornare le
            disponibilità in pochi clic. Inoltre, abbiamo un sistema di
            stitastiche aggiornato in tempo reale per monitorare constantemente
            l'andamento dei tuoi guadagni.
          </p>

          <a href="http://127.0.0.1:8000/register" class="btn my-btn"
            >Registrati</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.card {
  border: none !important;
  border-radius: 20px;
  .my-card-img {
    height: 400px;
    width: 100% !important;
    overflow: hidden;

    img {
      height: 100%;
      width: 100% !important;
      object-fit: cover;
      object-position: left;
      border-radius: 20px 20px 0 0;
    }
  }

  .my-card-body {
    background-color: #fff !important;

    .my-btn {
      background-color: #e88735 !important;
      color: #fff !important;
      &:hover {
        border-color: #e88735 !important;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

@media (max-width: 1200px) {
  .card-img p {
    font-size: 1.8rem;
    margin-top: 60px;
  }
  .card-img h2 {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .card-img p {
    font-size: 1.1rem;
    margin-top: 60px;
  }
  .card-img h2 {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {
  .rounded-start-4 {
    border-bottom-left-radius: 0 !important;
    border-top-right-radius: 3% !important;
  }
  .card-img p {
    font-size: 1rem;
    margin-top: 40px;
  }
  .card-img h2 {
    font-size: 1.4rem;
  }
}

@media (max-width: 576px) {
  .card-img p {
    font-size: 0.9rem;
    margin-top: 20px;
  }
  .card-img h2 {
    font-size: 1.1rem;
  }
}
</style>
