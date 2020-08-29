<template>
  <div class="home home__container">
    <!-- Sección Carousel -->
    <v-carousel
      continuous
      cycle
      class="pt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>
      <!-- Cabecera -->
      <header class="text-center header__container pt-5 pb-5">
        <h1>⭐Classicmodels Orders⭐</h1>
        <h2>¿Quieres conocer nuestros Autos?</h2>
        <h4>Ven y descúbrelo</h4>
      </header>
      <!-- Sección botones -->
      <section class="btn__container">
        <div class="text-center btn__black">
          <v-btn rounded color="black" dark to="/dashboard">🌟 Dashboard 🌟</v-btn>
          <v-btn rounded color="black" dark to="/ordenes">🌟 Ordenes 🌟</v-btn>
          <v-btn rounded color="black" dark to="/sucursales">🌟 Sucursales 🌟</v-btn>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-1.jpg?alt=media&token=ca593d46-bffa-42a1-a106-52184ecb6560',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-2.jpg?alt=media&token=016607e9-5515-4a2f-97f2-cb82305b97cd',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-4.jpg?alt=media&token=9a078737-76a1-4bd3-a287-b345a7e88080',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-3.jpg?alt=media&token=5b0eb8d8-0f1a-41ef-87b2-dbe6257d6fb1',
        },
      ],
    }
  },
  name: 'Home',
}
</script>

<style lang="scss">
// Header
.header__container {
  background-color: rgb(8, 8, 8);
  color: #FFF;
}
// Sección botones
.btn__container {
  margin: 0;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-5.jpg?alt=media&token=f1613904-808b-460a-bd09-25d01d89ec06) !important;
  background-size: cover !important;
}
.btn__black {
  padding-top: 20em;
  padding-bottom: 30em;
}
</style>