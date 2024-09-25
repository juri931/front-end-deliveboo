<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      image: null,
      items: [],
      contents: [
        {
          name: "Italiano",
          research: "Italiano",
          description:
            "Piatti autentici italiani: pasta fresca, pizza al forno a legna, antipasti sfiziosi e dolci tradizionali. Un viaggio tra i sapori d'Italia.",
        },
        {
          name: "Poke",
          research: "Poke",
          description:
            "Fresche bowl hawaiane con pesce crudo, riso e verdure fresche. Sano, leggero e personalizzabile per un'esperienza unica.",
        },
        {
          name: "Piadineria",
          research: "Piadineria",
          description:
            "Piadine italiane farcite con ingredienti freschi e genuini. Perfette per pranzi veloci e cene informali.",
        },
        {
          name: "Asiatico",
          research: "Giapponese",
          description:
            "Sapori intensi dall'Asia: sushi, noodles, curry e piatti speziati. Autenticità e freschezza in ogni portata.",
        },
        {
          name: "Messicano",
          research: "Messicano",
          description:
            "Piatti vibranti e saporiti: tacos, burritos, fajitas e nachos. Esplosione di sapori con salse piccanti e guacamole.",
        },
        {
          name: "Fast Food",
          research: "Fast Food",
          description:
            "Hamburger, patatine, hot dog e snack veloci e deliziosi. Perfetto per pasti rapidi e serate rilassanti.",
        },
      ],
      rotate: 0,
      active: 0,
      countItem: 0,
      rotateAdd: 0,
      autoplayInterval: null,
    };
  },

  methods: {
    slider() {
      this.image = document.querySelector(".jumboImg");
      this.items = document.querySelectorAll(".jumboImg .item");
      this.countItem = this.items.length;
      this.rotateAdd = 360 / this.countItem;
    },

    nextSlider() {
      this.active = (this.active + 1) % this.countItem;
      this.rotate += this.rotateAdd;
      this.show();
    },

    prevSlider() {
      this.active = (this.active - 1 + this.countItem) % this.countItem;
      this.rotate -= this.rotateAdd;
      this.show();
    },

    show() {
      this.image.style.setProperty("--rotate", this.rotate + "deg");
      this.contents.forEach((content, key) => {
        // if (key == this.active) {
        //   content.active = true;
        // } else {
        //   content.active = false;
        // }
        content.active = key === this.active;
      });
    },

    tryThis(type) {
      this.store.jumboChoose = type;
      this.$router.push({ name: "advanceResearch" });
    },

    // Autoplay
    startAutoplay() {
      // Cambia slider ogni 3 secondi
      this.autoplayInterval = setInterval(this.prevSlider, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },
    // /Autoplay
  },

  mounted() {
    this.slider();
    this.show();
    this.startAutoplay();
  },

  beforeDestroy() {
    this.stopAutoplay();
  },
};
</script>

<template>
  <!--% Jumbotron -->
  <div class="container-fluid jumbotron">
    <div class="slider">
      <div class="title">DeliveBoo!</div>
      <div
        class="jumboImg"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div class="item" style="--i: 1;">
          <img :src="`/img/jumbotron/fastfood.png`" class="dishImg" />
        </div>
        <div class="item" style="--i: 2;">
          <img :src="`/img/jumbotron/messicano.png`" class="dishImg" />
        </div>
        <div class="item" style="--i: 3;">
          <img :src="`/img/jumbotron/asiatico.png`" class="dishImg" />
        </div>
        <div class="item" style="--i: 4;">
          <img :src="`/img/jumbotron/piadineria.png`" class="dishImg" />
        </div>
        <div class="item" style="--i: 5;">
          <img :src="`/img/jumbotron/poke.png`" class="dishImg" />
        </div>
        <div class="item" style="--i: 6;">
          <img :src="`/img/jumbotron/italiano.png`" class="dishImg" />
        </div>
      </div>
      <div
        class="content"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div
          class="item"
          v-for="(content, index) in contents"
          :key="index"
          :class="{ active: index === active }"
        >
          <h1>{{ content.name }}</h1>
          <div class="des">
            {{ content.description }}
          </div>
          <button @click="tryThis(content.research)">Provalo!</button>
        </div>
      </div>
      <button
        id="prev"
        @click="nextSlider"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        &lt;
      </button>
      <button
        id="next"
        @click="prevSlider"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        &gt;
      </button>
    </div>
  </div>
  <!--% /Jumbotron -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;


.container-fluid.jumbotron {
  margin-top: 0 !important;
}

.slider {
  margin: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #2b2f3a, #0d0e12);
  overflow: hidden;
  &::before {
    position: absolute;
    width: 50%;
    height: 100vh;
    content: "";
    top: 0;
    left: 0;
    background-color: #e88735;
  }
}

.dishImg {
  width: calc(100% / 3) !important;
}
.title {
  position: absolute;
  top: 10%;
  right: 60%;
  text-align: right;
  color: #fff;
  font-size: 10vw;
  width: 40%;
  font-family: "Pacifico", cursive;
  text-shadow: 3px 5px 0px #478860;
  line-height: 0.9em;
  transform: rotate(-5deg);
}
.jumboImg {
  position: absolute;
  bottom: 0%;
  left: 50%;
  --rotate: 0deg;
  transform: translate(-50%, 50%) rotate(var(--rotate));
  width: 1300px;
  height: 1300px;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  outline: 1px dashed #fff5;
  outline-offset: -100px;
  & .item {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    rotate: calc(60deg * var(--i));
    & img {
      height: 420px;
    }
  }
}

.content {
  color: #fff;
  position: absolute;
  top: 10%;
  left: 60%;
  text-align: left;
  width: 30vw;
  // font-size: 1.5vw;
  font-weight: 600;
  & h1 {
    color: #e88735;
    font-size: 3vw;
    font-weight: 800;
  }
  & button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #e88735;
    color: #fff;
    border: none;
    float: right;
  }
  & .item {
    display: none;
  }
  & .item.active {
    display: block;
  }
}
@keyframes showContent {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
  }
}
.content .item.active h1 {
  opacity: 0;
  animation: showContent 0.5s ease-in-out 1 forwards;
}
.content .item.active .des {
  opacity: 0;
  animation: showContent 0.5s 0.3s ease-in-out 1 forwards;
}
.content .item.active button {
  opacity: 0;
  animation: showContent 0.5s 0.6s ease-in-out 1 forwards;
}

#prev,
#next {
  position: absolute;
  border: none;
  bottom: 10%;
  left: 250px;
  font-size: 100px;
  font-family: cursive;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  opacity: 0.4;
}
#next {
  left: unset;
  right: 250px;
}
#next:hover,
#prev:hover {
  opacity: 1;
}

//--------- Media Queries ----------//

// Mobile
@media screen and (max-width: 660px) {
  .jumboImg {
    top: -28vh;
  }
  .content {
    button {
      margin-top: 12px;
    }
    h1 {
      font-size: 1.3rem;
    }
    font-size: 0.75rem;
  }
  #next {
    top: 0;
    right: 5vw;
  }
  #prev {
    top: 0;
    left: 5vw;
  }
}

// Tablet
@media screen and (min-width: 768px) {
  .content {
    font-size: 1.2rem;
    h1 {
      font-size: 2rem;
    }
    button {
      margin-right: 0;
    }
  }
  #next {
    right: 30vw;
    bottom: 5vh;
  }
  #prev {
    left: 30vw;
    bottom: 5vh;
  }
}

// Desktop
@media screen and (min-width: 1200px) {
  .jumboImg {
    top: -40vh;
  }
  .content {
    font-size: 1.5rem;
    h1 {
      font-size: 3rem;
    }
    button {
      font-size: 1.2rem;
    }
  }
  #next {
    right: 20vw;
    top: 70px;
  }
  #prev {
    left: 20vw;
    top: 70px;
  }
}
</style>
