<template>
  <div>
    <button @click="topFunction" id="myBtn"><i class="fa-solid fa-arrow-up-long"></i></button>
    
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      let mybutton = document.getElementById("myBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/main';
@use '../../assets/scss/partials/variables' as * ;
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: #e88735;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  text-align: center; 
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

#myBtn:hover {
  background-color: #e88735;
  color: white;

}
</style>
