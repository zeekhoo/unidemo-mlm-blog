<template>
  <div id="app">
    <div class="ui inverted top fixed menu">
      <div class="ui container">
        <router-link
          to="/"
          class="header item"
        >
          NITRO-Blog
        </router-link>
        <router-link
          to="/login"
          class="item"
          v-if="!authenticated" 
        >
        Login
        </router-link>
        <router-link
          to="/"
          id="logout-button"
          class="item"
          v-if="authenticated"
          v-on:click.native="logout()"
        >
        Logout
        </router-link>   
      </div>
    </div>
    <div
      class="ui text container"
      style="margin-top: 7em;"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return { 
      authenticated: false
    }
  },
  created () { this.isAuthenticated() },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      if (this.$auth) {
        this.authenticated = await this.$auth.isAuthenticated()
      } else {
        this.authenticated = false
      }
    },
    async logout () {
      await this.$auth.signOut();
      await this.isAuthenticated();
    }
  }
}
</script>


