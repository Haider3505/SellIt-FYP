<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <address-component :countries="countries"></address-component>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
import AddressComponent from '../../components/AddressComponent.vue'
export default {
  components: { AddressComponent },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('/api/countries')

      return {
        countries: response,
      }
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style scoped>
.a-select-option {
  text-align: left;
}
</style>
