<template>
  <div class="login__container">
    <login-form/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style>
.login__container {
  margin: 0;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/usser-fe5a8.appspot.com/o/auto-6.jpg?alt=media&token=e27717a0-2f62-47e5-af7d-ce4a9a0f7c29) !important;
  background-size: cover !important;
  height: 100%;
}
</style>