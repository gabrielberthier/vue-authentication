<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      <h5>
        In order to use this app, you'll need to
        <router-link to="/login">Login</router-link>&nbsp;or
        <router-link to="/register">register</router-link>
      </h5>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../store/helpers.js'
export default {
  computed: {
    ...authComputed,
    isLoggedIn() {
      return !!this.$store.state.user
    }
  }
}
</script>
