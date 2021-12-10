<template>
  <div>
    <header class="nav-opt-sprite nav-lang-en nav-locate-us nav-ssl nav-unrec">
      <div class="container-fluid desktop-nav">
        <div class="row">
          <!-- LOGO area -->
          <div class="col-sm-2">
            <div class="logo-area">
              <nuxt-link to="/">
                <img
                  src="https://i.imgur.com/OH9ESfy.png"
                  alt="logo"
                  class="img-fluid"
                />
              </nuxt-link>
            </div>
          </div>
          <!-- SearchBar -->
          <div class="col-sm-6 pt-0">
            <search />
          </div>
          <div class="col-sm-4"></div>
        </div>

        <div class="row">
          <!-- Delivery -->
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div id="nav-packard-glow-loc-icon" class="nav-sprite"></div>
                <div id="glow-ingress-block" v-if="getIsLoggedIn">
                  <span id="glow-ingress-line1" class="nav-line-1"
                    >Deliver to</span
                  >
                  <span
                    v-if="$auth.$state.user && $auth.$state.user.address"
                    id="glow-ingress-line2"
                    class="nav-line-2"
                  >
                    {{ $auth.$state.user.address.city }}
                  </span>
                  <span v-else id="glow-ingress-line2" class="nav-line-2">
                    Pakistan
                  </span>
                </div>
                <div v-else id="glow-ingress-block">
                  <span id="glow-ingress-line1" class="nav-line-1"
                    >Deliver to</span
                  >
                  <span id="glow-ingress-line2" class="nav-line-2"
                    >Pakistan
                  </span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- Shopping -->
          <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
            <div class="nav-fill">
              <!-- <div class="nav-shop">
                <nuxt-link
                  to="/history"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2">
                    Browsing History
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </nuxt-link>
              </div> -->

              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a class="nav-a" href="#productslink">Today's Deals</a>
                  <a class="nav-a" href="#">Your amazon.com</a>

                  <nuxt-link class="nav-a" to="/categories"
                    >Categories</nuxt-link
                  >
                  <a class="nav-a" href="#">Blog</a>
                  <a class="nav-a" href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Accounts and Order and Cart -->

          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
            <div class="nav-tools">
              <a
                id="icp-flyout"
                href="#"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="icp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-globe-language">EN</span>
                  </span>
                  <span class="nav-line-2">
                    &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <!-- <template v-if="$auth.$state.loggedIn"> -->
              <template v-if="getIsLoggedIn">
                <nuxt-link
                  id="nav-link-accountlist"
                  to="/profile"
                  class="nav-a nav-a-2"
                  tabindex="0"
                >
                  <span class="nav-line-1"> Hello, </span>

                  <span class="nav-line-2">
                    <!-- {{ $auth.$state.user.name }} -->
                    {{ getUserName }}
                  </span>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link
                  id="nav-link-accountlist"
                  to="/login"
                  class="nav-a nav-a-2"
                  tabindex="0"
                >
                  <span class="nav-line-1"> Hello, Sign In </span>
                  <span class="nav-line-2">
                    Account &amp; Lists
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </nuxt-link>
              </template>

              <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1"></span>
                <span class="nav-line-2" v-if="getIsLoggedIn">Orders</span>
              </nuxt-link>

              <nuxt-link id="nav-cart" to="/cart" class="nav-a nav-a-2">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >{{ getCartLength }}</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <Nuxt /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from './Search.vue'
export default {
  components: {
    Search,
  },
  computed: {
    ...mapGetters(['getCartLength', 'getUserName', 'getIsLoggedIn']),
  },
}
</script>
<style scoped>
html {
  scroll-behavior: smooth !important;
}
</style>
