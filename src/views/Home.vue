<template>
  <div class="mt-3">
    <div class="text-center">
      <!-- Welcome <span class="font-weight-bold text-info">{{ user }}</span> -->
    </div>
    <div class="container-fluid text-center">
      <div class="row align-items-center p-5">
        <div class="col-md-5 text-md-left align-middle">
          <h4 class="display-4 text-primary mb-2">V-Chat</h4>
          <p class="lead ">
          Real time video chats and communication between multiple users, allowing you to create rooms for your meetings and invite
            attendees.
          </p>
          <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
        </div>
        <div class="col-md-7">
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
.home-img {
  width: 100%;
}

.lead{
 
}
@media (min-width: 992px)
{
  .home-img {
max-width:800px !important;
}
}
</style>
