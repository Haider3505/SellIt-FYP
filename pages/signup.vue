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

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Create Account</h1>
                <!-- Your Name -->
                <div
                  class="a-row a-spacing-base"
                  :class="{ invalid: !name.isValid }"
                >
                  <label for="ap_customer_name" class="a-form-label"
                    >Your Name</label
                  >
                  <input
                    type="text"
                    name=""
                    id="ap_customer_name"
                    class="
                      a-input-text
                      form-control
                      auth-autofocus
                      auth-required-field
                      auth-contact-verification-request-info
                    "
                    v-model.trim="name.val"
                    @blur="clearValidity('name')"
                  />
                  <p v-if="!name.isValid">Name must not be empty!</p>
                </div>
                <!-- Email -->
                <div
                  class="a-row a-spacing-base"
                  :class="{ invalid: !email.isValid }"
                >
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
                    v-model.trim="email.val"
                    @blur="clearValidity('email')"
                  />
                  <p v-if="!email.isValid">
                    Email must not be empty and must contain '@'
                  </p>
                </div>
                <!-- Password -->
                <div
                  class="a-row a-spacing-base"
                  :class="{ invalid: !password.isValid }"
                >
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
                    v-model.trim="password.val"
                    @blur="clearValidity('password')"
                  />

                  <div class="a-alert-container"></div>
                  <div class="a-alert-content">
                    Password must be atleast 6 characters
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <p v-if="!formIsValid">
                    Please fix the above errors and try again!
                  </p>
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignup"
                        >Register</span
                      >
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
                    >Already have an account?
                    <nuxt-link class="alink-emphasis" to="/login"
                      >Sign in</nuxt-link
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
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  auth: 'guest',
  layout: 'none',
  data() {
    return {
      name: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      formIsValid: false,
    }
  },
  methods: {
    ...mapActions(['setUser']),

    // Validation checks
    clearValidity(input) {
      this[input].isValid = true
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateForm() {
      this.formIsValid = true

      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
      if (!this.validEmail(this.email.val)) {
        this.email.isValid = false
        this.formIsValid = false
      }

      if (this.name.val === '') {
        this.name.isValid = false
        this.formIsValid = false
      }

      if (this.password.val === '') {
        this.password.isValid = false
        this.formIsValid = false
      }

      if (this.password.val.length < 6) {
        this.password.isValid = false
        this.formIsValid = false
      }
    },
    // signup
    async onSignup() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      try {
        const data = {
          name: this.name.val,
          email: this.email.val,
          password: this.password.val,
        }

        const response = await this.$axios.$post('api/auth/signup', data)

        if (response.success === true) {
          this.$toast.success(response.message).goAway(4000)
          // storing in vuex to prepopulate the login fields
          const user = {
            name: this.name.val,
            email: this.email.val,
            password: this.password.val,
            login: false,
          }
          this.setUser({ user })

          // redirect to login page
          this.$router.push('/login')
        }
      } catch (error) {
        this.$toast.error(error.response.data.message).goAway(4000)
      }
    },
  },
}
</script>

<style scoped>
.margin-top {
  margin-top: 25px;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
