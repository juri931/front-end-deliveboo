<script>
import PoweredBy from "./partials/PoweredBy.vue";

export default {
  components: {
    PoweredBy,
  },
};
</script>

<template>
  <footer class="footer">
    <div class="main-wrapper text-center">
      <div
        class="row main-row d-flex justify-content-around align-items-center"
      >
        <div class="col-3 navbar-col">
          <div class="navbar-brand">
            DeliveBoo!
          </div>
        </div>

        <div class="col-6">
          <div
            class="footer-right d-flex align-items-center justify-content-center flex-column"
          >
            <nav class="nav text-center">
              <ul>
                <li>
                  <router-link :to="{ name: 'home' }" @click="getApi"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'advanceResearch' }"
                    >Ristoranti</router-link
                  >
                </li>
                <li class="">
                  <a href="http://127.0.0.1:8000">Area Ristoratori</a>
                </li>
              </ul>
            </nav>
            <div class="social-media d-inline-block">
              <div class="flex-nowrap">
                <a
                  ><i class="fa-brands fa-facebook-f" aria-label="Facebook"></i
                ></a>
                <a
                  ><i class="fa-brands fa-linkedin-in" aria-label="LinkedIn"></i
                ></a>
                <a
                  ><i class="fa-brands fa-instagram" aria-label="Instagram"></i
                ></a>
                <a
                  ><i class="fa-brands fa-x-twitter" aria-label="Twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <PoweredBy />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

$footer-bg-color: #1a1a1a;

.footer {
  background-color: $footer-bg-color;
  color: #fff;
  padding: 20px;
  .col-6 {
    width: fit-content;
  }
  .navbar-brand {
    color: #fff;
    font-size: 2.5rem;
    font-family: "Pacifico", cursive;
    text-shadow: 3px 3px 0px #478860;
    transform: rotate(-5deg);
  }
}

.powered-by {
  font-size: 0.8rem;
  color: #666;
}

.nav {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      margin: 10px;
      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #e88735;
        }
      }
    }
  }
}
.social-media {
  display: flex;
  justify-content: center;
  i {
    font-size: 1.2rem;
    aspect-ratio: 1;
    color: #fff;
    background-color: #e88735;
    text-align: center;
    margin: 0 6px;
    padding: 7px 7px;
    display: inline-block;
    border-radius: 50%;

    &:hover {
      color: black;
    }
  }
  .fa-facebook-f {
    padding: 7px 11px;
  }
  .fa-linkedin-in {
    padding: 7px 9px;
  }
  .fa-instagram {
    padding: 8px 9px;
  }
  .fa-brands {
    cursor: pointer;
  }
}

// Media Queries
@media screen and (max-width: 660px) {
  .footer {
    .navbar-col {
      width: 100%;
    }
    .social-media {
      i {
        font-size: 18px;
        line-height: 18px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    .nav {
      ul {
        li {
          font-size: 1.3rem;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .footer {
    .nav {
      ul {
        li {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
