<template>
  <div class="not__found">
    <img class="error__404" src="error-404.jpg" alt="error-404">
    <div class="text-center btn__nf">
      <v-btn rounded color="grey" to="/home">🌟 Volver a Home 🌟</v-btn>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.not__found {
  background-color: #FFF;
}
.error__404 {
  width: 20em;
  display: block;
  margin: auto;
  margin-top: 3em;
}
.btn__nf {
  margin-bottom: 11em;
}
</style>