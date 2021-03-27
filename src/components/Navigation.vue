<template>
  <div>
    <nav class="navbar navbar-expand navbar-light py-0">
      <div class="container-fluid">
        <router-link class="navbar-brand p-0" to="/"
          ><span class="pr-1"><img src="../assets/logo.png" class="logo" alt="" /></span>
          <span class="navbar-text small">
            : Hi <span class="font-weight-bold text-white">{{ user }}</span></span
          >
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="btn btn-outline-primary" to="/login"
            >log in</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'',
  props:['users']
}
</script>

<style scoped>
.logo {
  width: 50px;
}
</style>
