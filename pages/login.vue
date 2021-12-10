<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 margin-top">
          <div class="text-center">
            <nuxt-link to="/">
              <img
                src="https://i.imgur.com/OH9ESfy.png"
                alt=""
                class="img-fluid"
              />
            </nuxt-link>
          </div>

          <form @submit.prevent="onLogin" class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Sign In</h1>

                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_email" class="a-form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    name=""
                    id="ap_customer_email"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="email"
                  />
                </div>
                <!-- Password -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_password" class="a-form-label"
                    >password</label
                  >
                  <input
                    type="password"
                    name=""
                    id="ap_customer_password"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model="password"
                  />
                  <div class="a-alert-container"></div>
                  <div class="a-alert-content">
                    Password must be atleast 6 characters
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onLogin">LogIn</span>
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating an account, You agree to Sell it
                      <a href="">Conditions of Use</a> and
                      <a href="">Privacy Policy</a>
                    </b>
                  </div>
                </div>

                <hr />
                <div class="a-row">
                  <b
                    >Don't have an account?
                    <nuxt-link class="a-link-emphasis" to="/signup"
                      >Sign Up</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  middleware: 'auth',
  auth: 'guest',
  layout: 'none',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters(['getUserEmail', 'getUserPassword']),
  },
  created() {
    this.email = this.getUserEmail
    this.password = this.getUserPassword
  },
  methods: {
    // need to add the functionality when the password is wrong or user doesn't exist

    ...mapActions(['setUser']),

    async onLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        if (response.data.success === true) {
          // storing user in vuex
          const user = { ...response.data.user, login: true }
          this.setUser({ user })
          this.$toast.success('Successfully Logged In!').goAway(4000)
          // this.$router.push('/')
        }
      } catch (error) {
        this.$toast.show(error.response.data.message).goAway(4000)
      }
    },
  },
}
</script>

<style scoped>
.margin-top {
  margin-top: 25px;
}
</style>
