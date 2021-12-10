<template>
  <div>
    <main class="listingPage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
            <!-- sidebar -->
          </div>

          <!-- main content -->

          <div id="wrap">
            <div id="columns" class="columns_4">
              <figure v-for="product in products" :key="product.objectID">
                <!-- Best Seller -->
                <div class="a-spacing-micro">
                  <div class="bestSeller">
                    <a href="#">Best Seller</a>
                  </div>
                </div>
                <!-- best seller ends here -->
                <nuxt-link
                  :to="`/products/${product.objectID}`"
                  class="a-link-normal"
                >
                  <img :src="'http://localhost:3000/' + product.photo"
                /></nuxt-link>
                <div class="alignproducts">
                  <nuxt-link
                    :to="`/products/${product.objectID}`"
                    class="a-link-normal"
                  >
                    <figcaption>{{ product.title }}</figcaption>
                  </nuxt-link>

                  <span class="price">PKR {{ product.price }}</span>
                  <client-only placeholder="Loading">
                    <vue-star-rating
                      :rating="product.averageRating"
                      :showRating="false"
                      :glow="1"
                      :border-width="1"
                      :rounded-corners="true"
                      :read-only="true"
                      :star-size="18"
                      :star-points="[
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ]"
                    ></vue-star-rating>
                  </client-only>
                </div>
                <div class="makingimp">
                  <a class="button"
                    ><nuxt-link :to="`/products/${product.objectID}`"
                      >View Details</nuxt-link
                    ></a
                  >
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  // watchQuery: ['title'],
  // //   watchQuery: ['query'],
  // async asyncData({ $axios, query }) {
  //   try {
  //     const products = await $axios.$post('/api/search', { title: query.title })
  //     //   const products = await $axios.$post('/api/search', { query: query.query })
  //     // console.log(products)
  //     return {
  //       products,
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },

  props: ['products'],
  mounted() {
    console.log('mounted')
    console.log(this.products)
  },
}
</script>

<style>
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
}
</style>
