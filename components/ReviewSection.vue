<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
          <!-- Total Customer reviews -->
          <a href="#" class="a-color-base">
            <h2>{{ reviews.length }} customer reviews</h2>
          </a>
          <div class="single-rating">
            <!-- <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i> -->
            <ul v-if="averageRating" style="display: flex">
              <li v-for="i in averageRating" :key="i">
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
            </ul>
            <span>
              <a style="margin-left: 5px">
                {{ averageRating }} out of 5 stars
              </a>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="a-spacing-large" />
            </div>
          </div>
          <h3 class="a-spacing-micro">Review this product</h3>
          <div class="a-row a-spacing-large">
            Share your thoughts with other customers
          </div>
          <div class="a-row">
            <!-- Link to another Review page -->
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <nuxt-link :to="`/reviews/${product._id}`" class="a-button-text"
                  >Write a customer review</nuxt-link
                >
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12">
          <div class="reviews-image-gallery">
            <h3>Customer images</h3>
            <!-- Review Images -->
            <div class="a-spacing-small a-spacing-top-small">
              <img
                class="img-fluid"
                width="22.5%"
                v-for="review in reviews"
                :key="review._id"
                :src="'http://localhost:3000/' + review.photo"
              />
            </div>
            <div>
              <a href="#">See all customer images</a>
            </div>
          </div>
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-header">
                <h3>
                  <span class="a-size-base">
                    Showing {{ reviews.length }} of {{ reviews.length }} reviews
                  </span>
                </h3>
              </div>

              <!-- Reviews -->
              <div
                class="review-body review-border"
                v-for="review in reviews"
                :key="review._id"
              >
                <div class="a-row my-fix">
                  <div class="genome-widget">
                    <a href="#">
                      <div class="profile-avatar">
                        <img
                          src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                        />
                      </div>
                      <!-- Review Owner -->
                      <div class="profile-content">
                        <span class="a-profile-name">{{
                          review.user.name
                        }}</span>
                      </div>
                    </a>
                  </div>
                  <!-- Review Star -->
                  <a href="#">
                    <i
                      class="fas fa-star"
                      v-for="i in review.rating"
                      :key="i"
                    ></i>
                  </a>
                  <span class="a-letter-space"></span>
                </div>
                <!-- Review Headline -->
                <a href="#" class="review-title">{{ review.headline }}</a>
                <!-- Review Body -->
                <div class="review-body">
                  <span>{{ review.body }}</span>
                </div>
              </div>
              <!-- Reviews -->
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'reviews', 'averageRating'],
}
</script>
<style scoped>
.fa,
.fas {
  color: orange;
}
.single-rating {
  display: flex;
  margin: 1em 0;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1em;
}
.review-border {
  border-bottom: 1px solid green;
  padding: 3px;
}
.my-fix {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
