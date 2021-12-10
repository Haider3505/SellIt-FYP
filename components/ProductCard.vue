<template>
  <div class="container">
    <div class="product-card">
      <div class="product-img">
        <nuxt-link :to="`/products/${product._id}`">
          <img :src="'http://localhost:3000/' + product.photo"
        /></nuxt-link>
      </div>
      <div class="product-text">
        <nuxt-link :to="`/products/${product._id}`">
          <h3>{{ product.title }}</h3></nuxt-link
        >
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
        <p>Pkr {{ product.price }}</p>
      </div>
      <div class="product-cart">
        <nuxt-link :to="`/products/${product._id}`">
          <button type="submit">View Product</button></nuxt-link
        >
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

html {
  box-sizing: border-box;
  font: 62.5% 'Noto Sans JP', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: #2f3640;
  font-size: 1.6em;
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3,
p {
  margin: 0;
  padding-bottom: 0.5em;
}

h3 {
  font-size: 1.2em;
}

p {
  /* font-size: 1em;
  font-weight: 300; */
  font-size: 16px;
  padding-top: 5px;
  font-weight: 300;
}

.container {
  display: flex;
}

/* PRODUCT CARD */

.product-card {
  margin-bottom: 20px;
  border: 0.6px dotted lightblue;
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #2f3640;
  transition: all linear 0.2s;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover,
.product-card:active {
  box-shadow: 0.2em 0.5em 0.5em rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

.product-img {
  border-radius: 10px 10px 0 0;
  height: 150px;
  max-width: 100%;
}

.img-one {
  /* background-image: url(https://images.unsplash.com/photo-1517394834181-95ed159986c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80); */
  background-image: url(https://images.unsplash.com/photo-1517394834181-95ed159986c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80);
}

.img-two {
  background-image: url(https://images.unsplash.com/photo-1523889310790-cb91a98b017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
}

.img-three {
  background-image: url(https://images.unsplash.com/photo-1566940973973-d499f3993bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
}

.img-one,
.img-two,
.img-three {
  background-size: cover;
  background-position: center;
}

.product-text {
  display: flex;
  padding: 1em;
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.product-cart button {
  border-radius: 0 0 10px 10px;
  color: #f5f6fa;
  cursor: pointer;
  font-family: inherit;
  padding: 1em;
  text-transform: uppercase;
  transition: all linear 0.3s;
  width: 100%;
}

.product-cart button:hover {
  font-weight: 500;
  letter-spacing: 0.1em;
}

/* color */
.product-card:first-child h3 {
  color: #e84118;
}

.product-card:first-child button {
  background-color: #e84118;
}

.product-card:nth-child(2) h3 {
  color: #fbc531;
}

.product-card:nth-child(2) button {
  background-color: #fbc531;
}

.product-card:last-child h3 {
  color: #0097e6;
}

.product-card:last-child button {
  background-color: #0097e6;
}
.product-img img {
  border-radius: 10px 10px 0 0;
  height: 162px;
  width: 100%;
}

/* media queries */
@media screen and (max-width: 860px) {
  .container {
    display: grid;
    grid-column-templates: 1fr;
    grid-auto-rows: auto;
  }

  .product-card {
    border: 0.3px solid lightblue !important;

    margin: 1.5em;
  }
}
</style>
