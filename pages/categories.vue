<template>
  <div class="categories">
    <!-- breadcrumbs -->
    <ol class="breadcrumb breadcrumb1">
      <li><a href="/">Home &nbsp; </a>>> &nbsp;</li>
      <li class="active">&nbsp;Products</li>
    </ol>
    <div class="clearfix"></div>
    <!-- //breadcrumbs -->
    <div class="deals">
      <div class="container">
        <h2 class="product-heading">Categories:</h2>
        <div class="deals-row row">
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              class="wthree-btn"
              @click="renderCategoryProducts('smartphone')"
            >
              <div class="focus-image"><i class="fa fa-mobile"></i></div>
              <h4 class="clrchg">Mobiles</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              class="wthree-btn wthree1"
              @click="renderCategoryProducts('electronics')"
            >
              <div class="focus-image"><i class="fa fa-laptop"></i></div>
              <h4 class="clrchg">Electronics & Appliances</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              class="wthree-btn wthree2"
              @click="renderCategoryProducts('furnitures')"
            >
              <div class="focus-image"><i class="fa fa-wheelchair"></i></div>
              <h4 class="clrchg">Furnitures</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              class="wthree-btn wthree3"
              @click="renderCategoryProducts('homedecor')"
            >
              <div class="focus-image"><i class="fa fa-home"></i></div>
              <h4 class="clrchg">Home Decor</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('books')"
              class="wthree-btn wthree3"
            >
              <div class="focus-image"><i class="fa fa-book"></i></div>
              <h4 class="clrchg">Books & Music</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              @click="renderCategoryProducts('fashion')"
              href="#product-category-id"
              class="wthree-btn wthree4"
            >
              <div class="focus-image"><i class="fa fa-asterisk"></i></div>
              <h4 class="clrchg">Fashion</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('kids')"
              class="wthree-btn wthree2"
            >
              <div class="focus-image"><i class="fa fa-gamepad"></i></div>
              <h4 class="clrchg">Kids</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('groceries')"
              class="wthree-btn wthree"
            >
              <div class="focus-image">
                <i class="fa fa-shopping-basket"></i>
              </div>
              <h4 class="clrchg">Groceries</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('watch')"
              class="wthree-btn wthree5"
            >
              <div class="focus-image"><i class="fa fa-clock"></i></div>
              <h4 class="clrchg">SmartWatch</h4>
            </a>
          </div>
          <div class="col-md-2 focus-grid w3focus-grid-mdl">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('watch')"
              class="wthree-btn wthree1"
            >
              <div class="focus-image"><i class="fa fa-car"></i></div>
              <h4 class="clrchg">Automotive</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('food')"
              class="wthree-btn wthree2"
            >
              <div class="focus-image"><i class="fa fa-utensils"></i></div>
              <h4 class="clrchg">Food</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('sports')"
              class="wthree-btn wthree5"
            >
              <div class="focus-image"><i class="fa fa-futbol"></i></div>
              <h4 class="clrchg">Sports</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('games')"
              class="wthree-btn wthree3"
            >
              <div class="focus-image"><i class="fa fa-gamepad"></i></div>
              <h4 class="clrchg">Games & Toys</h4>
            </a>
          </div>
          <div class="col-md-3 focus-grid">
            <a
              href="#product-category-id"
              @click="renderCategoryProducts('headphones')"
              class="wthree-btn"
            >
              <div class="focus-image"><i class="fa fa-headphones"></i></div>
              <h4 class="clrchg">Headphones</h4>
            </a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="row">
          <div class="products">
            <div
              id="product-category-id"
              ref="product-category"
              class="container"
            >
              <div class="container-fluid">
                <div v-if="productHeader !== ''" class="product-top row">
                  <div class="product-heading">
                    <h2>Category >> {{ productHeader }}</h2>
                    <nav id="primary_nav_wrap">
                      <ul>
                        <li>
                          <a>Filter By Price</a>
                          <ul>
                            <li>
                              <a @click="filterByPrice('LTH')">Low to High</a>
                            </li>
                            <li>
                              <a @click="filterByPrice('HTL')">High to Low </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div class="clearfix"></div>
                </div>
                <div class="h3alignment" v-if="productHeader !== ''">
                  <h3>
                    {{ products.length }} Products found in
                    {{ productHeader }} category
                  </h3>
                </div>
                <div class="products-row">
                  <!--  -->
                  <!-- <category-section :products="products"></category-section> -->
                  <component
                    :is="currentTabComponent"
                    :products="products"
                    class="tab"
                  ></component>
                </div>

                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: '',
      currentTabComponent: '',
      productHeader: '',
    }
  },
  mounted() {
    if (this.$route.params.category) {
      this.renderCategoryProducts(this.$route.params.category)
    }
  },
  methods: {
    async renderCategoryProducts(title) {
      try {
        const products = await this.$axios.$post('/api/search', { title })

        // let check it
        this.productHeader = title
        this.currentTabComponent = 'category-section'
        this.products = products
        // return {
        //   products,
        // }
      } catch (error) {
        console.log(error)
      } finally {
        location.href = '#product-category-id'
      }
    },
    filterByPrice(chkk) {
      if (chkk === 'LTH') {
        this.products = this.products.sort((a, b) => {
          if (a.price < b.price) return -1
          if (a.price > b.price) return 1
          return 0
        })
      } else {
        this.products = this.products.sort((a, b) => {
          if (a.price > b.price) return -1
          if (a.price < b.price) return 1
          return 0
        })
      }
    },
  },
}
</script>

<style scoped>
/*-- welcome --*/
html {
  scroll-behavior: smooth !important;
}
.h3alignment h3 {
  margin-top: 5px;
}
/* my style */
#primary_nav_wrap {
  margin-top: 15px;
}

#primary_nav_wrap ul {
  list-style: none;
  position: relative;
  float: left;
  margin: 0;
  padding: 0;
}
#primary_nav_wrap ul a:active {
  background-color: gray;
}
#primary_nav_wrap ul a {
  cursor: pointer;
  display: block;
  color: #fff;
  border: 1px solid #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
  padding: 0 15px;
  font-family: 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#primary_nav_wrap ul li {
  position: relative;
  float: left;
  margin: 0;
  padding: 0;
}

#primary_nav_wrap ul li.current-menu-item {
  background: #ddd;
}

#primary_nav_wrap ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: darkslategrey;
  padding: 0;
}

#primary_nav_wrap ul ul li {
  float: none;
  width: 120px;
}

#primary_nav_wrap ul ul a {
  line-height: 120%;
  padding: 10px 15px;
}

#primary_nav_wrap ul ul ul {
  top: 0;
  left: 100%;
}

#primary_nav_wrap ul li:hover > ul {
  display: block;
}
/* my style */
.product-heading {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  margin-top: -15px;
}
.product-top {
  background: #2f4f4f;
  padding: 1em 2em;
  color: white;
}

.deals,
.card-page,
.help,
.values,
.privacy,
.sitemap,
.products,
.related-products,
.login-page,
.contact,
.about,
.faq-w3agile,
.wthree-offers,
.w3l-services {
  padding: 5em 0;
  padding-top: 1em;
}
h3.w3ls-title {
  text-align: left;
  font-size: 2em;
  color: #000;
  margin: 1em 0;
  font-family: 'Offside', cursive;
}
.welcome-grids {
  float: left;
  width: 33.33%;
  text-align: center;
  margin: 0.7em 0;
}
.welcome-info {
  text-align: center;
}
.welcome .bs-example.bs-example-tabs .nav-tabs {
  border: none;
  margin: 2em 0 1em;
}
.welcome .bs-example-tabs ul.nav-tabs li {
  display: inline-block;
  float: none;
  margin: 0 3em;
}
.welcome .bs-example-tabs ul.nav-tabs li a {
  display: block;
  outline: none;
  border: none;
  margin: 0;
}
.welcome .bs-example-tabs ul.nav-tabs li a:focus {
  text-decoration: none;
}
.welcome .tabcontent-grids ul li {
  display: block;
  color: #999;
  margin-top: 1em;
  font-size: 1em;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  background-color: transparent;
}
.nav-tabs li a i.fa {
  font-size: 5em;
  color: #78d378;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.nav-tabs li a i.fa.fa-female {
  color: #f57df5;
}
.nav-tabs li a i.fa.fa-gift {
  color: #fd723e;
}
.nav-tabs li a i.fa.fa-home {
  color: #5b91f2;
}
.nav-tabs li a i.fa.fa-motorcycle {
  color: #ec4b81;
}
.nav-tabs li a h5 {
  font-size: 1.2em;
  color: #555;
  margin-top: 1em;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.welcome ul.nav-tabs li.active a i.fa,
.welcome ul.nav-tabs li:hover a i.fa {
  color: #d2d2d2;
}
.welcome ul.nav-tabs li.active a h5,
.welcome ul.nav-tabs li:hover a h5 {
  color: #d2d2d2;
}

.owl-carousel .item {
  margin: 1em;
  color: #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.33);
  -o-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.33);
  -ms-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.33);
}
/*-- featured products --*/
/*  Demo 10 */
.glry-w3agile-grids {
  background-color: #fff;
  display: block;
  overflow: hidden;
  position: relative;
  -webkit-box-shadow: 0 0 0 0 #555;
  -moz-box-shadow: 0 0 0 0 #555;
  -o-box-shadow: 0 0 0 0 #555;
  -ms-box-shadow: 0 0 0 0 #555;
  box-shadow: 0 0 0 0 #555;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  filter: alpha(opacity=100);
}
.glry-w3agile-grids a {
  display: block;
}
.glry-w3agile-grids img {
  width: 70%;
  margin: 2em auto;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  filter: alpha(opacity=100);
}
.glry-w3agile-grids:hover img {
  -webkit-transform: translateX(50%);
  -moz-transform: translateX(50%);
  -o-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
  opacity: 1;
  filter: alpha(opacity=100);
}
.glry-w3agile-grids:hover .view-caption {
  -webkit-transform: translate3d(-30%, 0px, 0px);
  -moz-transform: translate3d(-30%, 0px, 0px);
  -o-transform: translate3d(-30%, 0px, 0px);
  -ms-transform: translate3d(-30%, 0px, 0px);
  transform: translate3d(-30%, 0px, 0px);
}
.glry-w3agile-grids .view-caption {
  background-color: rgba(0, 0, 0, 0.85);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  padding: 7% 5% 5% 35%;
  text-align: left;
  top: 0;
  z-index: 99;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: translate3d(-110%, 0px, 0px);
  -moz-transform: translate3d(-110%, 0px, 0px);
  -o-transform: translate3d(-110%, 0px, 0px);
  -ms-transform: translate3d(-110%, 0px, 0px);
  transform: translate3d(-110%, 0px, 0px);
}
.glry-w3agile-grids .view-caption h4 {
  border-bottom: 1px solid #ccc;
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-family: 'Offside', cursive;
  font-weight: 600;
  text-transform: capitalize;
}
.glry-w3agile-grids .view-caption h4 a {
  color: #f44336;
}
.glry-w3agile-grids .view-caption p {
  font-size: 1em;
  color: #999;
  line-height: 1.8em;
}
.glry-w3agile-grids .view-caption h5 {
  font-size: 1.5em;
  color: #fff;
  background: #3075f1;
  width: 60px;
  height: 60px;
  line-height: 2.9em;
  -webkit-border-radius: 62%;
  -moz-border-radius: 62%;
  -o-border-radius: 62%;
  -ms-border-radius: 62%;
  border-radius: 62%;
  text-align: center;
  margin: 1em auto;
}
.agileits-form {
  position: relative;
  text-align: center;
}
.w3ls-cart {
  display: block;
  background: #f44336;
  color: #fff;
  font-size: 1em;
  text-align: center;
  border-radius: 3px;
  border: 1px solid;
  width: 80%;
  outline: none;
  padding: 0.5em 0;
  margin: 0 auto;
}
.w3ls-cart i.fa {
  margin-right: 6px;
}
/*-- //welcome --*/
/*-- add-products --*/
.w3ls-add-grids {
  /* background: url(../images/img1.jpg) no-repeat 0px 0px; */
  background-size: cover;
  width: 32.5%;
  min-height: 250px;
  float: left;
}
.w3ls-add-grids.w3ls-add-grids-mdl {
  /* background: url(../images/img2.jpg) no-repeat 0px 0px; */
  background-size: cover;
}
.w3ls-add-grids.w3ls-add-grids-mdl1 {
  /* background: url(../images/img3.jpg) no-repeat 0px 0px; */
  background-size: cover;
}
.w3ls-add-grids.w3ls-add-grids-mdl {
  margin: 0 1em;
}
.w3ls-add-grids a {
  display: block;
  padding: 1em;
}
.w3ls-add-grids h4 {
  font-size: 1.8em;
  color: #fff;
  letter-spacing: 2px;
  padding-top: 3em;
  outline: none;
  text-decoration: none;
  line-height: 1.5em;
}
.w3ls-add-grids h4 span {
  font-family: 'Lovers Quarrel', cursive;
  font-size: 2em;
}
.w3ls-add-grids a {
  display: block;
}
.w3ls-add-grids h6 {
  font-size: 1.2em;
  color: #f32e20;
  margin: 1.65em 0;
  font-family: 'Offside', cursive;
}
.w3ls-add-grids.w3ls-add-grids-mdl h4 {
  padding-top: 2em;
  text-align: center;
}
.w3ls-add-grids.w3ls-add-grids-mdl h6 {
  text-align: center;
  color: #fff;
  margin: 2.4em 0;
}
/*-- //add-products --*/
/*-- deals --*/
.focus-grid a {
  color: #6495ed;
  text-align: center;
  padding: 2em 0;
}
.focus-grid a.wthree-btn.wthree1 {
  color: #ff4500;
}
.focus-grid a.wthree-btn.wthree2 {
  color: #00b300;
}
.focus-grid a.wthree-btn.wthree3 {
  color: #e91e63;
}
.focus-grid a.wthree-btn.wthree4 {
  color: #a94442;
}
.focus-grid a.wthree-btn.wthree5 {
  color: #f15cf1;
}
.wthree-btn {
  position: relative;
  display: block;
  margin: 1em auto;
  width: 100%;
  text-transform: uppercase;
  overflow: hidden;
  border: 1px solid;
}
.focus-image i.fa {
  font-size: 3em;
}
h4.clrchg {
  font-size: 1.1em;
  margin-top: 1em;
}
/*-- deals-effect --*/
@-webkit-keyframes criss-cross-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  }
}

@keyframes criss-cross-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  }
}
@-webkit-keyframes criss-cross-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
}
@keyframes criss-cross-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
}

.wthree-btn:before,
.wthree-btn:after {
  position: absolute;
  top: 50%;
  content: '';
  width: 20px;
  height: 20px;
  background: #56259b;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  z-index: -1;
  transition: 0.5s all;
}
.wthree-btn:before {
  left: -20px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.wthree-btn:after {
  right: -20px;
  -webkit-transform: translate(50%, -50%);
  -moz-transform: translate(50%, -50%);
  -o-transform: translate(50%, -50%);
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
}
.wthree-btn:hover {
  color: #f5f5f5 !important;
}
.wthree-btn:hover:before {
  -webkit-animation: criss-cross-left 0.8s both;
  -moz-animation: criss-cross-left 0.8s both;
  -o-animation: criss-cross-left 0.8s both;
  -ms-animation: criss-cross-left 0.8s both;
  animation: criss-cross-left 0.8s both;
}
.wthree-btn:hover:after {
  -webkit-animation: criss-cross-right 0.8s both;
  -moz-animation: criss-cross-right 0.8s both;
  -o-animation: criss-cross-right 0.8s both;
  -ms-animation: criss-cross-right 0.8s both;
  animation: criss-cross-right 0.8s both;
}
/*-- //deals-effect --*/
</style>
