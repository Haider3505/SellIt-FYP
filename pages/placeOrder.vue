<template>
  <body>
    <!--SHIPPING ADDRESS-->
    <div class="container-fluid">
      <div class="shipping-address">
        <div class="navbarShipping a-spacing-large">
          <nuxt-link to="/">
            <img src="img/placeHeadernav.gif" class="img-fluid" />
          </nuxt-link>
        </div>
        <div class="a-row">
          <div class="a-size-large a-text-bold a-spacing-mini">
            Review your order
          </div>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
            <div class="a-row a-spacing-large"></div>
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div
                      v-if="$auth.$state.user.address"
                      class="a-spacing-base"
                    >
                      <div class="a-row">
                        <strong>
                          Shipping address
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <div class="displayAddressDiv">
                          <!-- User's address -->
                          <ul class="displayAddressUL">
                            <li>{{ $auth.$state.user.address.fullName }}</li>
                            <li>
                              {{ $auth.$state.user.address.streetAddress }}
                            </li>
                            <li>{{ $auth.$state.user.address.city }}</li>
                            <li>{{ $auth.$state.user.address.country }}</li>
                            <li>
                              Phone:
                              <span dir="ltr">{{
                                $auth.$state.user.address.phoneNumber
                              }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- here address form will be displayed  -->
                    <div v-else class="registerAddress mt-3">
                      <div class="container-fluid c-section">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="a-section">
                              <h2>Shipping Address</h2>

                              <!-- Error Message -->
                              <form>
                                <div
                                  class="a-spacing-medium a-spacing-top-medium"
                                >
                                  <!-- Country / Region -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Country/Region</label
                                    >
                                    <select
                                      class="a-select-option"
                                      v-model="country"
                                    >
                                      <option
                                        v-for="country in countries"
                                        :key="country.alpha2Code"
                                        :value="country.name"
                                      >
                                        {{ country.name }}
                                      </option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <!-- Full name -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Full Name</label
                                    >
                                    <input
                                      type="text"
                                      v-model="fullName"
                                      class="a-input-text"
                                      style="width: 100%"
                                    />
                                  </div>
                                  <!-- Street Address -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Street Address</label
                                    >
                                    <input
                                      type="text"
                                      v-model="streetAddress1"
                                      class="a-input-text"
                                      style="width: 100%"
                                      placeholder="Street and number, P.O. box, c/o."
                                    />
                                    <!-- Street Address 2 -->
                                    <input
                                      type="text"
                                      v-model="streetAddress2"
                                      class="a-input-text a-spacing-top-small"
                                      style="width: 100%"
                                      placeholder="Apartment, suite, unit, building, floor, etc."
                                    />
                                  </div>
                                  <!-- City -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >City</label
                                    >
                                    <input
                                      type="text"
                                      v-model="city"
                                      class="a-input-text"
                                      style="width: 100%"
                                    />
                                  </div>
                                  <!-- State -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >State / Province / Region</label
                                    >
                                    <input
                                      type="text"
                                      v-model="state"
                                      class="a-input-text"
                                      style="width: 100%"
                                    />
                                  </div>
                                  <!-- Zip Code -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Zip Code</label
                                    >
                                    <input
                                      type="text"
                                      v-model="zipCode"
                                      class="a-input-text"
                                      style="width: 100%"
                                    />
                                  </div>
                                  <!-- Phone Number -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Phone Number</label
                                    >
                                    <input
                                      type="text"
                                      v-model="phoneNumber"
                                      class="a-input-text"
                                      style="width: 100%"
                                    />
                                  </div>
                                  <div
                                    class="a-spacing-base a-spacing-top-medium"
                                  >
                                    <h3>Add delivery instructions</h3>
                                  </div>
                                  <!-- Delivery Instruction -->
                                  <div class="a-spacing-top-medium">
                                    <label style="margin-bottom: 0px"
                                      >Do we need additional instructions to
                                      find this address?</label
                                    >
                                    <textarea
                                      v-model="deliveryInstructions"
                                      placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"
                                      style="height: 6em; width: 100%"
                                    ></textarea>
                                  </div>

                                  <hr />
                                  <div class="a-spacing-top-medium">
                                    <span>
                                      <b>Make sure your address is correct</b>
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      >If the address contains typos or other
                                      errors, your package may be
                                      undeliverable.</span
                                    >
                                  </div>

                                  <div class="a-spacing-top-large">
                                    <span class="a-button-register">
                                      <span class="a-button-inner">
                                        <span
                                          class="a-button-text"
                                          @click="onAddAddress"
                                          >Add address</span
                                        >
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="col-sm-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="$auth.$state.user.address"
                    class="col-xl-4 col-lg-6 col-sm-6 col-6"
                  >
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Payment Method
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <ul class="no-bullet-list">
                          <li class="a-spacing-micro">
                            <span class="a-list-item">
                              <span>
                                <img src="img/visa.gif" class="img-fluid" />
                              </span>
                              ending in
                              <span>6397</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="a-row a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Billing Address
                          <small>
                            <a href="#">Change</a>
                          </small>
                        </strong>
                      </div>
                      <span>Same as shipping address</span>
                    </div>
                  </div>
                  <div
                    v-if="$auth.$state.user.address"
                    class="col-xl-4 col-lg-6 col-sm-12 col-12"
                  >
                    <div class="a-spacing-base">
                      <div class="a-spacing-mini">
                        <span>
                          <strong>Gift cards &amp; promotional codes</strong>
                        </span>
                      </div>
                      <div class="row">
                        <div
                          class="col-xl-8 col-lg-7 col-md-7 col-sm-7 col-8 pr-0"
                        >
                          <input
                            type="text"
                            autocomplete="off"
                            class="a-input-text"
                            placeholder="Enter Code"
                          />
                        </div>
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-5 col-4">
                          <span class="a-buton-apply-code">
                            <span class="a-button-inner">
                              <span class="a-button-text">Apply</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <!-- Estimated delivery -->
                  <div
                    class="
                      a-row
                      a-color-state
                      a-text-bold
                      a-size-medium
                      a-spacing-small
                    "
                  >
                    Estimated delivery: {{ estimatedDelivery }}
                  </div>
                  <div class="row">
                    <!-- Cart -->
                    <div
                      v-for="product in getCart"
                      :key="product._id"
                      class="col-xl-6 col-lg-7 col-sm-6 col-12"
                    >
                      <div class="a-row a-spacing-base">
                        <div class="row">
                          <!-- Product's photo -->
                          <div class="col-sm-3 col-3">
                            <img
                              :src="'http://localhost:3000/' + product.photo"
                              style="width: 100px"
                            />
                          </div>
                          <!-- Product's Title -->
                          <div class="col-sm-9 col-9">
                            <div class="a-row">
                              <strong>{{ product.title }}</strong>
                            </div>
                            <!-- Product's owner name -->
                            <div class="a-row a-size-small">
                              by {{ product.owner.name }}
                            </div>
                            <div class="a-row">
                              <!-- Product's price -->
                              <span class="a-color-price a-spacing-micro">
                                <strong dir="ltr"
                                  >Pkr:{{
                                    product.price * product.quantity
                                  }}</strong
                                >
                              </span>
                            </div>
                            <div class="a-row">
                              <span class="availability a-color-success"
                                >In Stock.</span
                              >
                            </div>
                            <div class="a-row">
                              <!-- Product's quantity -->
                              <strong>Quantity: {{ product.quantity }}</strong>
                            </div>
                            <div class="a-row a-color-secondary a-size-small">
                              Sold by:&nbsp;Sell-It.com Services, Inc
                            </div>
                            <div class="a-row">
                              <div class="a-row a-spacing-top-micro">
                                <span class="a-button-small">
                                  <span class="a-button-inner">
                                    <i class="a-icon checkout-giftbox-icon"></i>
                                    <a
                                      href="#"
                                      class="a-button-text gift-popover-link"
                                      >Add a gift receipt</a
                                    >
                                  </span>
                                </span>
                              </div>
                              <div class="a-row">
                                <span class="a-color-secondary a-size-mini"
                                  >and see other gift options</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 col-sm-6 col-12">
                      <div class="a-row shipping-speeds">
                        <fieldset>
                          <span class="shipping-speeds-title a-size-medium">
                            <b>Choose a delivery option:</b>
                          </span>
                          <!-- Delivery option -->
                          <div class="a-spacing-mini wednesday">
                            <!-- Shipping normal -->
                            <input
                              class="radio-input"
                              checked="checked"
                              type="radio"
                              name="order0"
                              @change="onChooseShipping('normal')"
                            />
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Averages 7 business days</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >Pkr:13.98&nbsp;-&nbsp;Standard International
                                Shipping - No Tracking</span
                              >
                            </span>
                          </div>
                          <br />
                          <div class="a-spacing-mini tuesday">
                            <!-- Shipping fast -->
                            <input
                              class="radio-input"
                              type="radio"
                              name="order0"
                              @change="onChooseShipping('fast')"
                            />
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Averages 3 business days</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >Pkr:49.98&nbsp;-&nbsp;Shipping</span
                              >
                            </span>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-micro">
                    <nuxt-link to="/payment">
                      <span class="a-button-place-order">Place your order</span>
                    </nuxt-link>
                  </div>
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    By placing your order, you agree to Sell-It's
                    <a href="#">privacy notice</a>
                    and
                    <a href="#">conditions of use</a>.
                  </div>
                  <div class="a-row">
                    <div id="tfx-header">
                      <div class="a-box a-alert-info a-spacing-small">
                        <div class="a-box-inner alert-info-no-icon">
                          <strong>
                            Sell-It Currency Converter is Enabled. &nbsp;
                            <a href="#" class="a-size-mini">Learn More</a>
                          </strong>
                        </div>
                      </div>
                    </div>
                    <h3 class="a-spacing-micro a-size-base">Order Summary</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Cart's total price -->
                        <div class="col-sm-6">Items:</div>
                        <div class="col-sm-6 text-right">
                          Pkr:{{ getCartTotal }}
                        </div>
                      </div>
                      <div class="row">
                        <!-- Shipping cost -->
                        <div class="col-sm-6">Shipping & handling:</div>
                        <div class="col-sm-6 text-right">
                          USD {{ shippingPrice }}
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6 text-right">
                          <hr />
                        </div>
                      </div>
                      <!-- Total Price with Shipping -->
                      <div class="row">
                        <div class="col-sm-6">Total Before Tax:</div>
                        <div class="col-sm-6 text-right">
                          USD {{ getCartTotalWithShipping }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          Estimated tax to be collected:
                        </div>
                        <div class="col-sm-6 text-right">USD 0.00</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Order total:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Total Price with Shipping -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            USD {{ getCartTotalWithShipping }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="a-row a-spacing-small a-spacing-top-large">
        <p class="a-color-secondary a-size-mini">
          Do you need help? Explore our
          <a href="#">Help pages</a> or
          <a href="#">contact us</a>
        </p>
        <p class="a-color-secondary a-size-mini">
          For an item sold by Sell-It.com: When you click the "Place your order"
          button, we'll send you an email message acknowledging receipt of your
          order. Your contract to purchase an item will not be complete until we
          send you an email notifying you that the item has been shipped.
        </p>
        <p id="state-sales-tax-info" class="a-color-secondary a-size-mini">
          Colorado, Oklahoma, South Dakota and Vermont Purchasers:
          <a href="#"
            >Important information regarding sales tax you may owe in your
            State</a
          >
        </p>
        <div class="a-color-secondary a-size-mini">
          <p class="a-color-secondary a-size-mini">
            Within 30 days of delivery, you may return new, unopened merchandise
            in its original condition. Exceptions and restrictions apply. See
            Sell-It.com's
            <a href="#">Returns Policy</a>
            <br />
            <br />Go to the <a href="#">Sell-It.com homepage</a> without
            completing your order.
          </p>
        </div>
      </div>
      <hr />
      <p class="a-size-small a-text-center a-color-secondary" data-testid>
        <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> ©
        1996-2019, Sell-It.com, Inc.
      </p>
    </div>
    <!--/SHIPPING ADDRESS-->
  </body>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'none',
  async asyncData({ $axios, store }) {
    try {
      const responseApi = await $axios.$post('/api/shipment', {
        shipment: 'normal',
      })
      const countriesAPI = $axios.$get('/api/countries')

      const [response, countriesResponse] = await Promise.all([
        responseApi,
        countriesAPI,
      ])

      store.commit('setShipping', {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      })

      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
        countries: countriesResponse,
      }
    } catch (error) {}
  },
  computed: {
    ...mapGetters(['getCart', 'getCartTotal', 'getCartTotalWithShipping']),
  },
  methods: {
    async onChooseShipping(shipment) {
      try {
        const response = await this.$axios.$post('/api/shipment', {
          shipment,
        })

        this.$store.commit('setShipping', {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated,
        })
        this.shippingPrice = response.shipment.price
        this.estimatedDelivery = response.shipment.estimated
      } catch (error) {}
    },
    async onAddAddress() {
      try {
        const data = {
          fullName: this.fullName,
          streetAddress: this.streetAddress1 + ' ' + this.streetAddress2,
          city: this.city,
          state: this.state,
          country: this.country,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliveryInstructions,
          securityCode: this.securityCode,
        }

        const setAddressApi = this.$axios.$post('/api/addresses', data)
        const [addressesResponse] = await Promise.all([setAddressApi])
        if (addressesResponse.success) {
          this.stoast.success(addressesResponse.message).goAway(4000)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
@import url('https://rsms.me/inter/inter.css');
.radio-input:hover {
  cursor: pointer;
}

/*  */

:root {
  --color-gray: #737888;
  --color-lighter-gray: #e3e5ed;
  --color-light-gray: #f7f7fa;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

body {
  margin: 0;
}

h1 {
  margin-bottom: 1rem;
}

p {
  color: var(--color-gray);
}

hr {
  height: 1px;
  width: 100%;
  background-color: var(--color-light-gray);
  border: 0;
  margin: 2rem 0;
}

.container {
  max-width: 40rem;
  padding: 10vw 2rem 0;
  margin: 0 auto;
  height: 100vh;
}

.form {
  display: grid;
  grid-gap: 1rem;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-lighter-gray);
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.field__label {
  color: var(--color-gray);
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.field__input {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
}
.field:focus-within {
  border-color: #000;
}

.fields {
  display: grid;
  grid-gap: 1rem;
}
.fields--2 {
  grid-template-columns: 1fr 1fr;
}
.fields--3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.button {
  background-color: #000;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  display: block;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  outline: 0;
}
.button:focus-visible {
  background-color: #333;
}
</style>
