<template>
  <!-- Hero -->
  <div class="hero">
    <div class="glide" id="glide_1">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="hero__center">
              <div class="hero__left">
                <span class="">New Inspiration 2022</span>
                <h1 class="">PHONES MADE FOR YOU!</h1>

                <p>Trending from mobile and headphone style collection</p>
                <a href="#"><button class="hero__btn">SHOP NOW</button></a>
              </div>
              <div class="hero__right">
                <div class="hero__img-container">
                  <img
                    class="banner_01"
                    src="../images/banner_01.png"
                    alt="banner2"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideA: 1,
      slideB: 2,
    }
  },
  methods: {
    toggle() {
      console.log('exec')
      if (this.slideA === 1) {
        this.slideB = 1
        this.slideA = 2
      }
      if (this.slideB === 1) {
        this.slideB = 2
        this.slideA = 1
      }
    },
  },
}
</script>
