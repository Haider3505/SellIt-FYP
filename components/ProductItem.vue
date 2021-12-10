<template>
  <div>
    <!-- <figure v-for="product in products" :key="product._id"> -->

    <figure>
      <!-- Best Seller -->
      <div class="a-spacing-micro">
        <div class="bestSeller">
          <a href="#">Best Seller</a>
        </div>
      </div>
      <!-- best seller ends here -->
      <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
        <img :src="'http://localhost:3000/' + product.photo"
      /></nuxt-link>
      <div class="alignproducts">
        <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
          <figcaption>{{ product.title }}</figcaption>
        </nuxt-link>

        <span class="price">PKR {{ product.price }}</span>
        <client-only placeholder="Loading">
          <vue-star-rating
            :rating="average"
            :showRating="false"
            :glow="1"
            :border-width="1"
            :rounded-corners="true"
            :read-only="true"
            :star-size="18"
            :star-points="[
              23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
              19, 31, 17,
            ]"
          ></vue-star-rating>
        </client-only>
      </div>
      <div class="makingimp">
        <a class="button"
          ><nuxt-link :to="`/products/${product._id}`"
            >View Details</nuxt-link
          ></a
        >
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  props: ['product'],
  data() {
    return {
      average: 0,
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get(`api/reviews/${this.product._id}`)

      let averageRating = 0
      const reviews = response.reviews
      if (reviews.length > 0) {
        let sum = 0
        for (let i = 0; i < reviews.length; i++) {
          sum += reviews[i].rating
        }
        averageRating = sum / reviews.length
      }

      this.average = averageRating
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped>
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
}

.mainResults {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
}
.s-result-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
body {
  background: url(//subtlepatterns.com/patterns/scribble_light.png);
  font-family: Calluna, Arial, sans-serif;
  min-height: 1000px;
}
#wrap {
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
}
.columns_2 figure {
  width: 49%;
  margin-right: 1%;
}
.columns_2 figure:nth-child(2) {
  margin-right: 0;
}
.columns_3 figure {
  width: 32%;
  margin-right: 1%;
}
.columns_3 figure:nth-child(3) {
  margin-right: 0;
}
.columns_4 figure {
  width: 24%;
  margin-right: 1%;
}
.columns_4 figure:nth-child(4) {
  margin-right: 0;
}
.columns_5 figure {
  width: 19%;
  margin-right: 1%;
}
.columns_5 figure:nth-child(5) {
  margin-right: 0;
}
.makingimp a {
  color: #ffff !important;
  text-decoration: none !important;
}
#columns figure:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}

div#columns figure {
  margin-left: 10px !important;
  display: inline-block;
  background: #fefefe;
  border: 2px solid #fafafa;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 0px 15px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  padding: 15px;
  padding-bottom: 5px;
  background: -webkit-linear-gradient(45deg, #fff, #f9f9f9);
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

div#columns figure img {
  margin-left: 10px;
  width: 80%;
  height: 160px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  margin-bottom: -30px;
  font-size: 15px;
  color: #444;
  height: 60px;
  font-weight: 600;
  text-overflow: ellipsis;
}
.alignproducts {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a.button {
  padding: 10px;
  background: salmon;
  margin: 10px;
  display: block;
  text-align: center;
  color: #fff;
  transition: all 1s linear;
  text-decoration: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  border-bottom: 3px solid #ff6536;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
a.button:hover {
  background: #ff6536;
  border-bottom: 3px solid salmon;
  color: #f1f2f3;
}
@media screen and (max-width: 960px) {
  #columns figure {
    width: 24%;
  }
}
@media screen and (max-width: 767px) {
  #columns figure {
    width: 32%;
  }
}
@media screen and (max-width: 600px) {
  #columns figure {
    width: 49%;
  }
}
@media screen and (max-width: 500px) {
  #columns figure {
    width: 100%;
  }
}
</style>
