<template>
    <div class="panelscroll">
    <section id="counts" class="counts">
      <div class="container position-relative">

        <div class="text-center title">
          <h3 data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500">What we have achieved so far</h3>
          <p  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000">Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
        </div>

        <div class="row counters">

          <div class="col-lg-3 col-6 text-center">
            <countTo :startVal='0' :endVal='232' :duration='7000' class="purecounter"></countTo>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <countTo :startVal='0' :endVal='521' :duration='7000' class="purecounter"></countTo>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <countTo :startVal='0' :endVal='1463' :duration='7000' class="purecounter"></countTo>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <countTo :startVal='0' :endVal='15' :duration='7000' class="purecounter"></countTo>
            <p>Hard Workers</p>
          </div>
          
        </div>

      </div>
    </section>
    </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    components: { countTo },
    data () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>