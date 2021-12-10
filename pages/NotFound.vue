<template>
  <section class="content">
    <img
      src="../static/img/Loudly_Crying_Face_Emoji_grande.webp"
      alt="crying"
    />
    <h2>Page not found</h2>
    <p>
      This page could not be found - maybe check out all our
      <router-link to="/products">Products</router-link>.
    </p>
  </section>
</template>

<style scoped>
section {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 200px;
}

img {
  width: 17%;
}

.content h3 {
  padding-top: 40px;
  font-size: 2rem;
}

a {
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
