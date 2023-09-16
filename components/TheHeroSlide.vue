<template>
  <section id="hero" class="panelscroll">
    <div class="hero-container">
    <div class="carousel carousel-fade slide swiper mySwiper" id="heroCarousel" ref="swiper">
      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
      <div class="swiper-wrapper ">
        <div class="swiper-slide" style="background-image: url(img/slide/creation.jpg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">Création Sites Web <br> <span></span></h2>
                  <p class="animate__animated animate__fadeInUp">Laissez-nous transformer vos idées en sites web dynamiques qui capturent l'essence de votre entreprise et captivent votre public</p>
                  <a href="#contact" class="btn-get-started scrollto animate__animated animate__fadeInUp">Contactez nous</a>
                </div>
              </div>
        </div>
        <div class="swiper-slide" style="background-image: url(img/slide/seo.jpg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">Référencement Naturel (SEO)</h2>
                  <p class="animate__animated animate__fadeInUp">Notre SEO optimise votre visibilité en ligne, garantissant que chaque clic compte et se traduit par des résultats concrets.</p>
                  <a href="#contact" class="btn-get-started scrollto animate__animated animate__fadeInUp">Contactez nous</a>
                </div>
              </div>
            </div>

        <div class="swiper-slide" style="background-image: url(img/slide/referencement.jfif);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">Référencement Payant (Google Ads)</h2>
                  <p class="animate__animated animate__adeInUp">Chaque clic est une opportunité. Nos campagnes ciblées assurent que chaque clic mène à une action, augmentant ainsi vos résultats.</p>
                  <a href="#contact" class="btn-get-started scrollto animate__animated animate__fadeInUp">Contactez nous</a>
                </div>
              </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    
  </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
    });
  },
};
</script>

<style>
.animate__fadeInDown{
  text-transform: uppercase;
}
</style>