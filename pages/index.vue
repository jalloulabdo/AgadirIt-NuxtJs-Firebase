<template>
  <div>
    <TheHeader />
    <TheHeroSlide />
    <About />
    <AboutList />
    <Counts />
    <Services />
    <Portfolio />
    <Team />
    <Testimonials />
    <Contact />
    <TheFooter />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default {
  name: 'IndexPage',

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
  },
}
</script>