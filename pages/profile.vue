<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: centre">Profile Page</h2>
          <button class="hero__btn" href="#" @click="logout">Log Out</button>
          <form>
            <!-- name -->
            <div class="a-spacing-top-medium">
              <label for="">Name</label>
              <input
                v-model="name"
                class="a-input-text"
                style="width: 100%"
                :placeholder="$auth.$state.user.name"
              />
            </div>
            <!-- Email -->
            <div class="a-spacing-top-medium">
              <label for="">Email</label>
              <input
                v-model="email"
                class="a-input-text"
                style="width: 100%"
                :placeholder="$auth.$state.user.email"
              />
            </div>
            <!-- password -->
            <div class="a-spacing-top-medium">
              <label for="">Password</label>
              <input
                v-model="password"
                class="a-input-text"
                style="width: 100%"
              />
            </div>

            <hr />
            <!-- Submit Button -->
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile"
                    >Update Profile</span
                  >
                </span>
              </span>
            </div>
          </form>
          <br />
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async onUpdateProfile() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      try {
        const response = await this.$axios.$put(`api/auth/user`, data)
        if (response.success) {
          this.name = ''
          this.email = ''
          this.password = ''

          await this.$auth.fetchUser()
        }
      } catch (error) {
        // console.log(error.message)
      }
    },
    ...mapActions(['logout']),
    // async onLogout() {
    // await this.$auth.logout()
    // },
  },
}
</script>
