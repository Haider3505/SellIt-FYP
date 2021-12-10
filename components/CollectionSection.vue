<template>
  <!-- Collection -->
  <section id="collection" class="section collection">
    <div class="collection__container">
      <div class="collection__box my-animation">
        <div class="img__container">
          <img class="collection_02" src="../images/collection_02.png" alt="" />
        </div>
        <div class="collection__content">
          <div class="collection__data">
            <span>New Colors Introduced</span>
            <h1>HEADPHONES</h1>
            <!-- <nuxt-link
              :to="`/categories`"
              :category="gifts"
              class="a-link-normal"
            > -->
            <nuxt-link
              :to="{ name: 'categories', params: { category: 'watch' } }"
              class="a-link-normal"
            >
              SHOP NOW</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="collection__box my-animation">
        <div class="img__container">
          <img class="collection_01" src="../images/collection_01.png" alt="" />
        </div>
        <div class="collection__content">
          <div class="collection__data">
            <span>Phone Device Presets</span>
            <h1>SMARTPHONES</h1>
            <nuxt-link
              :to="{ name: 'categories', params: { category: 'smartphone' } }"
              class="a-link-normal"
            >
              SHOP NOW</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/*
======================
Collection
======================
*/

a {
  text-decoration: none;
}

.collection__container {
  margin-left: 14rem;
  flex-wrap: wrap;
}

.my-animation:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}

.my-animation {
  /* background: -webkit-linear-gradient(45deg, #fff, #f9f9f9); */
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
