<template>
  <div class="login row container-fluid align-items-center justify-content-center p-0 mx-0">
    <div class="col-sm col-md-6 p-0">
      <img
        src="https://res.cloudinary.com/sam-kay/image/upload/q_auto:low/v%20chat/20945760-min_1_1_xweu9y.png"
        class="login-img img-fluid"
        alt=""
      />
    </div>
    <div class="col-sm col-md-6 row mx-0">
      <form @submit.prevent="login" class="card bg-light col-md-11 col-lg-7 container p-3 py-5">
        <h3 class="font-weight-bold text-primary login-heading mb-4">
          Hello, <br />
          Welcome back!
        </h3>
        <div class="alert alert-danger px-3" v-if="error">{{ error }}</div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <Loader v-if="loader" />
      </form>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import Loader from '../components/loader.vue'
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
      loader: false
    }
  },
  components: { Loader },
  methods: {
    login() {
      if (this.email && this.password) {
        this.loader = true
      }
      const info = {
        email: this.email,
        password: this.password
      }
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push('/')
            this.loader = false
          },
          error => {
            this.error = error.message
            this.loader = false
          }
        )
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 94vh;
}
.login-img {
  width: 95%;
}
</style>
