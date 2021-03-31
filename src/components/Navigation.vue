<template>
  <div>
    <nav class="navbar navbar-expand navbar-light py-0">
      <div class="container-fluid">
        <router-link class="navbar-brand p-0" to="/"
          ><span class="pr-1"><img src="../assets/logo.png" class="logo" alt="" /></span>
          <span class="brand-name text-primary">V-chat</span>
          <!-- <span class="navbar-text small text-primary">
            : Hi <span class="font-weight-bold">{{ user }}</span></span
          > -->
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="btn btn-outline-primary" to="/login">log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['user']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.logo {
  width: 50px;
}
.brand-name {
  font-family: 'Pacifico', cursive;
font-size:25px;


}
</style>
