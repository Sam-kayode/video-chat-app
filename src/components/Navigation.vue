<template>
  <div>
    <nav class="navbar navbar-expand navbar-light pb-0 pt-1 fixed-top bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand p-0" to="/"
          ><span class="pr-1"><img src="../assets/logo.png" class="logo" alt="" /></span>
          <span class="brand-name text-primary">V-chat</span>
          <!-- <span class="navbar-text small text-primary">
            : Hi <span class="font-weight-bold">{{ user }}</span></span
          > -->
        </router-link>
       <!-- <span class="user-details" v-if="user">Hi, {{user.displayName}}</span> -->
        <div class="navbar-nav ml-auto">
           <router-link class="btn btn-outline-primary" to="/register">Register</router-link>
          <router-link class="btn btn-outline-primary" to="/login" v-if="!user">log in</router-link>
          <span class="btn btn-outline-primary" @click='$emit("signout")' v-if="user">Sign out</span>
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
nav{
  border-bottom:1px solid rgb(199, 199, 199);
}
.logo {
  width: 50px;
}
.brand-name {
font-family: 'Pacifico', cursive;
font-size:25px;
}
.user-details{
font-family:'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', Calibri,  sans-serif;
font-size:20px;
}
</style>
