<template>
    <div>
        <section id="topbar" class="fixed-top d-flex align-items-center">
            <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div class="social-links d-none d-md-flex">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
            </div>
        </section>
        <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><nuxt-link  to="/" ><a >Agadir<span>It</span></a></nuxt-link></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar" v-bind:class = "(showMobileMenu)?'navbar-mobile':''">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li class="nav-link scrollto" @click="dropdownActiveFn"  v-bind:class = "(loggedIn)?'dropdown':''" >
            <NuxtLink v-if="loggedIn" to="/" class="nav-link scrollto"><i class="bi bi-person"></i></NuxtLink>
            <NuxtLink  v-else to="/login" class="nav-link scrollto"><i class="bi bi-person"></i></NuxtLink>
            <ul v-if="loggedIn" v-bind:class = "(dropdownActive)?'dropdown-active':''">
              <nuxt-link  to="/" >
              <button @click.prevent="logout">Logout</button></nuxt-link>
            </ul>
          </li>
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
          </li> -->
        </ul>
        <i class="bi  mobile-nav-toggle" v-bind:class = "(showMobileMenu)?'bi-x':'bi-list'" @click="mobileNavBar"></i>
      </nav><!-- .navbar -->

    </div>
        </header>
    </div>
    
</template>

<script>
import { BIcon, BIconArrowUp } from 'bootstrap-vue'
    export default {
      data(){
        return{
          showMobileMenu :false,
          dropdownActive :false
        }
      },
      computed: {
           loggedIn() {
            return this.$store.getters.getloggedIn  
            }
      },
      methods: {
      logout() {
        $nuxt.$fire.auth.signOut()
        this.$router.go(this.$router.currentRoute)
      },
      mobileNavBar: function(e) { 
        this.showMobileMenu = !this.showMobileMenu
        this.dropdownActive=false
      },
      dropdownActiveFn: function(e) { 
         if(this.showMobileMenu==true){
          this.dropdownActive= !this.dropdownActive
         }
      }
      },
      components: {
            BIcon,
            BIconArrowUp
      }
    };
</script>

<style>
.logo a {
  font-size: 28px;
}
</style>