<template>
  <div class="mt-3 home">
    <div class="text-center" v-if="user">
      Welcome <span class="font-weight-bold">{{ user.displayName }}</span>
    </div>
    <div class="container-fluid text-center">
      <div class="row align-items-center p-5">
        <div class="col-lg-5 text-md-left align-middle">
          <h4 class="home-text-header text-primary mb-2">V-Chat</h4>
          <p class="lead">
            Real time video chats and communication between multiple users, allowing you to create
            rooms for your meetings and invite attendees.
          </p>
          <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
        </div>
        <div class="col-lg-7 px-md-5">
          <img src="../assets/landing page.png" class="home-img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['user']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.home {
  max-height: 100%;
  overflow: hidden;
}

.home-text-header {
  font-size: 40px;
  font-family: 'Pacifico', cursive;
}

.home-img {
  width: 100%;
}

@media (min-width: 992px) {
  .home-img {
    max-width: 800px !important;
  }
}
</style>
